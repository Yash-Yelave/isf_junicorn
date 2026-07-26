export const getImageUrl = (path: string) => {
  const baseUrl = import.meta.env.VITE_CLOUDFLARE_R2_URL || "";
  // Ensure we don't double slash or miss a slash
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};
