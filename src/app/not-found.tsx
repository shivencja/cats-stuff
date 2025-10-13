"use client";

import { useI18n } from "@/hooks/i18n";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFoundPage() {
  const { t } = useI18n();

  const title = t("notFoundView.title");

  return (
    <div>
      <title>{t("page.title", { title })}</title>
      <Typography variant="h2" component="h1">
        {title}
      </Typography>
      <Link href="/">
        <Button variant="contained">{t("buttons.backToMainPage")}</Button>
      </Link>
    </div>
  );
}
