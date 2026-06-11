import {
  Component,
  ElementRef,
  inject,
  NgZone,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  viewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Star {
  x: number;
  y: number;
  z: number; // depth (parallax layer 0..1)
  r: number; // radius
  baseAlpha: number;
  twinkle: number; // phase
  twinkleSpeed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  len: number;
  life: number;
  maxLife: number;
}

@Component({
  selector: 'app-starfield',
  standalone: true,
  template: `<canvas #canvas class="starfield-canvas" aria-hidden="true"></canvas>`,
  styleUrl: './starfield.scss',
})
export class StarfieldComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly zone = inject(NgZone);
  private readonly canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

  private ctx: CanvasRenderingContext2D | null = null;
  private rafId = 0;
  private stars: Star[] = [];
  private shooting: ShootingStar[] = [];
  private width = 0;
  private height = 0;
  private dpr = 1;
  private lastTime = 0;
  private running = false;
  private reducedMotion = false;

  private readonly onResize = () => this.resize();
  private readonly onVisibility = () => {
    if (document.hidden) {
      this.stop();
    } else if (!this.reducedMotion) {
      this.start();
    }
  };

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const canvas = this.canvasRef().nativeElement;
    this.ctx = canvas.getContext('2d');
    if (!this.ctx) return;

    this.reducedMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    this.resize();
    window.addEventListener('resize', this.onResize, { passive: true });
    document.addEventListener('visibilitychange', this.onVisibility);

    if (this.reducedMotion) {
      // Draw a single static frame for accessibility.
      this.drawStatic();
      return;
    }

    this.start();
  }

  ngOnDestroy(): void {
    this.stop();
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.onResize);
      document.removeEventListener('visibilitychange', this.onVisibility);
    }
  }

  private start(): void {
    if (this.running) return;
    this.running = true;
    this.lastTime = performance.now();
    this.zone.runOutsideAngular(() => {
      this.rafId = requestAnimationFrame((t) => this.loop(t));
    });
  }

  private stop(): void {
    this.running = false;
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = 0;
  }

  private resize(): void {
    const canvas = this.canvasRef().nativeElement;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    canvas.width = Math.floor(this.width * this.dpr);
    canvas.height = Math.floor(this.height * this.dpr);
    canvas.style.width = `${this.width}px`;
    canvas.style.height = `${this.height}px`;
    this.ctx?.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.seedStars();
    if (this.reducedMotion) this.drawStatic();
  }

  private seedStars(): void {
    // Density scales with viewport area, capped for performance.
    const area = this.width * this.height;
    const count = Math.min(Math.round(area / 4200), 420);
    this.stars = new Array(count).fill(0).map(() => {
      const z = Math.random();
      return {
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        z,
        r: 0.4 + z * 1.5,
        baseAlpha: 0.35 + z * 0.55,
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.6 + Math.random() * 1.6,
      };
    });
  }

  private loop(now: number): void {
    if (!this.running || !this.ctx) return;
    const dt = Math.min((now - this.lastTime) / 1000, 0.05);
    this.lastTime = now;

    this.update(dt);
    this.render(now / 1000);

    this.rafId = requestAnimationFrame((t) => this.loop(t));
  }

  private update(dt: number): void {
    // Gentle upward drift, faster for nearer (higher z) stars.
    for (const s of this.stars) {
      s.y -= (4 + s.z * 14) * dt;
      s.x += (1 + s.z * 3) * dt;
      if (s.y < -2) {
        s.y = this.height + 2;
        s.x = Math.random() * this.width;
      }
      if (s.x > this.width + 2) s.x = -2;
      s.twinkle += s.twinkleSpeed * dt;
    }

    // Spawn shooting stars occasionally.
    if (Math.random() < dt * 0.35 && this.shooting.length < 3) {
      this.spawnShootingStar();
    }
    for (const sh of this.shooting) {
      sh.x += sh.vx * dt;
      sh.y += sh.vy * dt;
      sh.life += dt;
    }
    this.shooting = this.shooting.filter((sh) => sh.life < sh.maxLife);
  }

  private spawnShootingStar(): void {
    const startX = Math.random() * this.width * 0.8;
    const startY = Math.random() * this.height * 0.4;
    const speed = 480 + Math.random() * 320;
    const angle = Math.PI * (0.18 + Math.random() * 0.12); // shallow downward-right
    this.shooting.push({
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      len: 120 + Math.random() * 100,
      life: 0,
      maxLife: 0.9 + Math.random() * 0.5,
    });
  }

  private render(time: number): void {
    const ctx = this.ctx!;
    ctx.clearRect(0, 0, this.width, this.height);

    // Stars
    for (const s of this.stars) {
      const flicker = 0.65 + 0.35 * Math.sin(s.twinkle + time);
      const alpha = Math.max(0, Math.min(1, s.baseAlpha * flicker));
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.z > 0.8 ? '#c4b5fd' : '#ffffff';
      ctx.fill();
    }

    // Shooting stars
    for (const sh of this.shooting) {
      const progress = sh.life / sh.maxLife;
      const fade = Math.sin(progress * Math.PI); // ease in/out
      const tailX = sh.x - (sh.vx / 800) * sh.len;
      const tailY = sh.y - (sh.vy / 800) * sh.len;
      const grad = ctx.createLinearGradient(sh.x, sh.y, tailX, tailY);
      grad.addColorStop(0, `rgba(255,255,255,${0.9 * fade})`);
      grad.addColorStop(1, 'rgba(167,139,250,0)');
      ctx.globalAlpha = 1;
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(sh.x, sh.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();
    }

    ctx.globalAlpha = 1;
  }

  private drawStatic(): void {
    if (!this.ctx) return;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);
    for (const s of this.stars) {
      ctx.globalAlpha = s.baseAlpha;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.z > 0.8 ? '#c4b5fd' : '#ffffff';
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
}
