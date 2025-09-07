import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { MarkdownModule, MarkedOptions, provideMarkdown } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideMarkdown(),
  ]
});
