import { Injectable } from '@angular/core';
import { Skill } from '../models/skill.model';
import { Project } from '../models/project.model';
import { Experience } from '../models/experience.model';
import { Testimonial } from '../models/testimonial.model';
import { SocialLink } from '../models/social.model';
import { Stat } from '../models/stat.model';
import { Education } from '../models/education.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  readonly name = 'Ahmed Gamal';
  readonly role = 'Front End Developer';
  readonly fullTitle = 'Angular Front-End Developer | 4 years experience';
  readonly tagline =
    'Building scalable, maintainable & user-focused web applications with Angular.';
  readonly location = 'Banī Suwayf, Egypt';
  readonly phone = '+201060622621';
  readonly email = 'ahmedgamalragab120@gmail.com';
  readonly bio = `Front-End Developer (Angular) with 4 years of professional experience
building scalable, maintainable and high-performance web applications. Specialized
in modular, component-based architectures, reactive programming with RxJS and
Angular Signals, REST API integration, and delivering responsive, accessible,
user-focused interfaces. Proven ability to lead front-end work within
cross-functional teams, enforce clean code standards through code reviews, and
mentor junior developers in fast-paced Agile environments.`;
  readonly avatarInitials = 'AG';
  readonly avatarUrl = 'assets/images/my-photo.jpg';

  readonly stats: Stat[] = [
    { label: 'Years Experience', value: '4+', icon: 'bi-calendar-check' },
    { label: 'Years of Education', value: '4', icon: 'bi-mortarboard' },
    { label: 'Technologies', value: '18+', icon: 'bi-stack' },
    { label: 'Projects Shipped', value: '15+', icon: 'bi-rocket-takeoff' },
  ];

  readonly socials: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com', icon: 'bi-github', color: '#ffffff' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'bi-linkedin', color: '#0a66c2' },
    { name: 'Email', url: 'mailto:ahmedgamalragab120@gmail.com', icon: 'bi-envelope-at', color: '#ea4335' },
    { name: 'Phone', url: 'tel:+201060622621', icon: 'bi-telephone', color: '#22c55e' },
  ];

  readonly skills: Skill[] = [
    // Core Frontend
    { name: 'Angular', icon: 'bi-filetype-html', level: 'expert', years: 4, category: 'frontend' },
    { name: 'TypeScript', icon: 'bi-filetype-tsx', level: 'expert', years: 4, category: 'frontend' },
    { name: 'JavaScript (ES6+)', icon: 'bi-filetype-js', level: 'expert', years: 5, category: 'frontend' },
    { name: 'HTML5', icon: 'bi-filetype-html', level: 'expert', years: 5, category: 'frontend' },
    { name: 'CSS3', icon: 'bi-filetype-css', level: 'expert', years: 5, category: 'frontend' },
    { name: 'SCSS', icon: 'bi-filetype-scss', level: 'expert', years: 4, category: 'frontend' },
    { name: 'Bootstrap', icon: 'bi-grid-1x2-fill', level: 'expert', years: 4, category: 'frontend' },
    // State & Reactivity
    { name: 'RxJS', icon: 'bi-arrow-repeat', level: 'advanced', years: 4, category: 'state' },
    { name: 'Angular Signals', icon: 'bi-broadcast', level: 'advanced', years: 2, category: 'state' },
    { name: 'NgRx', icon: 'bi-diagram-2', level: 'intermediate', years: 2, category: 'state' },
    { name: 'Component-Based Design', icon: 'bi-diagram-3', level: 'expert', years: 4, category: 'state' },
    // UI
    { name: 'Angular Material', icon: 'bi-palette', level: 'advanced', years: 3, category: 'ui' },
    { name: 'Apache ECharts', icon: 'bi-bar-chart-line', level: 'advanced', years: 2, category: 'ui' },
    { name: 'Mobiscroll', icon: 'bi-calendar-event', level: 'intermediate', years: 1, category: 'ui' },
    { name: 'Responsive & RTL Design', icon: 'bi-phone', level: 'expert', years: 4, category: 'ui' },
    // Testing
    { name: 'Jasmine & Karma', icon: 'bi-check2-circle', level: 'advanced', years: 3, category: 'testing' },
    { name: 'Unit Testing', icon: 'bi-bug', level: 'advanced', years: 3, category: 'testing' },
    // Tooling & Architecture
    { name: 'RESTful APIs', icon: 'bi-cloud-arrow-down', level: 'advanced', years: 4, category: 'tooling' },
    { name: 'Git', icon: 'bi-git', level: 'expert', years: 5, category: 'tooling' },
    { name: 'GitHub', icon: 'bi-github', level: 'expert', years: 5, category: 'tooling' },
    { name: 'GitLab CI/CD', icon: 'bi-git', level: 'advanced', years: 2, category: 'tooling' },
    { name: 'NPM', icon: 'bi-box', level: 'expert', years: 4, category: 'tooling' },
    { name: 'Modular Architecture', icon: 'bi-boxes', level: 'advanced', years: 4, category: 'tooling' },
    { name: 'Lazy Loading & Code Splitting', icon: 'bi-lightning-charge', level: 'advanced', years: 4, category: 'tooling' },
  ];

  readonly experiences: Experience[] = [
    {
      id: 'exp-1',
      company: 'Al Mnabr Consulting Engineering',
      role: 'Front-End Developer (Angular)',
      period: '2023 — Present',
      startDate: '2023-01',
      endDate: '2026-06',
      location: 'Cairo, Egypt (Remote)',
      type: 'full-time',
      description:
        'Own the front-end of a modular Angular platform: architecting standalone components with Signals and OnPush change detection, leading code reviews, and shipping accessible, high-performance features in Agile sprints.',
      achievements: [
        'Architected a modular Angular frontend with standalone components, Signals-based state, and OnPush change detection across the app.',
        'Cut initial bundle size by ~35% and improved LCP via route-level lazy loading, code splitting, and image optimization, strengthening Core Web Vitals.',
        'Translated Figma/UX specs into a reusable component library with a lightweight design system and living documentation.',
        'Integrated REST APIs with typed models, interceptors for auth/error handling, and robust reactive form validation.',
        'Built interactive dashboards and data visualizations with Apache ECharts, enhancing data clarity for end users.',
        'Introduced unit testing standards with Jasmine/Karma, raising coverage on critical modules.',
        'Led code reviews and mentored 2 junior developers, raising team-wide front-end quality and consistency.',
        'Collaborated with product, design, and backend in Agile sprints to scope, plan, and ship features on schedule.',
      ],
      stack: [
        'Angular',
        'TypeScript',
        'RxJS',
        'Angular Signals',
        'SCSS',
        'Bootstrap',
        'Angular Material',
        'Apache ECharts',
        'Mobiscroll',
        'REST APIs',
        'Jasmine/Karma',
        'Git',
      ],
    },
    {
      id: 'exp-2',
      company: 'Freelance',
      role: 'Front-End Developer',
      period: '2021 — 2023',
      startDate: '2021-09',
      endDate: '2023-01',
      location: 'Banī Suwayf, Egypt (Remote)',
      type: 'freelance',
      description:
        'Delivered responsive websites and single-page applications for local businesses and startups, growing from vanilla JavaScript projects into full Angular SPAs.',
      achievements: [
        'Designed and shipped 10+ responsive, mobile-first websites and landing pages with HTML5, CSS3 (Flexbox/Grid), and JavaScript (ES6+).',
        'Built single-page applications with Angular, implementing client-side routing, reusable components, and REST API integration.',
        'Improved client page-load times through asset optimization, lazy loading, and semantic, SEO-friendly markup.',
        'Implemented bilingual (Arabic/English) interfaces with full RTL support and accessible, keyboard-friendly navigation.',
        'Managed the full delivery cycle directly with clients: requirements, estimates, iterations, and deployment.',
      ],
      stack: [
        'Angular',
        'JavaScript',
        'TypeScript',
        'HTML5',
        'CSS3',
        'SCSS',
        'Bootstrap',
        'REST APIs',
        'Git',
      ],
    },
  ];

  readonly education: Education[] = [
    {
      id: 'edu-1',
      degree: 'education.degree.bachelor',
      degreeFull: 'Bachelor of Science in Computer Science',
      facultyKey: 'education.faculty',
      faculty: 'Faculty of Computer Science',
      university: 'Banī Suwayf University',
      location: 'Banī Suwayf, Egypt',
      period: '2018 — 2022',
      startDate: '2018-09',
      endDate: '2022-06',
      grade: 'B+',
      gradeFull: 'Graduated with B+ standing',
      courseworkKey: 'education.coursework',
      courses: [
        'Data Structures & Algorithms',
        'Web Development',
        'Databases',
        'Software Engineering',
        'Computer Networks',
      ],
      emphasisKey: 'education.emphasis',
      emphasis: 'HTML5, CSS3, JavaScript (ES6+), Angular, Git, REST APIs',
    },
  ];

  readonly projects: Project[] = [
    {
      id: 'p1',
      title: 'Modular Angular Frontend System',
      shortDescription:
        'A scalable component-based Angular application with modular architecture and reusable design system.',
      description:
        'Built as part of the work at Al Mnabr Consulting Engineering — a modular Angular frontend system featuring standalone components, Signals-based state, lazy loading, and a lightweight design system.',
      image: 'gradient-1',
      tags: ['Angular', 'TypeScript', 'Signals', 'SCSS', 'Lazy Loading'],
      category: 'web',
      features: [
        'Standalone components with Signals-based state',
        'Lightweight design system & component documentation',
        'Route-level lazy loading and code splitting',
        'Responsive and accessible UI (WCAG-aware)',
      ],
      featured: true,
      year: 2024,
    },
    {
      id: 'p2',
      title: 'Interactive Data Dashboards',
      shortDescription:
        'Data-driven dashboards with interactive visualizations using Apache ECharts.',
      description:
        'Interactive dashboards and data visualizations using Apache ECharts, enhancing data clarity for end users. Includes multiple chart types, filtering, drill-down, and responsive layouts.',
      image: 'gradient-2',
      tags: ['Angular', 'Apache ECharts', 'TypeScript', 'RxJS'],
      category: 'dashboard',
      features: [
        'Interactive charts with Apache ECharts',
        'Dynamic data filtering and drill-down',
        'Responsive dashboard layouts',
        'Real-time data updates with RxJS streams',
      ],
      featured: true,
      year: 2024,
    },
    {
      id: 'p3',
      title: 'Consulting Engineering Platform',
      shortDescription:
        'A responsive web platform for consulting engineering services with REST API integration.',
      description:
        'A web platform built for consulting engineering services, integrating REST APIs with typed models and interceptors, client-side routing, state management, and robust reactive form validation.',
      image: 'gradient-3',
      tags: ['Angular', 'REST APIs', 'SCSS', 'Bootstrap', 'TypeScript'],
      category: 'web',
      features: [
        'REST API integration with typed models & interceptors',
        'Client-side routing & state management',
        'Robust reactive form validation',
        'Performance optimization (code-splitting, image optimization)',
      ],
      featured: true,
      year: 2023,
    },
    {
      id: 'p4',
      title: 'Bilingual Portfolio Platform',
      shortDescription:
        'This portfolio — a bilingual (AR/EN) Angular app with full RTL support, theming, and Signals.',
      description:
        'A fully bilingual portfolio built with modern Angular: standalone components, Signals, a custom lightweight i18n layer with instant AR/EN switching and RTL support, dark/light theming, and scroll-driven animations that respect reduced-motion preferences.',
      image: 'gradient-4',
      tags: ['Angular', 'Signals', 'i18n', 'RTL', 'SCSS'],
      category: 'web',
      features: [
        'Custom i18n with instant Arabic/English switching',
        'Full RTL layout support',
        'Dark/light theme with persisted preference',
        'Accessible, reduced-motion-aware animations',
      ],
      featured: false,
      year: 2025,
    },
  ];

  readonly testimonials: Testimonial[] = [
    {
      id: 't1',
      name: 'Project Manager',
      role: 'Project Manager',
      company: 'Al Mnabr Consulting Engineering',
      avatar: 'PM',
      message:
        'Ahmed is a dedicated Angular developer who consistently delivered clean, modular code. His attention to performance and accessibility made a real difference in our projects.',
      rating: 5,
    },
    {
      id: 't2',
      name: 'Colleague',
      role: 'Frontend Developer',
      company: 'Al Mnabr Consulting Engineering',
      avatar: 'CD',
      message:
        'Working with Ahmed was a great experience. He has a solid grasp of component-based architecture and always brings thoughtful suggestions to improve the codebase.',
      rating: 5,
    },
  ];
}
