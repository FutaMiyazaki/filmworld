import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import {
  Dialog,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  DialogTitle,
  DialogContent,
  Link as MuiLink,
  DialogActions,
  TextField,
  ListItem,
  ListItemText,
  ListItemButton,
  List,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import { MobileDialogList } from "src/components/Layout/MobileDialogList";

export function BottomNavi() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const listItems = [
    { path: "/movies/popular?page=1", text: "人気の映画から探す" },
    { path: "/genres", text: "ジャンル一覧から探す" },
    { path: "/search", text: "投稿一覧から探す" },
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = useCallback(
    (e) => {
      setKeyword(e.target.value);
    },
    [keyword]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (keyword.length === 0) {
        return;
      } else {
        handleClose();
        router.push(`/search?keyword=${keyword}&page=1`);
      }
    },
    [keyword]
  );

  return (
    <div>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: { xs: "block", sm: "none" },
        }}
        elevation={20}
      >
        <BottomNavigation
          showLabels
          value={value}
          sx={{ bgcolor: "#2D2D2D" }}
          onChange={async (event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="ホーム"
            icon={<HomeIcon />}
            value="home"
          />
          <BottomNavigationAction
            label="検索"
            icon={<SearchIcon />}
            onClick={handleClickOpen}
            value="search"
          />
          <BottomNavigationAction
            label="お気に入り"
            icon={<StarIcon />}
            value="favorite"
          />
        </BottomNavigation>
      </Paper>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <DialogTitle id="responsive-dialog-title" sx={{ fontWeight: "bold" }}>
          映画を探す
        </DialogTitle>
        <DialogContent>
          <form action="" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="search-dialog-form"
              value={keyword}
              onChange={handleSearch}
              size="small"
              placeholder="キーワードを入力"
              variant="outlined"
            />
          </form>
          <List sx={{ mt: 2 }}>
            {listItems.map((listItem) => {
              return (
                <ListItem
                  key={listItem.path}
                  disablePadding
                  onClick={handleClose}
                >
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
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={handleClose}
            sx={{ mb: 2, fontWeight: "bold" }}
          >
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
