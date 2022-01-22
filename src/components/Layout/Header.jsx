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
import GitHubIcon from "@mui/icons-material/GitHub";
import { HeaderTextField } from "src/components/Layout/Form/HeaderTextField";
import { TemporaryDrawer } from "src/components/Layout/TemporaryDrawer";

const links = [
  { path: "/genres", text: "ジャンル一覧" },
  { path: "/posts", text: "投稿一覧" },
];

export function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <NextLink href="/" passHref>
              <MuiLink underline="none">
                <Typography
                  noWrap
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  映画大辞典
                </Typography>
              </MuiLink>
            </NextLink>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", sm: "none" } }}>
            <TemporaryDrawer />
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
                映画大辞典
              </Typography>
            </MuiLink>
          </NextLink>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            {links.map((link) => (
              <NextLink href={link.path} passHref key={link.text}>
                <MuiLink underline="hover">
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    {link.text}
                  </Button>
                </MuiLink>
              </NextLink>
            ))}
            <MuiLink
              href="https://github.com/FutaMiyazaki/miya-react-app"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              <Button startIcon={<GitHubIcon />} sx={{ my: 2, color: "white" }}>
                GitHub
              </Button>
            </MuiLink>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <HeaderTextField />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
