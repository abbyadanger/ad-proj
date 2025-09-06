import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { APP_BASE_HREF } from '@angular/common';

const isProd = location.hostname.includes('github.io');

bootstrapApplication(App, {
  providers: [
    provideRouter(routes, withHashLocation()),
    { provide: APP_BASE_HREF, useValue: isProd ? '/ad-proj/' : '/' }
  ]
});