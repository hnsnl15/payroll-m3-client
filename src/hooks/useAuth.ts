import { useMutation, useQueryClient, MutationKey } from "react-query";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

const TOKEN_COOKIE_NAME = "jwtToken";

const saveToken = (token: string): void => {
  Cookies.set(TOKEN_COOKIE_NAME, token, { expires: 7 });
};

const removeToken = (): void => {
  Cookies.remove(TOKEN_COOKIE_NAME);
};

export const useAuth = () => {
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: async (token: string) => {
      saveToken(token);
      return await jwt_decode(token);
    },
  });

  const logoutMutation = useMutation<void, unknown, void, MutationKey>({
    mutationFn: async () => {
      removeToken();
      queryClient.clear();
    },
  });

  const login = async (token: string): Promise<void> => {
    await loginMutation.mutateAsync(token);
  };

  const logout = async (): Promise<void> => {
    await logoutMutation.mutateAsync();
  };

  return {
    login,
    logout,
    isAuthenticated: () => {
      return Cookies.get(TOKEN_COOKIE_NAME) !== undefined;
    },
  };
};
