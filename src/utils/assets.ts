/**
 * Utility to resolve asset URLs correctly across both local development
 * and production deployments (such as GitHub Pages subpaths).
 */
export const getAssetUrl = (path?: string): string => {
  if (!path) return '';

  // Return absolute external URLs or data URIs as-is
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL || '/';

  // If path already starts with the base path, return as-is
  if (base !== '/' && path.startsWith(base)) {
    return path;
  }

  // Remove leading slash to cleanly append to base
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Ensure base ends with a slash
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;

  return `${normalizedBase}${cleanPath}`;
};
