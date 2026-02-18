import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HttpBackend } from '@angular/common/http';


import { routes } from './app.routes';

import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';


export function HttpLoaderFactory(http: HttpBackend) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/', suffix: '/common.json' },
    { prefix: './assets/i18n/', suffix: '/birth-register.json' },
    { prefix: './assets/i18n/', suffix: '/tax-manager.json' },
    { prefix: './assets/i18n/', suffix: '/tax-receipt.json' },
    { prefix: './assets/i18n/', suffix: '/death-register.json' }
  ]);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),

    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpBackend]
      },
      defaultLanguage: 'en'
    })
  ]
};
