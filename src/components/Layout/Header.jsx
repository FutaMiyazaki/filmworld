import NextImage from "next/image";
import NextLink from "next/link";
import { useMediaQuery } from "react-responsive";
import {
  AppBar,
  Box,
  Container,
  Link as MuiLink,
  Toolbar,
  Typography,
} from "@mui/material/";
import { HeaderTextField } from "src/components/Layout/Form/HeaderTextField";
import { TemporaryDrawer } from "src/components/Layout/TemporaryDrawer";

export function Header() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <AppBar position={isMobileScreen ? "relative" : "fixed"}>
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ mr: 2, flexGrow: 0, display: { xs: "none", sm: "flex" } }}>
            <TemporaryDrawer />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <NextLink href="/" passHref>
              <MuiLink underline="none">
                <NextImage
                  src="/images/header_icon.png"
                  width={15}
                  height={15}
                  objectFit="contain"
                  alt="header icon"
                  sx={{ display: "inline" }}
                />
                <Typography
                  noWrap
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold", display: "inline", ml: 1 }}
                >
                  FilmWorld
                </Typography>
              </MuiLink>
            </NextLink>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <NextLink href="/" passHref>
              <MuiLink underline="none">
                <NextImage
                  src="/images/header_icon.png"
                  width={17}
                  height={17}
                  objectFit="contain"
                  alt="header icon"
                  sx={{ display: "inline" }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  sx={{ fontWeight: "bold", display: "inline", ml: 1 }}
                >
                  FilmWorld
                </Typography>
              </MuiLink>
            </NextLink>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }} />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <HeaderTextField />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
