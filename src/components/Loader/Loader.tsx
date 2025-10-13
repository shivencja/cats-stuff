import { Box, CircularProgress } from "@mui/material";
import React from "react";
import {
  layoutCenterCenter,
  layoutFit,
  layoutHorizontal,
} from "@/styles/mixins";

interface LoaderProps {
  sx?: object;
}
const styles = {
  root: {
    ...layoutFit,
    ...layoutHorizontal,
    ...layoutCenterCenter,
  },
};

export function Loader({ sx }: LoaderProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }}>
      <CircularProgress />
    </Box>
  );
}
