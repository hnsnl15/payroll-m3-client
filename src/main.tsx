import "./index.css";
import App from "./App";
import React from "react";
import theme from "./theme";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
