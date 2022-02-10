import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import {
  Button,
  BottomNavigation,
  BottomNavigationAction,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  InputAdornment,
  Link as MuiLink,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

export function BottomNavi() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const listItems = [
    { path: "/movies/popular?page=1", text: "人気の映画" },
    { path: "/movies/revenue?page=1", text: "歴代興行収入" },
  ];
  const genres1 = [
    {
      text: "アクション",
      id: "28",
    },
    {
      text: "アドベンチャー",
      id: "12",
    },
    {
      text: "アニメーション",
      id: "16",
    },
    {
      text: "コメディ",
      id: "35",
    },
  ];
  const genres2 = [
    {
      text: "ドキュメンタリー",
      id: "99",
    },
    {
      text: "ファミリー",
      id: "10751",
    },
    {
      text: "ファンタジー",
      id: "14",
    },
    {
      text: "ホラー",
      id: "27",
    },
    {
      text: "ロマンス",
      id: "10749",
    },
    {
      text: "サイエンスフィクション",
      id: "878",
    },
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

  const handleMoreOpen = () => {
    setMoreOpen(!moreOpen);
  };

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
            onClick={() => {
              router.push("/");
            }}
          />
          <BottomNavigationAction
            label="検索"
            icon={<SearchIcon />}
            onClick={handleClickOpen}
            value="search"
          />
          <BottomNavigationAction
            label="観たい!"
            icon={<VideoLibraryIcon />}
            value="favorite"
            onClick={() => {
              router.push("/favorite");
            }}
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
        <DialogContent>
          <form action="" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="search-dialog-form"
              type="text"
              value={keyword}
              onChange={handleSearch}
              size="small"
              placeholder="キーワードを入力"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </form>
          <List sx={{ mt: 2 }}>
            <ListItem>
              <ListItemText>
                <Typography color="white" sx={{ fontWeight: "bold" }}>
                  ランキングで探す
                </Typography>
              </ListItemText>
            </ListItem>
            {listItems.map((listItem) => {
              return (
                <NextLink key={listItem.path} href={listItem.path} passHref>
                  <MuiLink underline="none" color="white">
                    <ListItem dense onClick={handleClose}>
                      <ListItemButton>
                        <ListItemText>{listItem.text}</ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </MuiLink>
                </NextLink>
              );
            })}
            <ListItem>
              <ListItemText>
                <Typography color="white" sx={{ fontWeight: "bold" }}>
                  ジャンルで探す
                </Typography>
              </ListItemText>
            </ListItem>
            {genres1.map((genre) => (
              <NextLink
                key={genre.id}
                href={`/movies/genre?id=${genre.id}&sort=popularity.desc&&page=1`}
                passHref
              >
                <MuiLink underline="none" color="white">
                  <ListItem dense onClick={handleClose}>
                    <ListItemButton>
                      <ListItemText>{genre.text}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </MuiLink>
              </NextLink>
            ))}
            <ListItem dense>
              <ListItemButton onClick={handleMoreOpen}>
                <ListItemText>さらに表示</ListItemText>
                {moreOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={moreOpen} timeout="auto" unmountOnExit>
              {genres2.map((genre) => (
                <NextLink
                  key={genre.id}
                  href={`/movies/genre?id=${genre.id}&sort=popularity.desc&&page=1`}
                  passHref
                >
                  <MuiLink underline="none" color="white">
                    <ListItem dense onClick={handleClose}>
                      <ListItemButton>
                        <ListItemText>{genre.text}</ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </MuiLink>
                </NextLink>
              ))}
              <NextLink href="/genres" passHref>
                <MuiLink underline="none" color="white">
                  <ListItem dense onClick={handleClose}>
                    <ListItemButton>
                      <ListItemText>ジャンル一覧を表示</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </MuiLink>
              </NextLink>
            </Collapse>
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
