const normalizeBaseUrl = (url) => {
  if (!url) return null;
  return url.endsWith("/") ? url.slice(0, -1) : url;
};

export const API_BASE_URL =
  normalizeBaseUrl(import.meta.env?.VITE_API_BASE_URL) ||
  "http://localhost:3000/api";

export const apiUrl = (path = "") => {
  if (!path.startsWith("/")) {
    return `${API_BASE_URL}/${path}`;
  }
  return `${API_BASE_URL}${path}`;
};


