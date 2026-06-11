import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { I18nService } from '../../../../core/services/i18n.service';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';

interface Highlight {
  icon: string;
  titleKey: string;
  textKey: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule, MatIconModule, TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  protected readonly portfolio = inject(PortfolioService);
  protected readonly i18n = inject(I18nService);

  protected readonly highlights: Highlight[] = [
    {
      icon: 'bi-lightning-charge-fill',
      titleKey: 'about.highlights.performance.title',
      textKey: 'about.highlights.performance.text',
    },
    {
      icon: 'bi-diagram-3-fill',
      titleKey: 'about.highlights.architecture.title',
      textKey: 'about.highlights.architecture.text',
    },
    {
      icon: 'bi-universal-access',
      titleKey: 'about.highlights.accessibility.title',
      textKey: 'about.highlights.accessibility.text',
    },
    {
      icon: 'bi-people-fill',
      titleKey: 'about.highlights.team.title',
      textKey: 'about.highlights.team.text',
    },
  ];
}
