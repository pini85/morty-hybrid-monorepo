import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { IAuthContextType } from "../context/AuthContext.types";

/**
 * Custom hook to access the AuthContext.
 *
 * This hook provides access to the authentication context, allowing you to
 * retrieve the current authentication state and functions.
 *
 * @example
 * Usage within a functional component
 * const { user, isAuthenticated, login, logout } = useAuthContext();
 *
 * @throws {Error} If the hook is used outside of an AuthProvider.
 *
 * @returns {IAuthContextType} The authentication context value.
 */
export const useAuthContext = (): IAuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
