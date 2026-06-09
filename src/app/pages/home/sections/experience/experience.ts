import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioService } from '../../../../core/services/portfolio.service';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, MatIconModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  protected readonly portfolio = inject(PortfolioService);

  protected typeLabel(t: string): string {
    const map: Record<string, string> = {
      'full-time': 'Full-time',
      'part-time': 'Part-time',
      contract: 'Contract',
      freelance: 'Freelance',
    };
    return map[t] ?? t;
  }
}
