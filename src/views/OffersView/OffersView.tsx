"use client";

import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import { Offer } from "@/data/offers";
import { useI18n } from "@/hooks/i18n";
import { useOffers } from "@/queries/offers/hooks";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Alert,
} from "@mui/material";

export default function OffersView() {
  const { t } = useI18n();

  const { data: offers, isLoading, error } = useOffers();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        {t("offersView.title")}
      </Typography>
      <LanguageSwitcher />

      {offers && offers.length > 0 ? (
        <List>
          {offers.map((offer: Offer) => (
            <ListItem key={offer.id}>
              <ListItemText
                primary={offer.name}
                secondary={`Cena: ${(offer.price / 100).toFixed(2)} zł`}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1">{t("empty")}</Typography>
      )}
    </Box>
  );
}
