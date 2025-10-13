"use client";

import { useI18n } from "@/hooks/i18n";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useI18n();

  const title = t("errorView.title");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <title>{t("page.title", { title })}</title>
      <Typography variant="h2" component="h1" gutterBottom>
        {title}
      </Typography>
      <Link href="/">
        <Button variant="contained">{t("buttons.backToMainPage")}</Button>
      </Link>
      <Button variant="contained" autoFocus onClick={reset}>
        {t("buttons.tryAgain")}
      </Button>
    </div>
  );
}
