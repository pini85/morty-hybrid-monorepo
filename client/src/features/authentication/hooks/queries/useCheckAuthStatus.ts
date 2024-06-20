import { useQuery } from "react-query";
import { AxiosError } from "axios";
import authService from "@/features/authentication/services/authService";
import { useAuthContext } from "@/features/authentication/hooks/useAuthContext";
import { IAuthResponse } from "@shared/types/index";

/**
 * Custom hook to check the authentication status of the user.
 *
 * This hook uses `react-query` to fetch the authentication status from the server.
 * It leverages the `useAuthContext` hook to manage the login and logout states.
 * If the user is authenticated, the login context is updated with the user data.
 * If the user is not authenticated (401 error), the user is logged out.
 *
 * @returns {object} The react-query object containing the status and data of the query.
 *
 * @example
 * const { data, error, isLoading } = useCheckAuthStatus();
 *
 * @see {@link https://react-query.tanstack.com/} for more information about react-query.
 */
const useCheckAuthStatus = () => {
  const { login, logout } = useAuthContext();

  const KEY = "authStatus";
  const token = localStorage.getItem("token");

  const query = useQuery<IAuthResponse, AxiosError>(
    KEY,
    async () => {
      return authService.checkAuthStatus();
    },
    {
      enabled: !!token,
      onSuccess: (data) => {
        login(data);
      },
      onError: (error) => {
        if (error.response?.status === 401) {
          // should do a refresh token from the axiosInstance but instead just logging out and killing the token
          logout();
        } else {
          console.log("onError:", error);
        }
      },
    }
  );

  return query;
};

export default useCheckAuthStatus;
