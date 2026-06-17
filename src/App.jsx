import React from 'react';
import Home from './Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Services from './pages/Services';
import Locations from './pages/Locations';
import { BLOG_POSTS } from './lib/blogPosts';

/**
 * Route table consumed by vite-react-ssg. Every route is statically
 * pre-rendered to real HTML at build time (SSG). `getStaticPaths` enumerates
 * the dynamic blog post URLs so each one gets its own HTML file.
 */
export const routes = [
  { path: '/', element: <Home />, entry: 'src/Home.jsx' },
  { path: '/about', element: <About />, entry: 'src/pages/About.jsx' },
  { path: '/services', element: <Services />, entry: 'src/pages/Services.jsx' },
  { path: '/blog', element: <Blog />, entry: 'src/pages/Blog.jsx' },
  {
    path: '/blog/:slug',
    element: <BlogPost />,
    entry: 'src/pages/BlogPost.jsx',
    getStaticPaths: () => BLOG_POSTS.map((p) => `/blog/${p.slug}`),
  },
  { path: '/locations', element: <Locations />, entry: 'src/pages/Locations.jsx' },
];
