import { KeyboardEvent, MouseEvent, useState, VFC } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import { ListItemLink } from "./Link/ListItemLink";

export const SortBottomMenu: VFC = () => {
  const [state, setState] = useState({
    bottom: false,
  });

  const rankingLists = [
    {
      path: "/movies/popular?page=1",
      text: "人気ランキング",
    },
    {
      path: "/movies/revenue?page=1",
      text: "興行収入ランキング",
    },
    {
      path: "/movies/topic?page=1",
      text: "レビュー数ランキング",
    },
  ];

  const toggleDrawer =
    (anchor: "bottom", open: boolean) =>
    (event: KeyboardEvent | MouseEvent) => {
      setState({ ...state, [anchor]: open });
    };

  return (
    <Box>
      <Button
        endIcon={<SortIcon />}
        onClick={toggleDrawer("bottom", true)}
        variant="text"
      >
        並べ替え：
      </Button>
      <Drawer
        anchor={"bottom"}
        open={state["bottom"]}
        onClose={toggleDrawer("bottom", false)}
      >
        <Box role="presentation" onKeyDown={toggleDrawer("bottom", false)}>
          <List>
            <ListItem>
              <ListItemText>
                <Typography sx={{ fontWeight: "bold" }}>並べ替え</Typography>
              </ListItemText>
            </ListItem>
            <Divider sx={{ mb: 1 }} />
            {rankingLists.map(({ path, text }) => (
              <ListItemLink key={text} path={path} text={text} />
            ))}
          </List>
          <Button
            fullWidth
            onClick={toggleDrawer("bottom", false)}
            variant="text"
            sx={{ mb: 2 }}
          >
            キャンセル
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};
