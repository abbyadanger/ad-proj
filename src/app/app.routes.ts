import { Routes } from '@angular/router';
import { BlogList } from './blog-list/blog-list';
import { Home } from './home/home';

export const routes: Routes = [
  { path: 'blog-list', component: BlogList },
  { path: '', component: Home, pathMatch: 'full' }, // root just shows empty/home
];