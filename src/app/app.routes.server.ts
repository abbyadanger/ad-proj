import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // {
  //   path: 'blog/:filename',
  //   renderMode: RenderMode.Prerender,
  //   async getPrerenderParams() {
  //     return [
  //       { filename: 'first-blog-post.md' },
  //     ];
  //   }
  // },
  {
      path: '**',
    renderMode: RenderMode.Prerender
  }
];
