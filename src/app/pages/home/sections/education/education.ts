import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { I18nService } from '../../../../core/services/i18n.service';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';
import { Education } from '../../../../core/models/education.model';

@Component({
  selector: 'app-education',
  imports: [CommonModule, MatIconModule, TranslatePipe],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class EducationComponent {
  protected readonly portfolio = inject(PortfolioService);
  private readonly i18n = inject(I18nService);

  get education(): Education[] {
    return this.portfolio.education;
  }

  trackById(_: number, e: Education): string {
    return e.id;
  }
}
