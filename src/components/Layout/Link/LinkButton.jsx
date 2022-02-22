import NextLink from "next/link";
import { Button, Link as MuiLink, Typography } from "@mui/material";

export function LinkButton(props) {
  const { href, text } = props;

  return (
    <NextLink href={href} passHref>
      <MuiLink underline="none">
        <Button fullWidth variant="outlined">
          <Typography>{text}</Typography>
        </Button>
      </MuiLink>
    </NextLink>
  );
}
