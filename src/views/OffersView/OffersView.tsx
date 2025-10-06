"use client";

import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import { useI18n } from "@/hooks/i18n";
import { Typography, Box } from "@mui/material";

export default function OffersView() {
  const { t } = useI18n();
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        {t("title")}
      </Typography>
      <Typography variant="body1">{t("empty")}</Typography>
      <LanguageSwitcher />
    </Box>
  );
}
