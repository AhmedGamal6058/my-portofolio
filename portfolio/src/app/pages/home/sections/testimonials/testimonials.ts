import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { Testimonial } from '../../../../core/models/testimonial.model';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule, MatIconModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class TestimonialsComponent {
  protected readonly portfolio = inject(PortfolioService);

  protected starsArray(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }

  trackById(_: number, t: Testimonial): string {
    return t.id;
  }
}
