import NextLink from "next/link";
import { VFC } from "react";
import { Button, Link as MuiLink, Typography } from "@mui/material";

type ButtonLinkProps = {
  path: string;
  text: string;
  variant: "text" | "outlined" | "contained" | undefined;
};

export const ButtonLink: VFC<ButtonLinkProps> = (props) => {
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
