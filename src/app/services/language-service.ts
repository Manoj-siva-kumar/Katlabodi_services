import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  private STORAGE_KEY = 'lang';
  private initialized = false;

  constructor(private translate: TranslateService) { }

  init(): Promise<void> {

    if (this.initialized) return Promise.resolve();

    const saved = localStorage.getItem(this.STORAGE_KEY) || 'en';

    this.translate.setDefaultLang('en');
    this.translate.use(saved);

    this.initialized = true;

    return Promise.resolve();
  }

  setLanguage(lang: string) {
    localStorage.setItem(this.STORAGE_KEY, lang);
    this.translate.use(lang);
  }

  getLanguage(): string {
    return localStorage.getItem(this.STORAGE_KEY) || 'en';
  }
}
