import { Injectable, signal, PLATFORM_ID, inject, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Locale = 'en' | 'ar';

export interface LocaleInfo {
  code: Locale;
  label: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

export const LOCALES: LocaleInfo[] = [
  { code: 'en', label: 'English', flag: 'EN', dir: 'ltr' },
  { code: 'ar', label: 'العربية', flag: 'AR', dir: 'rtl' },
];

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly storageKey = 'portfolio-locale';

  readonly locale = signal<Locale>('en');
  readonly dir = computed<'ltr' | 'rtl'>(() => (this.locale() === 'ar' ? 'rtl' : 'ltr'));
  readonly isRtl = computed(() => this.dir() === 'rtl');

  // Dictionaries registered from the App component on bootstrap
  private readonly dictionaries: Record<Locale, Record<string, string>> = {
    en: {},
    ar: {},
  };

  /** Register a translation dictionary for a locale. */
  register(locale: Locale, dict: Record<string, string>): void {
    this.dictionaries[locale] = { ...this.dictionaries[locale], ...dict };
  }

  set(locale: Locale): void {
    this.locale.set(locale);
    this.applyDom(locale, this.dir());
  }

  toggle(): void {
    this.locale.update((l) => (l === 'en' ? 'ar' : 'en'));
    this.applyDom(this.locale(), this.dir());
  }

  private applyDom(loc: Locale, dir: 'ltr' | 'rtl'): void {
    if (!isPlatformBrowser(this.platformId)) return;
    document.documentElement.lang = loc;
    document.documentElement.dir = dir;
    try {
      localStorage.setItem(this.storageKey, loc);
    } catch {
      /* ignore */
    }
  }

  t(key: string, fallback?: string): string {
    const loc = this.locale();
    return this.dictionaries[loc]?.[key] ?? fallback ?? key;
  }

  /** Reactive translation */
  tk(key: string, fallback?: string) {
    return computed(() => this.t(key, fallback));
  }
}
