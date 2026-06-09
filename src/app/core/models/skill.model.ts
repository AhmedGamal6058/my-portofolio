export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Skill {
  name: string;
  icon: string; // bootstrap-icons class e.g. 'bi-filetype-tsx'
  level: SkillLevel;
  years: number;
  category: 'frontend' | 'state' | 'ui' | 'tooling' | 'testing' | 'soft';
}

export const SKILL_LEVEL_PERCENT: Record<SkillLevel, number> = {
  beginner: 35,
  intermediate: 60,
  advanced: 80,
  expert: 95,
};
