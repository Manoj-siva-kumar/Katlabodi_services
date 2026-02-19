  import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
  import { provideRouter } from '@angular/router';
  import { provideHttpClient, HttpBackend } from '@angular/common/http';
  import { APP_INITIALIZER } from '@angular/core';

  import { routes } from './app.routes';

  import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
  import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
  import { LanguageService } from './services/language-service';

  export function initLang(langService: LanguageService) {
    return () => langService.init();
  }


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
      }),

      {
        provide: APP_INITIALIZER,
        useFactory: initLang,
        deps: [LanguageService],
        multi: true
      }
    ]
  };

