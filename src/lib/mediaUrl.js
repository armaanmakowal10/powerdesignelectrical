/** Site logo in /public/media */
export const LOGO_SRC = '/media/power_design_electrical_logo_transparent.png';

/**
 * URL for files in /public (e.g. public/media/...).
 * Uses Vite's BASE_URL so assets work when the app is not served from domain root.
 */
export function mediaUrl(path) {
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalized}`;
}
