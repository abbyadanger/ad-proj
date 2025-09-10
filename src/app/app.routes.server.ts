import { RenderMode, ServerRoute } from '@angular/ssr';
import { BlogPost } from './blog-post/blog-post';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'ad-proj/blog/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [
      { slug: 'first-blog-post' },
    ]
  }
];
