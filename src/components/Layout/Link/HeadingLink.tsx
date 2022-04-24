import { VFC } from "react";
import { Box, Typography } from "@mui/material";
import { AppLink } from "src/components/Layout/Link/AppLink";

type HeadingLinkProps = {
  path: string;
  text: string;
  underline: "always" | "hover" | "none";
};

export const HeadingLink: VFC<HeadingLinkProps> = (props) => {
  const { path, text, underline } = props;

  return (
    <Box sx={{ mb: 2 }}>
      <AppLink path={path} underline={underline}>
        <Typography variant="h6" sx={{ display: "inline", fontWeight: "bold" }}>
          {text}
        </Typography>
      </AppLink>
    </Box>
  );
};
