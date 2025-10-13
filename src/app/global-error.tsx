"use client";

import theme from "@/styles/theme";
import { Button, Typography, Box, CssBaseline, Link } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";

import messagesPl from "../../public/locales/pl.json";
import messagesEn from "../../public/locales/en.json";

type ErrorMessages = typeof messagesEn;

export default function GlobalErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const getMessages = (): ErrorMessages => {
    if (typeof window !== "undefined") {
      const lang = localStorage.getItem("language");
      if (lang === "pl") {
        return messagesPl;
      }
    }
    return messagesEn;
  };

  const t = getMessages();

  return (
    <html>
      <head>
        <title>{t.globalErrorView.title}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box>
            <Typography variant="h2" component="h1" gutterBottom>
              {t.globalErrorView.title}
            </Typography>
            <Link href="/">
              <Button variant="contained">{t.buttons.backToMainPage}</Button>
            </Link>
            <Button variant="contained" onClick={reset}>
              {t.buttons.tryAgain}
            </Button>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
