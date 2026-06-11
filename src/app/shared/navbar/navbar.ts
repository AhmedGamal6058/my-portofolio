import { Component, inject, input, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeService } from '../../core/services/theme.service';
import { I18nService } from '../../core/services/i18n.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

interface NavLink {
  key: string;
  href: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    TranslatePipe,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  readonly scrolled = input(false);
  protected readonly themeService = inject(ThemeService);
  protected readonly i18n = inject(I18nService);

  protected readonly mobileOpen = signal(false);
  protected readonly activeSection = signal('home');

  protected readonly links: NavLink[] = [
    { key: 'nav.home', href: '#home', icon: 'home' },
    { key: 'nav.about', href: '#about', icon: 'person' },
    { key: 'nav.skills', href: '#skills', icon: 'psychology' },
    { key: 'nav.projects', href: '#projects', icon: 'work' },
    { key: 'nav.experience', href: '#experience', icon: 'timeline' },
    { key: 'nav.education', href: '#education', icon: 'school' },
    { key: 'nav.contact', href: '#contact', icon: 'mail' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    const sections = this.links.map((l) => l.href.replace('#', ''));
    const scrollPos = window.scrollY + 120;
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.offsetTop <= scrollPos) {
        this.activeSection.set(sections[i]);
        return;
      }
    }
  }

  toggleMobile(): void {
    this.mobileOpen.update((v) => !v);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }

  scrollTo(href: string, event: Event): void {
    event.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.closeMobile();
    }
  }
}
