import NextLink from "next/link";
import { Link as MuiLink, Typography } from "@mui/material";

const BasicLink = (props) => {
  const { href, tag, text } = props;

  return (
    <NextLink
      href={{
        pathname: href.pathname,
        query: href.query,
      }}
      passHref
    >
      <MuiLink underline="hover">
        <Typography variant={tag} sx={{ display: "inline" }}>
          {text}
        </Typography>
      </MuiLink>
    </NextLink>
  );
};

export default BasicLink;
