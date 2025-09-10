import { Routes } from '@angular/router';
import { Home } from './home/home';
import { BlogList } from './blog-list/blog-list';
import { BlogPost } from './blog-post/blog-post';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'blog', component: BlogList },
  { path: 'blog/:slug', component: BlogPost, data: { renderMode: 'client' } },
  { path: '**', redirectTo: '' }
];
