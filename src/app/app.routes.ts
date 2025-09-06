import { Routes } from '@angular/router';
import { Home } from './home/home';
import { BlogList } from './blog-list/blog-list';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'blog', component: BlogList },
  { path: '**', redirectTo: '' }
];
