import NextLink from "next/link";
import { Link as MuiLink, Typography } from "@mui/material";

type BasicLinkProps = {
  path: string;
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
  text: string;
};

const BasicLink = (props: BasicLinkProps) => {
  const { path, variant, text } = props;

  return (
    <NextLink href={path} passHref>
      <MuiLink underline="hover">
        <Typography variant={variant} sx={{ display: "inline" }}>
          {text}
        </Typography>
      </MuiLink>
    </NextLink>
  );
};

export default BasicLink;
