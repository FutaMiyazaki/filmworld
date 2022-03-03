import NextLink from "next/link";
import { VFC } from "react";
import {
  Link as MuiLink,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

type ListItemLinkProps = {
  path: string;
  text: string;
};

export const ListItemLink: VFC<ListItemLinkProps> = (props) => {
  const { path, text } = props;

  return (
    <NextLink href={path} passHref>
      <MuiLink color="white" underline="none">
        <ListItem dense>
          <ListItemButton>
            <ListItemText>{text}</ListItemText>
          </ListItemButton>
        </ListItem>
      </MuiLink>
    </NextLink>
  );
};
