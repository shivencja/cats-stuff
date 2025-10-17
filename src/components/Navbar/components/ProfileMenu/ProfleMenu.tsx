"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { IconButton, Menu, Avatar, MenuItem, Typography } from "@mui/material";
import React, { useCallback, useId } from "react";
import { useI18n } from "@/hooks/i18n";
import { User } from "next-auth";
import { UserRole } from "@/types/users";

const avatarSrc = "/images/geometric-cat-portrait-stockcake.jpg";

const styles = {
  avatarButton: {
    ml: 2,
  },
};

/**
 * Profile menu component displayed in the navbar when the user is authenticated
 */
export default function ProfileMenu({ user }: { user: User }) {
  const { t } = useI18n();
  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(
    null
  );
  const isMenuOpen = Boolean(menuAnchorEl);
  const buttonId = useId();
  const menuId = useId();

  const handleMenuClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setMenuAnchorEl(event.currentTarget);
    },
    []
  );

  const handleMenuClose = useCallback(() => {
    setMenuAnchorEl(null);
  }, []);

  return (
    <>
      <IconButton
        id={buttonId}
        aria-controls={isMenuOpen ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isMenuOpen}
        onClick={handleMenuClick}
        sx={styles.avatarButton}
      >
        <Avatar alt={user.email ?? ""} src={avatarSrc} />
      </IconButton>
      <Menu
        id={menuId}
        anchorEl={menuAnchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem onClick={handleMenuClose}>
          <Typography variant="caption" component={Link} href="/profile">
            {user.email ?? ""}
          </Typography>
        </MenuItem>
        {user?.role === UserRole.ADMIN && (
          <MenuItem onClick={handleMenuClose}>
            <Typography variant="body1" component={Link} href="/users">
              {t("components.navbar.usersManagement")}
            </Typography>
          </MenuItem>
        )}
        <MenuItem onClick={() => signOut()}>
          <Typography variant="body1">
            {t("components.navbar.logout")}
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
