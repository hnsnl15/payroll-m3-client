import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { TOKEN_COOKIE_NAME } from "../hooks/useAuth";
import { IAuthContext } from "..";

export const AuthContext = createContext<IAuthContext>({
  authenticated: false,
  token: "",
  setAuthenticated: () => {},
  setToken: () => {},
  cookieInstance: undefined,
});

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [token, setToken] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const cookieInstance = Cookies.get(TOKEN_COOKIE_NAME);

  const checkInstance = () => {
    if (!!cookieInstance || cookieInstance !== undefined) {
      setAuthenticated(true);
      setToken(cookieInstance);
    }
  };

  useEffect(() => {
    checkInstance();
  }, [authenticated]);

  const value = {
    token,
    setToken,
    authenticated,
    setAuthenticated,
    cookieInstance,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
