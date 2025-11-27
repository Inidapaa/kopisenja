import { useEffect, useMemo, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { NotificationProvider } from "../context/NotificationProvider";
import DesktopWarning from "./DesktopWarning";
import {
  ACCESS_EVENT,
  hasDesktopAccess,
} from "../utils/desktopAccess";

const DESKTOP_BREAKPOINT = 1025;
const LOGIN_PATH = "/login";

function Layout() {
  const location = useLocation();
  const [isDesktop, setIsDesktop] = useState(false);
  const [allowDesktopAccess, setAllowDesktopAccess] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const syncAccessState = () => setAllowDesktopAccess(hasDesktopAccess());

    syncAccessState();
    window.addEventListener(ACCESS_EVENT, syncAccessState);
    return () => window.removeEventListener(ACCESS_EVENT, syncAccessState);
  }, []);

  const isRouteAllowed = useMemo(() => {
    if (location.pathname === LOGIN_PATH) return true;
    return false;
  }, [location.pathname]);

  if (isDesktop && !allowDesktopAccess && !isRouteAllowed) {
    return <DesktopWarning />;
  }

  return (
    <NotificationProvider>
      <Outlet />
    </NotificationProvider>
  );
}

export default Layout;
