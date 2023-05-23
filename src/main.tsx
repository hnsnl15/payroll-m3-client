import "./index.css";
import App from "./App";
import React from "react";
import theme from "./theme";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClientProvider, QueryClient } from "react-query";
import AuthContextProvider from "./context/AuthContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
