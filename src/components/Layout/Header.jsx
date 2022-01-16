import React, { useState } from "react";
import NextLink from "next/link";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  Link as MuiLink,
} from "@mui/material/";

const pages = [
  { path: "/posts", text: "投稿一覧" },
  { path: "/posts", text: "使い方" },
  { path: "/posts", text: "GitHub" },
];

export function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#0A192A" }}>
      <Container>
        <Toolbar disableGutters>
          <NextLink href="/" passHref>
            <MuiLink underline="none">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: "bold",
                }}
              >
                映画大辞典
              </Typography>
            </MuiLink>
          </NextLink>
          <NextLink href="/" passHref>
            <MuiLink underline="none">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  fontWeight: "bold",
                }}
              >
                映画大辞典
              </Typography>
            </MuiLink>
          </NextLink>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NextLink href={page.path} passHref key={page}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.text}
                </Button>
              </NextLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
