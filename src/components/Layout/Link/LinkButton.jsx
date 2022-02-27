import NextLink from "next/link";
import { Button, Link as MuiLink, Typography } from "@mui/material";

export const LinkButton = ({ href, variant = "outlined", text }) => {
  return (
    <NextLink href={href} passHref>
      <MuiLink underline="none">
        <Button fullWidth variant={variant}>
          <Typography>{text}</Typography>
        </Button>
      </MuiLink>
    </NextLink>
  );
};
