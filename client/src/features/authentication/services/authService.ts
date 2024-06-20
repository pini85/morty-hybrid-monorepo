import api from "@/config/axiosInstance";
import { IAuthResponse } from "@shared/types";

const API_URL = "http://localhost:5000/api/auth";

/**
 * Sends a login request to the authentication server.
 *
 * @async
 * @function
 * @param {string} username - The username for login.
 * @param {string} password - The password for login.
 * @returns {Promise<IAuthResponse>} The response data from the server.
 *
 * @example
 * const { mutate } = useMutation(authServiceRoutes.login);
 * mutate({ username: "username", password: "password" });
 */
const login = async (
  username: string,
  password: string
): Promise<IAuthResponse> => {
  const response = await api.post(`${API_URL}/login`, { username, password });
  return response.data;
};

/**
 * Sends a logout request to the authentication server.
 *
 * @async
 * @function
 * @returns {Promise<void>} The response data from the server.
 *
 * @example
 * const { mutate } = useMutation(authServiceRoutes.logout);
 * mutate();
 */
const logout = async (): Promise<void> => {
  const response = await api.post(`${API_URL}/logout`);
  return response.data;
};

/**
 * Checks the authentication status by sending a request to the server.
 *
 * @async
 * @function
 * @returns {Promise<IAuthResponse>} The response data from the server, which includes authentication status.
 *
 * @example
 * const { data } = useQuery("authStatus", authServiceRoutes.checkAuthStatus);
 */
const checkAuthStatus = async (): Promise<IAuthResponse> => {
  const response = await api.get(`${API_URL}/me`);
  return response.data;
};

/**
 * Auth service routes to handle authentication-related API calls.
 *
 * @typedef {Object} AuthServiceRoutes
 * @property {function} login - Function to log in a user.
 * @property {function} logout - Function to log out a user.
 * @property {function} checkAuthStatus - Function to check the authentication status.
 */
const authServiceRoutes = {
  login,
  logout,
  checkAuthStatus,
};

export default authServiceRoutes;
