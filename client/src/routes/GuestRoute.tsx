import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "@/features/authentication/hooks/useAuthContext";
import { Paths } from "@/constants/paths";

interface GuestRouteProps {
  children: React.ReactNode;
}

const GuestRoute: React.FC<GuestRouteProps> = ({ children }) => {
  const { user } = useAuthContext();

  const location = useLocation();

  if (user) {
    return <Navigate to={Paths.HOME} state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default GuestRoute;
