import NextLink from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  InputAdornment,
  Link as MuiLink,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from "@mui/icons-material/Search";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

export function MobileTemporaryDrawer() {
  const router = useRouter();
  const [state, setState] = useState({
    right: false,
  });
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const rankingListItems = [
    {
      text: "人気の映画",
      path: "/movies/popular?page=1",
    },
    {
      text: "歴代興行収入",
      path: "/movies/revenue?page=1",
    },
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

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleMoreOpen = () => {
    setOpen(!open);
  };

  const handleSearch = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (keyword.length === 0) {
      return;
    }
    setState({ ...state, right: false });
    router.push(`/search/movies?keyword=${keyword}&page=1`);
  });

  return (
    <div>
      <MenuIcon onClick={toggleDrawer("right", true)} />
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <Box role="presentation" sx={{ width: "70vw" }}>
          <Box sx={{ m: 1 }}>
            <form action="" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                id="header-form"
                type="text"
                value={keyword}
                onChange={handleSearch}
                size="small"
                placeholder="キーワードを入力"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </form>
          </Box>
          <List>
            <ListItem>
              <ListItemText>
                <Typography color="white" sx={{ fontWeight: "bold" }}>
                  ランキングで探す
                </Typography>
              </ListItemText>
            </ListItem>
            {rankingListItems.map((listItem) => (
              <NextLink key={listItem.text} href={listItem.path} passHref>
                <MuiLink underline="none" color="white">
                  <ListItem dense onClick={toggleDrawer("right", false)}>
                    <ListItemButton>
                      <ListItemText>{listItem.text}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </MuiLink>
              </NextLink>
            ))}
            <Divider />
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
                  <ListItem dense onClick={toggleDrawer("right", false)}>
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
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              {genres2.map((genre) => (
                <NextLink
                  key={genre.id}
                  href={`/movies/genre?id=${genre.id}&sort=popularity.desc&&page=1`}
                  passHref
                >
                  <MuiLink underline="none" color="white">
                    <ListItem dense onClick={toggleDrawer("right", false)}>
                      <ListItemButton>
                        <ListItemText>{genre.text}</ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </MuiLink>
                </NextLink>
              ))}
              <NextLink href="/genres" passHref>
                <MuiLink underline="none" color="white">
                  <ListItem dense onClick={toggleDrawer("right", false)}>
                    <ListItemButton>
                      <ListItemText>ジャンル一覧を表示</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </MuiLink>
              </NextLink>
            </Collapse>
            <Divider />
            <ListItem>
              <ListItemText>
                <Typography color="white" sx={{ fontWeight: "bold" }}>
                  その他
                </Typography>
              </ListItemText>
            </ListItem>
            <NextLink href="/favorite" passHref>
              <MuiLink underline="none" color="white">
                <ListItem dense onClick={toggleDrawer("right", false)}>
                  <ListItemButton>
                    <ListItemIcon>
                      <VideoLibraryIcon />
                    </ListItemIcon>
                    <ListItemText>あなたの観たい!映画</ListItemText>
                  </ListItemButton>
                </ListItem>
              </MuiLink>
            </NextLink>
            <MuiLink
              href="https://github.com/FutaMiyazaki/miya-react-app"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              color="white"
            >
              <ListItem dense onClick={toggleDrawer("right", false)}>
                <ListItemButton>
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                  <ListItemText>GitHub</ListItemText>
                </ListItemButton>
              </ListItem>
            </MuiLink>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
