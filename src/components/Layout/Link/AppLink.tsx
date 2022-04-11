import NextLink from "next/link";
import { ReactNode, VFC } from "react";
import { Link as MuiLink } from "@mui/material";

type AppLinkProps = {
  children: ReactNode;
  path: string;
  underline: "always" | "hover" | "none";
};

export const AppLink: VFC<AppLinkProps> = (props) => {
  const { children, path, underline } = props;

  return (
    <NextLink href={path} passHref>
      <MuiLink underline={underline}>{children}</MuiLink>
    </NextLink>
  );
};
