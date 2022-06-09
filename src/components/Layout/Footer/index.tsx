import { VFC } from "react";
import {
  Box,
  Container,
  Grid,
  Link as MuiLink,
  Typography,
} from "@mui/material";

export const Footer: VFC = () => {
  return (
    <Box
      component="footer"
      sx={{ pb: 5, display: { xs: "none", sm: "block", lg: "block" } }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" sx={{ mb: 1 }}>
          powered by:
          <MuiLink
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{ pl: 1 }}
          >
            themoviedb.org
          </MuiLink>
        </Typography>
        <Typography variant="body2" align="center">
          This product uses TMDb API, but is not endorsed or certified by TMDb.
        </Typography>
      </Container>
    </Box>
  );
};
