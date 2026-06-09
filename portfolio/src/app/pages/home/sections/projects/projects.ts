import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { Project } from '../../../../core/models/project.model';
import { ProjectDialogComponent } from './project-dialog/project-dialog';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, MatDialogModule, MatIconModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  protected readonly portfolio = inject(PortfolioService);
  private readonly dialog = inject(MatDialog);
  private readonly snack = inject(MatSnackBar);

  protected readonly activeFilter = signal<string>('all');
  protected readonly filters = [
    { id: 'all', label: 'All' },
    { id: 'featured', label: 'Featured' },
    { id: 'saas', label: 'SaaS' },
    { id: 'dashboard', label: 'Dashboards' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'pwa', label: 'PWA' },
    { id: 'web', label: 'Web Apps' },
  ];

  protected readonly filtered = computed<Project[]>(() => {
    const f = this.activeFilter();
    if (f === 'all') return this.portfolio.projects;
    if (f === 'featured') return this.portfolio.projects.filter((p) => p.featured);
    return this.portfolio.projects.filter((p) => p.category === f);
  });

  gradientFor(image: string): string {
    const map: Record<string, string> = {
      'gradient-1': 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
      'gradient-2': 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
      'gradient-3': 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
      'gradient-4': 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
      'gradient-5': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      'gradient-6': 'linear-gradient(135deg, #f43f5e 0%, #f59e0b 100%)',
    };
    return map[image] ?? 'var(--gradient-primary)';
  }

  setFilter(id: string): void {
    this.activeFilter.set(id);
  }

  openProject(p: Project, event: Event): void {
    event.preventDefault();
    this.dialog.open(ProjectDialogComponent, {
      data: p,
      maxWidth: '900px',
      width: '95vw',
      panelClass: 'project-dialog-panel',
      autoFocus: false,
    });
  }

  copyEmail(event: Event): void {
    event.preventDefault();
    navigator.clipboard?.writeText(this.portfolio.email);
    this.snack.open('Email copied to clipboard!', '✓', { duration: 2500 });
  }
}
