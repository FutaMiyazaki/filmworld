import { VFC } from "react";
import { Typography } from "@mui/material";
import { AppLink } from "src/components/Layout/Link/AppLink";

type TextLinkProps = {
  path: string;
  text: string;
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit";
};

export const TextLink: VFC<TextLinkProps> = (props) => {
  const { path, text, variant } = props;

  return (
    <AppLink path={path} underline="hover">
      <Typography variant={variant}>{text}</Typography>
    </AppLink>
  );
};
