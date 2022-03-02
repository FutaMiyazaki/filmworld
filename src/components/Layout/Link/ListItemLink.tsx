import NextLink from "next/link";
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

export const ListItemLink = (props: ListItemLinkProps) => {
  const { path, text } = props;

  return (
    <NextLink href={path} passHref>
      <MuiLink underline="none" color="white">
        <ListItem dense>
          <ListItemButton>
            <ListItemText>{text}</ListItemText>
          </ListItemButton>
        </ListItem>
      </MuiLink>
    </NextLink>
  );
};
