import React from "react";
import { useRoutes } from "react-router-dom";
import ScrollToTop from "@/hooks/useScrollToTop";
import { routes } from "./Routes";

const RouteConfig: React.FC = () => {
  const element = useRoutes(routes);

  return (
    <>
      <ScrollToTop />
      {element}
    </>
  );
};

export default RouteConfig;
