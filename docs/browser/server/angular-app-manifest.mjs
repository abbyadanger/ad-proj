
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ad-proj/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ad-proj"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3974, hash: '50e8f3d0fe5b165663106a69f9508dc30935f6734f5ec08a46fcccee439ddfca', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4487, hash: '61243b9683d4c0eee465f70e15c0ac2527e9a853fc93a366674432267d03d4fd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6489, hash: '637ff0216736a4f96617cd6243d6e3f89a0d540a4a1df9c4e8a4a8bafd11c56a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
