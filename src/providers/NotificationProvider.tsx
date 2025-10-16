"use client";

import { SnackbarProvider } from "notistack";

/**
 * A provider component that sets up notification context for the application
 */
export default function NotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      {children}
    </SnackbarProvider>
  );
}
