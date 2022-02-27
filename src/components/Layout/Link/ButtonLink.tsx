import NextLink from "next/link";
import { Button, Link as MuiLink, Typography } from "@mui/material";

type ButtonLinkProps = {
  path: string;
  text: string;
  variant: "text" | "outlined" | "contained" | undefined;
};

export const ButtonLink = (props: ButtonLinkProps) => {
  const { path, text, variant } = props;

  return (
    <NextLink href={path} passHref>
      <MuiLink underline="none">
        <Button fullWidth variant={variant}>
          <Typography>{text}</Typography>
        </Button>
      </MuiLink>
    </NextLink>
  );
};
