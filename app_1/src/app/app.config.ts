import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Enable in-memory scrolling with scroll position restoration
    // This will restore the scroll position when navigating back to a previously visited route
    provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration:'enabled'})), provideClientHydration(withEventReplay())
  ],
  
};
