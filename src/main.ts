import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { environment } from '././environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideHttpClient(),
    // For Google Firebase DB
      // provideFirebaseApp(() => initializeApp(environment.firebase)),
      // provideFirestore(() => getFirestore())
  ]
});
