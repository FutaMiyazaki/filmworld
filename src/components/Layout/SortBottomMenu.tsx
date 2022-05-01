import NextLink from "next/link";
import { useRouter } from "next/router";
import { KeyboardEvent, MouseEvent, useState, VFC } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Link as MuiLink,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import CheckIcon from "@mui/icons-material/Check";
import { SORT_TYPES } from "src/utils/const";

export const SortBottomMenu: VFC = () => {
  const router = useRouter();
  const [state, setState] = useState({
    bottom: false,
  });

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
            {SORT_TYPES.map(({ sort, text }) => (
              <NextLink
                key={sort}
                href={{
                  pathname: "/movies",
                  query: {
                    page: 1,
                    sort_type: sort,
                    year: router.query.year,
                    company_id: router.query.company_id,
                    genre_id: router.query.genre_id,
                    cast_id: router.query.cast_id,
                  },
                }}
                passHref
              >
                <MuiLink color="white" underline="none">
                  <ListItem
                    dense
                    onClick={toggleDrawer("bottom", false)}
                    secondaryAction={
                      router.query.sort_type === sort ? (
                        <IconButton edge="end">
                          <CheckIcon />
                        </IconButton>
                      ) : null
                    }
                  >
                    <ListItemButton>
                      <ListItemText>{text}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </MuiLink>
              </NextLink>
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
