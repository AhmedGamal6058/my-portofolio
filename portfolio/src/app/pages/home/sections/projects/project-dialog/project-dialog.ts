import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../../../../../core/models/project.model';

@Component({
  selector: 'app-project-dialog',
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './project-dialog.html',
  styleUrl: './project-dialog.scss',
})
export class ProjectDialogComponent {
  private readonly dialogRef = inject(MatDialogRef<ProjectDialogComponent>);

  constructor(@Inject(MAT_DIALOG_DATA) public project: Project) {}

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

  close(): void {
    this.dialogRef.close();
  }
}
