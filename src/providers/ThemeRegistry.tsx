"use client";

import * as React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../styles/theme";
import createEmotionCache from "../emotion-cache";

/**
 * A provider component that sets up the theme and emotion cache for the application
 */
export default function ThemeRegistry({
  children,
  nonce,
}: {
  children: React.ReactNode;
  nonce?: string;
}) {
  const cache = createEmotionCache(nonce);
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
