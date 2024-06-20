import React, { createContext, useState, ReactNode } from "react";
import { UserRoles, IUser, IAuthResponse } from "@shared/types/index";
import { IAuthContextType } from "./AuthContext.types";

/**
 * Default value for the AuthContext.
 *
 * @type {IAuthContextType}
 */
const defaultAuthValue: IAuthContextType = {
  user: null,
  role: UserRoles.GUEST,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
};

/**
 * AuthContext provides authentication state and functions.
 *
 * @type {React.Context<IAuthContextType>}
 */
export const AuthContext: React.Context<IAuthContextType> =
  createContext<IAuthContextType>(defaultAuthValue);

/**
 * AuthProvider component that wraps its children with authentication context.
 *
 * @param {Object} props - Props object
 * @param {ReactNode} props.children - The children components
 * @returns {JSX.Element} The AuthProvider component
 */
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [role, setRole] = useState<UserRoles>(UserRoles.GUEST);

  /**
   * Login function to set the user and role, and store the token in localStorage.
   *
   * @param {IAuthResponse} data - The authentication response containing the user and token
   */
  const login = (data: IAuthResponse) => {
    console.log(data);
    setUser(data?.user);
    setRole(data?.user?.role);
    localStorage.setItem("token", data?.token);
  };

  /**
   * Logout function to clear the user and role, and remove the token from localStorage.
   */
  const logout = () => {
    console.log("I am logging out");
    localStorage.removeItem("token");
    setUser(null);
    setRole(UserRoles.GUEST);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        role,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
