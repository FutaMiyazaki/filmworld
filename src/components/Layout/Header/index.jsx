import NextImage from "next/image";
import NextLink from "next/link";
import { useMediaQuery } from "react-responsive";
import {
  AppBar,
  Box,
  Container,
  Link as MuiLink,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material/";
import { HeaderTextField } from "src/components/Layout/Form/HeaderTextField";
import { DrawerMenu } from "src/components/Layout/Header/DrawerMenu";
import { SearchButton } from "src/components/Layout/Header/SearchButton";
import { ButtonLink } from "src/components/Layout/Link/ButtonLink";

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export const Header = (props) => {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <>
      {isMobileScreen ? (
        <HideOnScroll {...props}>
          <AppBar position="static">
            <Container>
              <Toolbar disableGutters>
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
                      sx={{ fontWeight: "bold", display: "inline", ml: 1 }}
                    >
                      FilmWorld
                    </Typography>
                  </MuiLink>
                </NextLink>
                <SearchButton />
              </Toolbar>
            </Container>
          </AppBar>
        </HideOnScroll>
      ) : (
        <AppBar position="fixed">
          <Container>
            <Toolbar disableGutters>
              <Box
                sx={{
                  mr: 2,
                  flexGrow: 0,
                  display: { xs: "none", sm: "flex" },
                }}
              >
                <DrawerMenu />
              </Box>
              <Box sx={{ flexGrow: 1, display: "flex" }}>
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
                      noWrap
                      variant="h6"
                      sx={{ fontWeight: "bold", display: "inline", ml: 1 }}
                    >
                      FilmWorld
                    </Typography>
                  </MuiLink>
                </NextLink>
                <Box sx={{ ml: 3, display: { xs: "none", sm: "block" } }}>
                  <ButtonLink path="/search" text="映画を探す" variant="text" />
                </Box>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }} />
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <HeaderTextField />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </>
  );
};