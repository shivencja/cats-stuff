import Link from "next/link";
import { useSession } from "next-auth/react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import React, { useMemo } from "react";
import { useI18n } from "@/hooks/i18n";
import Logo from "../Logo/Logo";
import { layout, layoutCenter, layoutDesktop } from "@/styles/mixins";
import ProfileMenu from "./components/ProfileMenu/ProfleMenu";
import ShoppingBasketTwoToneIcon from "@mui/icons-material/ShoppingBasketTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import MobileOptionsMenu from "./components/MobileOptionsMenu/MobileOptionsMenu";
import { NavLink } from "@/types/links";

const styles = {
  home: {
    flexGrow: 1,
    ...layout,
    ...layoutCenter,
  },
  menuLink: {
    mr: 4,
  },
  iconButton: {
    mr: 2,
  },
  responsibleLinks: {
    ...layoutDesktop,
  },
};

const NavLinkComponent = React.memo(function NavLink({ href, label }: NavLink) {
  return (
    <Typography
      variant="body1"
      component={Link}
      href={href}
      sx={styles.menuLink}
    >
      {label}
    </Typography>
  );
});

/**
 * Navbar component displayed at the top of the application
 */
export default function Navbar() {
  const { data: session, status } = useSession();
  const { t } = useI18n();
  const isAuthenticated = status === "authenticated";

  const navLinks = useMemo(
    () => [
      { href: "/offers", label: t("components.navbar.offers") },
      { href: "/delivery", label: t("components.navbar.delivery") },
      { href: "/contact", label: t("components.navbar.contact") },
    ],
    [t]
  );

  const authLinks = useMemo(
    () => [
      { href: "/login", label: t("components.navbar.login") },
      { href: "/register", label: t("components.navbar.register") },
    ],
    [t]
  );

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Link href="/" style={styles.home}>
            <Logo />
          </Link>

          <Box sx={styles.responsibleLinks}>
            {navLinks.map(({ label, href }) => (
              <NavLinkComponent key={label} label={label} href={href} />
            ))}
          </Box>

          <MobileOptionsMenu navLinks={navLinks} />

          {!isAuthenticated && (
            <>
              {authLinks.map(({ label, href }) => (
                <NavLinkComponent key={label} label={label} href={href} />
              ))}
            </>
          )}

          {isAuthenticated && (
            <>
              <IconButton sx={styles.iconButton}>
                <ShoppingBasketTwoToneIcon />
              </IconButton>
              <IconButton sx={styles.iconButton}>
                <EmailTwoToneIcon />
              </IconButton>
            </>
          )}

          <LanguageSwitcher />

          {isAuthenticated && session.user && (
            <ProfileMenu user={session.user} />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
