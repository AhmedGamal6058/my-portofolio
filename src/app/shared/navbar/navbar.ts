import { Component, inject, input, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ThemeService } from '../../core/services/theme.service';

interface NavLink {
  label: string;
  href: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  readonly scrolled = input(false);
  protected readonly themeService = inject(ThemeService);

  protected readonly mobileOpen = signal(false);
  protected readonly activeSection = signal('home');

  protected readonly links: NavLink[] = [
    { label: 'Home', href: '#home', icon: 'home' },
    { label: 'About', href: '#about', icon: 'person' },
    { label: 'Skills', href: '#skills', icon: 'psychology' },
    { label: 'Projects', href: '#projects', icon: 'work' },
    { label: 'Experience', href: '#experience', icon: 'timeline' },
    { label: 'Contact', href: '#contact', icon: 'mail' },
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
