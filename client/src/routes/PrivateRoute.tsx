import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "@/features/authentication/hooks/useAuthContext"; // Updated import path
import { Paths } from "@/constants/paths";
import { UserRoles } from "@shared/types/index";

interface PrivateRouteProps {
  children: React.ReactNode;
  allowedRoles: UserRoles[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  allowedRoles,
}) => {
  const { user } = useAuthContext();

  if (!user || (user && !allowedRoles.includes(user.role))) {
    return <Navigate to={Paths.HOME} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
