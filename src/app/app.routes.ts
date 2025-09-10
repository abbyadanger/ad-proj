import { Routes } from '@angular/router';
import { Home } from './home/home';
import { BlogList } from './blog-list/blog-list';
import { BlogPost } from './blog-post/blog-post';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'ad-proj/blog', component: BlogList },
  { path: 'ad-proj/blog/:slug', component: BlogPost, data: { renderMode: 'client' } },
  { path: '**', redirectTo: '' }
];
