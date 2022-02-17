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
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <NextLink href="/" passHref>
              <MuiLink underline="none">
                <NextImage
                  src="/images/header_icon.png"
                  width={isMobileScreen ? 15 : 17}
                  height={isMobileScreen ? 15 : 17}
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }} />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <HeaderTextField />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
