/**
 * Gets the base path from environment variables
 * Falls back to empty string for local development and root deployments
 */
export const getBasePath = (): string => {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
};

/**
 * Constructs a full asset path with the base path prefix
 * @param path - The asset path (should start with /)
 * @returns The complete path with base path prefix
 */
export const getAssetPath = (path: string): string => {
  const basePath = getBasePath();
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
};
