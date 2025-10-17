"use client";

import { OfferDTO } from "@/types/offers";
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
import Translated from "@/components/Translated/Translated";
import Price from "@/components/Price/Price";

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

      {offers && offers.length > 0 ? (
        <List>
          {offers.map((offer: OfferDTO) => (
            <ListItem key={offer.id}>
              <ListItemText
                primary={<Translated text={offer.name} />}
                secondary={<Price value={offer.price} />}
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
