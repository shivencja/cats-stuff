"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

/**
 * A provider component that wraps the application with authentication context
 */
export default function AuthProvider({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
