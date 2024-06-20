// src/providers/AppProviders.tsx
import React from "react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/features/authentication/context/AuthContext";
import queryClient from "@/config/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";

const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          {children}
          <ToastContainer />
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default AppProviders;
