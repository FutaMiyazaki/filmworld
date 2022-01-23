import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import NextLink from "next/link";

export function MobileDialogList() {
  const listItems = [
    { path: "/genres", text: "ジャンル一覧" },
    { path: "/posts", text: "投稿一覧" },
  ];

  return (
    <List sx={{ mt: 2 }}>
      {listItems.map((listItem) => {
        return (
          <ListItem key={listItem.path} disablePadding>
            <ListItemButton>
              <NextLink href={listItem.path} passHref>
                <MuiLink underline="none">
                  <ListItemText>
                    <Typography color="white">{listItem.text}</Typography>
                  </ListItemText>
                </MuiLink>
              </NextLink>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
