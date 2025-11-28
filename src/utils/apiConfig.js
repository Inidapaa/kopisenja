const normalizeBaseUrl = (url) => {
  if (!url) return null;
  
  // Remove trailing slash
  let normalized = url.trim().endsWith("/") ? url.trim().slice(0, -1) : url.trim();
  
  // If URL doesn't start with http:// or https://, add https://
  if (normalized && !normalized.match(/^https?:\/\//)) {
    normalized = `https://${normalized}`;
  }
  
  // Ensure /api is at the end if not present
  if (normalized && !normalized.endsWith("/api")) {
    normalized = normalized.endsWith("/") 
      ? `${normalized}api` 
      : `${normalized}/api`;
  }
  
  return normalized;
};

export const API_BASE_URL =
  normalizeBaseUrl(import.meta.env?.VITE_API_BASE_URL) ||
  "http://localhost:3000/api";

export const apiUrl = (path = "") => {
  // Remove leading slash from path if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  
  if (!cleanPath) {
    return API_BASE_URL;
  }
  
  return `${API_BASE_URL}/${cleanPath}`;
};


