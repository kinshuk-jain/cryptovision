/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '',

  // routes are evaluated in order
  children: [
    {
      path: '',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    {
      path: '/login',
      load: () => import('./login'),
    },
    {
      path: '/register',
      load: () => import('./register'),
    },
    {
      path: '/about',
      load: () => import('./about'),
    },

    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import('./not-found'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'knowyourcrypto'}`;
    route.description = route.description || '';

    return route;
  },
};

export default routes;
