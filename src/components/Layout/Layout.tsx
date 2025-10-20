"use client";

import Navbar from "@/components/Navbar/Navbar";
import { layoutVertical } from "@/styles/mixins";
import { Box, Container } from "@mui/material";
import Categories from "../Categories/Categories";
import { useSession } from "next-auth/react";
import { Loader } from "../Loader/Loader";

const styles = {
  root: {
    ...layoutVertical,
    height: "100vh",
  },
  main: {
    flexGrow: 1,
    overflowY: "auto",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { status } = useSession();
  if (status === "loading") {
    return <Loader />;
  }
  return (
    <Box sx={styles.root}>
      <Navbar />
      <Categories />
      <Box component="main" sx={styles.main}>
        <Container>{children}</Container>
      </Box>
    </Box>
  );
}
