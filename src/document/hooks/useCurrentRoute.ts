import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { LABELS, PATHS } from "document/config/path";

interface RouteData {
  label: string;
  pathWithSlash: string;
  pathWithoutSlash: string;
}

const useCurrentRoute = (): RouteData => {
  const location = useLocation();

  const routeData = useMemo<RouteData>(() => {
    const path = location.pathname;

    const matchedEntry = Object.entries(PATHS).find(
      ([, value]) => value === path
    );

    if (matchedEntry) {
      const [key, fullPath] = matchedEntry;
      return {
        label: LABELS[key as keyof typeof LABELS] || key,
        pathWithSlash: fullPath,
        pathWithoutSlash: fullPath.replace(/^\//, ""),
      };
    }

    return {
      label: "Unknown",
      pathWithSlash: path,
      pathWithoutSlash: path.replace(/^\//, ""),
    };
  }, [location.pathname]);

  return routeData;
};

export default useCurrentRoute;
