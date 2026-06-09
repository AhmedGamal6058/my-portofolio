import { Injectable } from '@angular/core';
import { Skill } from '../models/skill.model';
import { Project } from '../models/project.model';
import { Experience } from '../models/experience.model';
import { Testimonial } from '../models/testimonial.model';
import { SocialLink } from '../models/social.model';
import { Stat } from '../models/stat.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  readonly name = 'Ahmed Hassan';
  readonly role = 'Senior Angular Frontend Developer';
  readonly tagline = 'Building fast, scalable & delightful web experiences with Angular.';
  readonly location = 'Cairo, Egypt · Available Remote';
  readonly email = 'ahmed.hassan.dev@example.com';
  readonly phone = '+20 100 123 4567';
  readonly bio = `Frontend specialist with 3+ years of experience architecting and shipping
production-grade Angular applications. Passionate about clean architecture,
performant UIs, accessibility, and turning complex requirements into elegant,
intuitive interfaces.`;
  readonly avatarInitials = 'AH';

  readonly stats: Stat[] = [
    { label: 'Years Experience', value: '3+', icon: 'bi-calendar-check' },
    { label: 'Projects Shipped', value: '25+', icon: 'bi-rocket-takeoff' },
    { label: 'Happy Clients', value: '18', icon: 'bi-people' },
    { label: 'Code Reviews', value: '1.2k', icon: 'bi-code-slash' },
  ];

  readonly socials: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com', icon: 'bi-github', color: '#ffffff' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'bi-linkedin', color: '#0a66c2' },
    { name: 'Stack Overflow', url: 'https://stackoverflow.com', icon: 'bi-stack-overflow', color: '#f48024' },
    { name: 'Twitter / X', url: 'https://x.com', icon: 'bi-twitter-x', color: '#e7e9ea' },
    { name: 'Email', url: 'mailto:ahmed.hassan.dev@example.com', icon: 'bi-envelope-at', color: '#ea4335' },
  ];

  readonly skills: Skill[] = [
    // Frontend core
    { name: 'Angular (2-17)', icon: 'bi-filetype-html', level: 'expert', years: 3, category: 'frontend' },
    { name: 'TypeScript', icon: 'bi-filetype-tsx', level: 'expert', years: 3, category: 'frontend' },
    { name: 'RxJS', icon: 'bi-arrow-repeat', level: 'advanced', years: 3, category: 'frontend' },
    { name: 'JavaScript (ES2024)', icon: 'bi-filetype-js', level: 'expert', years: 4, category: 'frontend' },
    { name: 'HTML5 & SCSS', icon: 'bi-filetype-scss', level: 'expert', years: 5, category: 'frontend' },
    // UI
    { name: 'Angular Material', icon: 'bi-palette', level: 'advanced', years: 3, category: 'ui' },
    { name: 'Bootstrap 5', icon: 'bi-grid-1x2-fill', level: 'expert', years: 4, category: 'ui' },
    { name: 'TailwindCSS', icon: 'bi-wind', level: 'advanced', years: 2, category: 'ui' },
    { name: 'PrimeNG', icon: 'bi-ui-checks', level: 'intermediate', years: 1, category: 'ui' },
    // State
    { name: 'NgRx', icon: 'bi-diagram-3', level: 'advanced', years: 2, category: 'state' },
    { name: 'Akita / Signals', icon: 'bi-broadcast', level: 'advanced', years: 2, category: 'state' },
    // Tooling
    { name: 'Git & GitHub', icon: 'bi-git', level: 'expert', years: 5, category: 'tooling' },
    { name: 'Nx / Monorepo', icon: 'bi-boxes', level: 'advanced', years: 2, category: 'tooling' },
    { name: 'Webpack / Vite', icon: 'bi-hammer', level: 'intermediate', years: 2, category: 'tooling' },
    { name: 'Docker (basics)', icon: 'bi-docker', level: 'intermediate', years: 1, category: 'tooling' },
    // Testing
    { name: 'Jest / Karma', icon: 'bi-bug', level: 'advanced', years: 3, category: 'testing' },
    { name: 'Cypress / Playwright', icon: 'bi-check2-square', level: 'intermediate', years: 2, category: 'testing' },
    { name: 'Storybook', icon: 'bi-book', level: 'intermediate', years: 1, category: 'testing' },
    // Soft
    { name: 'Team Leadership', icon: 'bi-people-fill', level: 'advanced', years: 2, category: 'soft' },
    { name: 'Agile / Scrum', icon: 'bi-kanban', level: 'expert', years: 3, category: 'soft' },
    { name: 'Mentoring', icon: 'bi-mortarboard', level: 'advanced', years: 2, category: 'soft' },
  ];

  readonly experiences: Experience[] = [
    {
      id: 'exp-1',
      company: 'Brightware Tech',
      role: 'Senior Angular Developer',
      period: 'Mar 2024 — Present',
      startDate: '2024-03',
      location: 'Cairo, Egypt · Hybrid',
      type: 'full-time',
      description:
        'Leading the frontend chapter of a fintech SaaS platform serving 50k+ monthly users. Owning architecture, performance, and developer experience.',
      achievements: [
        'Migrated legacy AngularJS modules to Angular 17 standalone components — cut bundle size by 38%.',
        'Designed a reusable component library (40+ components) used across 4 product lines.',
        'Mentored 3 mid-level developers; introduced code-review culture and linting standards.',
        'Improved Core Web Vitals (LCP 1.2s, CLS 0.02) using lazy loading, image CDN and signals.',
      ],
      stack: ['Angular 17', 'NgRx', 'Signals', 'Material', 'Tailwind', 'Nx', 'Jest', 'Cypress'],
    },
    {
      id: 'exp-2',
      company: 'NileBits Solutions',
      role: 'Angular Frontend Developer',
      period: 'Jan 2023 — Feb 2024',
      startDate: '2023-01',
      endDate: '2024-02',
      location: 'Cairo, Egypt',
      type: 'full-time',
      description:
        'Built enterprise dashboards and admin panels for logistics and HR clients. Focused on accessibility, RTL support, and complex forms.',
      achievements: [
        'Delivered 6 production projects end-to-end with 99% on-time delivery.',
        'Built a dynamic form-engine with JSON schema (similar to Angular Reactive Forms).',
        'Implemented multi-theme, fully RTL-compliant UI with Angular Material + Bootstrap.',
        'Set up CI/CD pipelines reducing deploy time from 25 to 4 minutes.',
      ],
      stack: ['Angular 15-16', 'RxJS', 'NgRx', 'Bootstrap 5', 'Material', 'Karma'],
    },
    {
      id: 'exp-3',
      company: 'Codeforge Agency',
      role: 'Junior Frontend Developer',
      period: 'Jun 2022 — Dec 2022',
      startDate: '2022-06',
      endDate: '2022-12',
      location: 'Remote',
      type: 'full-time',
      description:
        'Worked on a variety of client projects (e-commerce, marketing sites, internal tools) gaining solid Angular fundamentals.',
      achievements: [
        'Built 8+ responsive landing pages and e-commerce storefronts.',
        'Integrated Stripe, PayPal and Firebase Auth in 3 different projects.',
        'Introduced unit testing with Jasmine/Karma — coverage grew from 0% to 65%.',
      ],
      stack: ['Angular 14', 'TypeScript', 'Bootstrap 5', 'Firebase', 'Stripe'],
    },
  ];

  readonly projects: Project[] = [
    {
      id: 'p1',
      title: 'FinFlow — Personal Finance SaaS',
      shortDescription:
        'A modern fintech dashboard with real-time analytics, smart budgets and AI insights.',
      description:
        'FinFlow is a complete personal-finance platform I built as a flagship project. It features real-time transaction syncing, smart categorization, beautiful charts, and a fully responsive UI supporting both LTR and RTL.',
      image: 'gradient-1',
      tags: ['Angular 17', 'NgRx', 'Signals', 'D3.js', 'Tailwind', 'PWA'],
      category: 'saas',
      features: [
        'Real-time data via WebSockets & RxJS',
        'Reusable chart components with D3.js',
        'PWA with offline support & push notifications',
        'WCAG 2.1 AA accessibility compliance',
      ],
      demoUrl: '#',
      repoUrl: '#',
      featured: true,
      year: 2024,
    },
    {
      id: 'p2',
      title: 'ShopSphere E-commerce',
      shortDescription:
        'High-performance storefront with headless CMS, payments and multi-currency support.',
      description:
        'A complete headless e-commerce experience built on Angular Universal for SEO and lightning fast loads. Includes advanced filtering, wishlist, and a fully featured admin panel.',
      image: 'gradient-2',
      tags: ['Angular 16', 'SSR', 'Stripe', 'Algolia', 'Material'],
      category: 'ecommerce',
      features: [
        'Server-Side Rendering with Angular Universal',
        'Algolia-powered instant search',
        'Stripe + PayPal checkout flows',
        'Multi-currency & multi-language',
      ],
      demoUrl: '#',
      repoUrl: '#',
      featured: true,
      client: 'RetailMax',
      year: 2024,
    },
    {
      id: 'p3',
      title: 'MediTrack Clinic Dashboard',
      shortDescription:
        'A clinical operations dashboard for hospitals — appointments, patients & analytics.',
      description:
        'An enterprise dashboard for healthcare. Handles 10k+ patients, role-based access, real-time queue management, and interactive analytics for hospital admins.',
      image: 'gradient-3',
      tags: ['Angular 15', 'NgRx', 'WebSockets', 'Material', 'Jest'],
      category: 'dashboard',
      features: [
        'Role-based access (Doctor, Nurse, Admin, Patient)',
        'Real-time appointment queue via WebSockets',
        'Custom drag-and-drop scheduling',
        'Full RTL + dark/light theme support',
      ],
      demoUrl: '#',
      featured: true,
      client: 'Nile Medical Group',
      year: 2023,
    },
    {
      id: 'p4',
      title: 'Taskly — Project Management',
      shortDescription:
        'A Trello-inspired Kanban tool with real-time collaboration and team chat.',
      description:
        'A modern project management app with drag-and-drop boards, real-time team collaboration using WebSockets, and full keyboard accessibility.',
      image: 'gradient-4',
      tags: ['Angular 17', 'Signals', 'Socket.io', 'Bootstrap 5'],
      category: 'web',
      features: [
        'Drag & drop boards with CDK',
        'Real-time multi-user collaboration',
        'Offline-first with IndexedDB',
        'Keyboard-first accessible UI',
      ],
      repoUrl: '#',
      featured: false,
      year: 2024,
    },
    {
      id: 'p5',
      title: 'Lumen Blog — Developer Hub',
      shortDescription:
        'A blazing fast developer blogging platform with MDX, syntax highlight & SEO.',
      description:
        'A content-focused platform built with Angular Universal, MDX, and a custom CMS. Optimized for Core Web Vitals and SEO.',
      image: 'gradient-5',
      tags: ['Angular 16', 'SSR', 'MDX', 'Prisma', 'Tailwind'],
      category: 'web',
      features: [
        'Server-side rendering & ISR-style caching',
        'MDX with custom Angular renderer',
        'Shiki syntax highlighting',
        'Lighthouse score: 98/100',
      ],
      demoUrl: '#',
      repoUrl: '#',
      featured: false,
      year: 2023,
    },
    {
      id: 'p6',
      title: 'FitPulse — Workout PWA',
      shortDescription:
        'Offline-first workout tracker PWA with custom plans and progress analytics.',
      description:
        'A fitness PWA that works fully offline. Users can create custom workout plans, track progress, and sync data when back online.',
      image: 'gradient-6',
      tags: ['Angular 17', 'PWA', 'IndexedDB', 'Signals', 'Charts.js'],
      category: 'pwa',
      features: [
        'Fully offline-capable (Service Worker + IndexedDB)',
        'Custom workout plan builder',
        'Progress charts with Chart.js',
        'Installable on iOS, Android & Desktop',
      ],
      demoUrl: '#',
      featured: false,
      year: 2024,
    },
  ];

  readonly testimonials: Testimonial[] = [
    {
      id: 't1',
      name: 'Sara El-Sayed',
      role: 'Product Manager',
      company: 'Brightware Tech',
      avatar: 'SE',
      message:
        'Ahmed is one of the rare developers who deeply understands both the technical and product side. He shipped our most complex feature ahead of schedule and made it look easy.',
      rating: 5,
    },
    {
      id: 't2',
      name: 'Mohamed Adel',
      role: 'CTO',
      company: 'NileBits Solutions',
      avatar: 'MA',
      message:
        'Working with Ahmed was a turning point for our frontend team. His code quality, attention to detail, and mentorship lifted the whole team to a new level.',
      rating: 5,
    },
    {
      id: 't3',
      name: 'Layla Mostafa',
      role: 'Lead Designer',
      company: 'Codeforge Agency',
      avatar: 'LM',
      message:
        'Finally, a developer who genuinely cares about design fidelity. Ahmed brings UI mockups to life pixel-perfect and suggests improvements that always enhance the UX.',
      rating: 5,
    },
    {
      id: 't4',
      name: 'Karim Nassar',
      role: 'Engineering Manager',
      company: 'RetailMax',
      avatar: 'KN',
      message:
        'Ahmed led the migration of our storefront to Angular 17. The result: 40% smaller bundle, faster TTI, and zero regressions in production.',
      rating: 5,
    },
  ];
}
