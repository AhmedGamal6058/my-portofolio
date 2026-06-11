import { Component, inject, computed } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-sky',
  standalone: true,
  templateUrl: './sky.html',
  styleUrl: './sky.scss',
})
export class SkyComponent {
  protected readonly themeService = inject(ThemeService);
  protected readonly isLight = computed(() => this.themeService.theme() === 'light');
}
