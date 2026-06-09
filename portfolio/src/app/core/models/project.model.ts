export type ProjectCategory = 'web' | 'dashboard' | 'ecommerce' | 'saas' | 'pwa' | 'mobile';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string; // gradient / svg placeholder or url
  tags: string[];
  category: ProjectCategory;
  features: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
  client?: string;
  year: number;
}
