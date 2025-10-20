import { useI18n } from "@/hooks/i18n";
import { useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

const logoSrc = "/images/logo.png";

const ORIGINAL_WIDTH = 582;
const ORIGINAL_HEIGHT = 383;
const DESKTOP_WIDTH = 76;
const MOBILE_WIDTH = Math.round(DESKTOP_WIDTH * 0.6);

/**
 * A responsive component for displaying the application logo
 * Its size is determined by the `isMobile` prop
 */
export default function Logo() {
  const { t } = useI18n();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const width = isMobile ? MOBILE_WIDTH : DESKTOP_WIDTH;
  const aspectRatio = ORIGINAL_HEIGHT / ORIGINAL_WIDTH;
  const calculatedHeight = Math.round(width * aspectRatio);

  return (
    <Image
      src={logoSrc}
      alt={t("components.logo.alt")}
      width={width}
      height={calculatedHeight}
    />
  );
}
