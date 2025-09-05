
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/blog/first-blog-post.md"
  },
  {
    "renderMode": 0,
    "route": "/blog/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3974, hash: 'e4d0495dac577ab9e2b689820c1ecc2a8a3d47b999604fc2bbb73f81362ca221', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4487, hash: '85ceda9d48ce1434a0d707e7bfdbc6b39085713d7213b3ec9f4e16a96e1ddd7c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6623, hash: '484440fd71ccb72e05677c46371db7c0f0cfe6ee74da9e141957bc8405a09517', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog/first-blog-post.md/index.html': {size: 6623, hash: '484440fd71ccb72e05677c46371db7c0f0cfe6ee74da9e141957bc8405a09517', text: () => import('./assets-chunks/blog_first-blog-post_md_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
