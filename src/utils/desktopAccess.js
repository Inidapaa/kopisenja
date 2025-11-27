const ACCESS_KEY = "kopisenja-desktop-access";
export const ACCESS_EVENT = "kopisenja-desktop-access";

export const hasDesktopAccess = () => {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(ACCESS_KEY) === "allowed";
};

export const allowDesktopAccess = () => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(ACCESS_KEY, "allowed");
  window.dispatchEvent(new Event(ACCESS_EVENT));
};

export const revokeDesktopAccess = () => {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(ACCESS_KEY);
  window.dispatchEvent(new Event(ACCESS_EVENT));
};


