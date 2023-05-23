import { useMutation, useQueryClient } from "react-query";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import { IUseAuth } from "..";

const TOKEN_COOKIE_NAME = "jwtToken";

/**
 * Saves the JWT token in a cookie.
 * @param {string} token - The JWT token to be saved.
 * @returns {void}
 */
const saveToken = (token: string): void => {
  Cookies.set(TOKEN_COOKIE_NAME, token, { expires: 7 });
};

/**
 * Removes the JWT token from the cookie.
 * @returns {void}
 */
const removeToken = (): void => {
  Cookies.remove(TOKEN_COOKIE_NAME);
};

/**
 * Custom React Query hook for handling JWT token authentication.
 * @returns {IUseAuth} - Auth methods and authentication status.
 */
export const useAuth = (): IUseAuth => {
  const queryClient = useQueryClient();

  /**
   * Mutation for logging in and saving the JWT token.
   */
  const loginMutation = useMutation({
    /**
     * Function that performs the login mutation.
     * @param {string} token - The JWT token to be saved.
     * @returns {Promise<any>} - The decoded token after saving.
     */
    mutationFn: async (token: string): Promise<any> => {
      saveToken(token);
      return await jwt_decode(token);
    },
  });

  /**
   * Mutation for logging out and removing the JWT token.
   */
  const logoutMutation = useMutation({
    /**
     * Function that performs the logout mutation.
     * @returns {Promise<void>}
     */
    mutationFn: async (): Promise<void> => {
      removeToken();
      queryClient.clear();
    },
  });

  /**
   * Logs in the user by saving the JWT token.
   * @param {string} token - The JWT token to be saved.
   * @returns {Promise<void>}
   */
  const login = async (token: string): Promise<void> => {
    await loginMutation.mutateAsync(token);
  };

  /**
   * Logs out the user by removing the JWT token.
   * @returns {Promise<void>}
   */
  const logout = async (): Promise<void> => {
    await logoutMutation.mutateAsync();
  };

  /**
   * Checks if the user is authenticated.
   * @returns {boolean} - True if the user is authenticated, false otherwise.
   */
  const isAuthenticated = (): boolean => {
    return Cookies.get(TOKEN_COOKIE_NAME) !== undefined;
  };

  return {
    login,
    logout,
    isAuthenticated,
  };
};
