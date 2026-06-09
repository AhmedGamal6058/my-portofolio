import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { Skill, SKILL_LEVEL_PERCENT } from '../../../../core/models/skill.model';

type Category = 'all' | 'frontend' | 'ui' | 'state' | 'tooling' | 'testing' | 'soft';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, MatTabsModule, MatChipsModule, MatIconModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  protected readonly portfolio = inject(PortfolioService);
  protected readonly activeCategory = signal<Category>('all');
  protected readonly percentMap = SKILL_LEVEL_PERCENT;

  protected readonly categories: { id: Category; label: string; icon: string }[] = [
    { id: 'all', label: 'All Skills', icon: 'grid_view' },
    { id: 'frontend', label: 'Frontend', icon: 'code' },
    { id: 'ui', label: 'UI & Design', icon: 'palette' },
    { id: 'state', label: 'State', icon: 'hub' },
    { id: 'tooling', label: 'Tooling', icon: 'build' },
    { id: 'testing', label: 'Testing', icon: 'bug_report' },
    { id: 'soft', label: 'Soft Skills', icon: 'groups' },
  ];

  protected readonly filteredSkills = computed<Skill[]>(() => {
    const cat = this.activeCategory();
    return cat === 'all'
      ? this.portfolio.skills
      : this.portfolio.skills.filter((s) => s.category === cat);
  });

  setCategory(cat: Category): void {
    this.activeCategory.set(cat);
  }

  countFor(cat: Category): number {
    if (cat === 'all') return this.portfolio.skills.length;
    return this.portfolio.skills.filter((s) => s.category === cat).length;
  }

  trackByName(_: number, item: Skill): string {
    return item.name;
  }
}
