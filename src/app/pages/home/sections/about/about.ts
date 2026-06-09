import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioService } from '../../../../core/services/portfolio.service';

interface Highlight {
  icon: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule, MatIconModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  protected readonly portfolio = inject(PortfolioService);

  protected readonly highlights: Highlight[] = [
    {
      icon: 'bi-lightning-charge-fill',
      title: 'Performance First',
      text: 'I obsess over Core Web Vitals, lazy loading, and bundle size to deliver lightning-fast experiences.',
    },
    {
      icon: 'bi-diagram-3-fill',
      title: 'Scalable Architecture',
      text: 'Building modular, testable codebases with feature modules, smart/dumb components, and clean state management.',
    },
    {
      icon: 'bi-universal-access',
      title: 'Accessible by Default',
      text: 'WCAG-compliant UI, full keyboard navigation, screen-reader friendly markup and RTL support.',
    },
    {
      icon: 'bi-people-fill',
      title: 'Team Player & Mentor',
      text: 'Code reviews, pair-programming and mentoring — I lift the team around me as I grow.',
    },
  ];
}
