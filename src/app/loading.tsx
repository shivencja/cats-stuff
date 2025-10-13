import { Box, CircularProgress } from "@mui/material";
import { getNonce } from "@/server/nonce";
import {
  layoutCenterCenter,
  layoutFit,
  layoutHorizontal,
} from "@/styles/mixins";

const styles = {
  container: {
    ...layoutFit,
    ...layoutHorizontal,
    ...layoutCenterCenter,
  },
};

export default async function Loading() {
  const nonce = await getNonce();

  return (
    <Box sx={styles.container}>
      <CircularProgress size="3rem" nonce={nonce} />
    </Box>
  );
}
