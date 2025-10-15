"use client";

import {
  QueryClient,
  QueryClientProvider,
  MutationCache,
  QueryCache,
} from "@tanstack/react-query";
import useNotification from "@/hooks/useNotification";
import { ApiError, ApiErrorKey } from "@/types/errors";
import React from "react";
import axios from "axios";

/**
 * This component wraps the application in a TanStack Query provider
 * and configures global error handling for all API queries
 */
export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { showApiError, showError } = useNotification();

  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (error: unknown) => {
            console.log("Global handler error:", error);
            if (
              axios.isAxiosError(error) &&
              error.response?.data &&
              "errors" in error.response.data
            ) {
              showApiError(error.response.data as ApiError);
            } else if (error instanceof Error) {
              showError(error.message);
            } else {
              showApiError({
                errors: [
                  {
                    key: ApiErrorKey.UNKNOWN_API_ERROR,
                  },
                ],
              });
            }
          },
        }),
        mutationCache: new MutationCache({
          onError: (error: unknown) => {
            console.log("Global handler mutation error:", error);
            if (
              axios.isAxiosError(error) &&
              error.response?.data &&
              "errors" in error.response.data
            ) {
              showApiError(error.response.data as ApiError);
            } else if (error instanceof Error) {
              showError(error.message);
            } else {
              showApiError({
                errors: [
                  {
                    key: ApiErrorKey.UNKNOWN_API_ERROR,
                  },
                ],
              });
            }
          },
        }),
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
