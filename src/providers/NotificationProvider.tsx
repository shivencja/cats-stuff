"use client";

import { SnackbarProvider } from "notistack";

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
