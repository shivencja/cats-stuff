import Link from "next/link";
import { IconButton, Typography, Box, Menu, MenuItem } from "@mui/material";
import React, { useId } from "react";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { NavLink } from "@/types/links";
import { layoutMobile } from "@/styles/mixins";

const styles = {
  root: {
    ...layoutMobile,
  },
  iconButton: {
    mr: 2,
  },
};

interface MobileOptionsMenuProps {
  navLinks: NavLink[];
}

/**
 * Mobile options menu component displayed in the navbar on mobile devices
 */
export default function MobileOptionsMenu({
  navLinks,
}: MobileOptionsMenuProps) {
  const menuId = useId();
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  return (
    <Box sx={styles.root}>
      <IconButton sx={styles.iconButton} onClick={handleMobileMenuOpen}>
        <MenuTwoToneIcon />
      </IconButton>
      <Menu
        id={menuId}
        anchorEl={mobileMenuAnchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        sx={layoutMobile}
      >
        {navLinks.map(({ label, href }) => (
          <MenuItem
            key={label}
            onClick={handleMobileMenuClose}
            component={Link}
            href={href}
          >
            <Typography variant="body1">{label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
