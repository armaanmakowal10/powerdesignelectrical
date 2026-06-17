import React from 'react';
import { Head } from 'vite-react-ssg';

/**
 * Canonical production origin (www host). All canonical/OG URLs are built
 * from this so previews and the apex domain still point search engines at
 * the one true www URL.
 */
export const SITE_ORIGIN = 'https://www.powerdesignelectricalltd.com';

/** Default social-share image (absolute URL required by Open Graph). */
const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/media/IMG_8763.jpg`;

function absoluteUrl(path) {
  if (!path) return SITE_ORIGIN + '/';
  if (/^https?:\/\//i.test(path)) return path;
  return SITE_ORIGIN + (path.startsWith('/') ? path : `/${path}`);
}

/**
 * Per-page <head> metadata: unique title + description, a self-referencing
 * canonical on the www domain, and Open Graph / Twitter tags. Pass JSON-LD
 * (or any extra head tags) as children.
 */
export default function Seo({ title, description, path = '/', image, children }) {
  const canonical = path === '/' ? `${SITE_ORIGIN}/` : absoluteUrl(path);
  const ogImage = image ? absoluteUrl(image) : DEFAULT_OG_IMAGE;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Power Design Electrical Ltd." />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {children}
    </Head>
  );
}
