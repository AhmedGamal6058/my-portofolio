import { Component, inject, signal, OnInit, OnDestroy, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { I18nService } from '../../../../core/services/i18n.service';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, MatIconModule, MatButtonModule, TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  protected readonly portfolio = inject(PortfolioService);
  private readonly i18n = inject(I18nService);

  protected readonly currentRole = signal('');
  private roleInterval: ReturnType<typeof setTimeout> | null = null;
  protected readonly counters = signal<Record<string, number>>({});

  protected readonly roles = computed(() => [
    this.i18n.t('hero.roles.0'),
    this.i18n.t('hero.roles.1'),
    this.i18n.t('hero.roles.2'),
    this.i18n.t('hero.roles.3'),
  ]);

  constructor() {
    effect(() => {
      this.i18n.locale();
      this.restartTypewriter();
    });
  }

  ngOnInit(): void {
    this.startTypewriter();
    this.startCounters();
  }

  ngOnDestroy(): void {
    if (this.roleInterval) clearTimeout(this.roleInterval);
  }

  private restartTypewriter(): void {
    if (this.roleInterval) clearTimeout(this.roleInterval);
    this.currentRole.set('');
    this.startTypewriter();
  }

  private startTypewriter(): void {
    let i = 0;
    let charIndex = 0;
    let deleting = false;
    const tick = () => {
      const word = this.roles()[i];
      if (!word) return;
      if (!deleting) {
        this.currentRole.set(word.substring(0, charIndex + 1));
        charIndex++;
        if (charIndex === word.length) {
          deleting = true;
          this.roleInterval = setTimeout(tick, 1800);
          return;
        }
      } else {
        this.currentRole.set(word.substring(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          i = (i + 1) % this.roles().length;
        }
      }
      this.roleInterval = setTimeout(tick, deleting ? 40 : 90);
    };
    tick();
  }

  private startCounters(): void {
    if (typeof IntersectionObserver === 'undefined') {
      this.animateCounters();
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          this.animateCounters();
          observer.disconnect();
        }
      });
    });
    setTimeout(() => {
      const el = document.querySelector('.hero-stats');
      if (el) observer.observe(el);
    }, 100);
  }

  private animateCounters(): void {
    const duration = 1500;
    const start = performance.now();
    const targets = this.portfolio.stats.map((s) => ({
      label: s.label,
      target: parseInt(s.value.replace(/\D/g, ''), 10) || 0,
    }));

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const result: Record<string, number> = {};
      targets.forEach((t) => (result[t.label] = Math.floor(t.target * eased)));
      this.counters.set(result);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  formatValue(label: string, original: string): string {
    const num = this.counters()[label] ?? 0;
    const suffix = original.replace(/[0-9]/g, '');
    return `${num}${suffix}`;
  }

  statLabel(label: string): string {
    const map: Record<string, string> = {
      'Years Experience': 'stats.years',
      'Projects Shipped': 'stats.projects',
      'Technologies': 'stats.techs',
      'Code Reviews': 'stats.reviews',
      'Years of Education': 'stats.education',
    };
    return this.i18n.t(map[label] ?? label, label);
  }

  onAvatarError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
  }
}
