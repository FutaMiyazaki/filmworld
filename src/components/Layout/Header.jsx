import NextLink from "next/link";
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
  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ mr: 2, flexGrow: 0, display: { xs: "none", sm: "flex" } }}>
            <TemporaryDrawer />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <NextLink href="/" passHref>
              <MuiLink underline="none">
                <Typography
                  noWrap
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  FilmWorld
                </Typography>
              </MuiLink>
            </NextLink>
          </Box>
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
                FilmWorld
              </Typography>
            </MuiLink>
          </NextLink>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }} />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <HeaderTextField />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
