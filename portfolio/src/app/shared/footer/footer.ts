import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  protected readonly portfolio = inject(PortfolioService);
  protected readonly year = new Date().getFullYear();

  protected readonly quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  protected readonly services = [
    'Angular Development',
    'UI/UX Implementation',
    'Performance Audits',
    'Code Reviews',
    'Mentoring',
  ];
}
