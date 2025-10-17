"use client";

import { useI18n } from "@/hooks/i18n";
import Image from "next/image";

const logoSrc = "/images/logo.png";

const ORIGINAL_WIDTH = 582;
const ORIGINAL_HEIGHT = 383;
const DEFAULT_WIDTH = 76;

/**
 * Component for displaying the application logo with a specified sizes
 */
export default function Logo({ width = DEFAULT_WIDTH }: { width?: number }) {
  const { t } = useI18n();
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
