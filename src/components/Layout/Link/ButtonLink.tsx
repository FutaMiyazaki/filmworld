import { VFC } from "react";
import { Button } from "@mui/material";
import { AppLink } from "src/components/Layout/Link/AppLink";

type ButtonLinkProps = {
  path: string;
  text: string;
  variant: "text" | "outlined" | "contained" | undefined;
};

export const ButtonLink: VFC<ButtonLinkProps> = (props) => {
  const { path, text, variant } = props;

  return (
    <AppLink path={path} underline="none">
      <Button fullWidth variant={variant}>
        {text}
      </Button>
    </AppLink>
  );
};
