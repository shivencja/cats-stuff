"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useI18n } from "@/hooks/i18n";
import Logo from "../Logo/Logo";
import { layout, layoutCenter } from "@/styles/mixins";
import ProfileMenu from "./components/ProfileMenu/ProfleMenu";

const styles = {
  home: {
    flexGrow: 1,
    ...layout,
    ...layoutCenter,
  },
  menuLink: {
    marginRight: 4,
  },
};

/**
 * Navbar component displayed at the top of the application
 */
export default function Navbar() {
  const { data: session, status } = useSession();
  const { t } = useI18n();
  const isAuthenticated = status === "authenticated";

  if (status === "loading") {
    return null;
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/" style={styles.home}>
          <Logo />
        </Link>
        <Typography
          variant="body1"
          component={Link}
          href="/offers"
          sx={styles.menuLink}
        >
          {t("components.navbar.offers")}
        </Typography>

        {!isAuthenticated && (
          <>
            <Typography
              variant="body1"
              component={Link}
              href="/login"
              sx={styles.menuLink}
            >
              {t("components.navbar.login")}
            </Typography>
            <Typography
              variant="body1"
              component={Link}
              href="/register"
              sx={styles.menuLink}
            >
              {t("components.navbar.register")}
            </Typography>
          </>
        )}

        <LanguageSwitcher />

        {isAuthenticated && session.user && <ProfileMenu user={session.user} />}
      </Toolbar>
    </AppBar>
  );
}
