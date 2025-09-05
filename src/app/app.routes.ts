import { Routes } from '@angular/router';
import { BlogPost } from './blog-post/blog-post';
import { App } from './app';

export const routes: Routes = [
  {
    path: 'blog/:filename',
    component: BlogPost,
    data: {
      getPrerenderParams: () => [
        { filename: 'first-blog-post.md' },
      ]
    }
  },
  { path: '', component: App },
];