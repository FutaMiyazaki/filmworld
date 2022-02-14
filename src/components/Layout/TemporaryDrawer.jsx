import { useState } from "react";
import NextLink from "next/link";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  Link as MuiLink,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import GitHubIcon from "@mui/icons-material/GitHub";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

export function TemporaryDrawer() {
  const [state, setState] = useState({
    left: false,
  });
  const [open, setOpen] = useState(false);
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

  return (
    <div>
      <IconButton
        aria-label="open drawer"
        edge="end"
        onClick={toggleDrawer("left", true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        <Box
          role="presentation"
          onKeyDown={toggleDrawer("left", false)}
          sx={{ width: "20vw" }}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
            sx={{ pr: 1, py: 1 }}
          >
            <IconButton
              aria-label="close drawer"
              onClick={toggleDrawer("left", false)}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            <NextLink href="/search" passHref>
              <MuiLink underline="none" color="white">
                <ListItem disablePadding onClick={toggleDrawer("left", false)}>
                  <ListItemButton>
                    <ListItemText>
                      <Typography color="primary" sx={{ fontWeight: "bold" }}>
                        映画を探す
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </MuiLink>
            </NextLink>
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
                  <ListItem dense onClick={toggleDrawer("left", false)}>
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
                  <ListItem dense onClick={toggleDrawer("left", false)}>
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
                    <ListItem dense onClick={toggleDrawer("left", false)}>
                      <ListItemButton>
                        <ListItemText>{genre.text}</ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </MuiLink>
                </NextLink>
              ))}
              <NextLink href="/genres" passHref>
                <MuiLink underline="none" color="white">
                  <ListItem dense onClick={toggleDrawer("left", false)}>
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
                <ListItem dense onClick={toggleDrawer("left", false)}>
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
              <ListItem dense onClick={toggleDrawer("left", false)}>
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
