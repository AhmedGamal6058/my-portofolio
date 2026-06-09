import { Component, inject, OnDestroy, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar';
import { FooterComponent } from './shared/footer/footer';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private revealObserver: IntersectionObserver | null = null;
  private domObserver: MutationObserver | null = null;
  protected readonly themeService = inject(ThemeService);
  protected readonly isScrolled = signal(false);
  protected readonly cursorX = signal(0);
  protected readonly cursorY = signal(0);
  protected readonly cursorVisible = signal(false);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // Scroll detection
    window.addEventListener('scroll', () => {
      this.isScrolled.set(window.scrollY > 30);
    }, { passive: true });

    // Custom cursor (desktop only)
    try {
      if (window.matchMedia('(pointer: fine)').matches) {
        window.addEventListener('mousemove', (e: MouseEvent) => {
          this.cursorX.set(e.clientX);
          this.cursorY.set(e.clientY);
          this.cursorVisible.set(true);
        });
        document.addEventListener('mouseleave', () => this.cursorVisible.set(false));
      }
    } catch {
      // ignore
    }

    // Reveal on scroll
    this.initRevealOnScroll();
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
    this.domObserver?.disconnect();
  }

  private initRevealOnScroll(): void {
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback: just show all reveals
      this.showAllRevealElements();
      return;
    }

    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.revealObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    const observeRevealElements = () => this.observeRevealElements();

    observeRevealElements();
    requestAnimationFrame(observeRevealElements);
    setTimeout(observeRevealElements, 120);
    setTimeout(observeRevealElements, 400);

    if (typeof MutationObserver !== 'undefined') {
      this.domObserver = new MutationObserver(() => observeRevealElements());
      this.domObserver.observe(document.body, { childList: true, subtree: true });
    }
  }

  private observeRevealElements(): void {
    document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
      if (el.classList.contains('visible')) {
        return;
      }

      if (this.isElementAlreadyInView(el)) {
        el.classList.add('visible');
        return;
      }

      this.revealObserver?.observe(el);
    });
  }

  private isElementAlreadyInView(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight - 40;
  }

  private showAllRevealElements(): void {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
  }
}
