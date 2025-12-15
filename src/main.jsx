import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// eslint-disable-next-line react-refresh/only-export-components
function Main() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter future={{ v7_startTransition: true }}>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
