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

export const TemporaryDrawer = () => {
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
    {
      text: "話題の映画",
      path: "/movies/topic?page=1",
    },
  ];
  const genres1 = [
    { id: "28", text: "アクション" },
    { id: "12", text: "アドベンチャー" },
    { id: "16", text: "アニメーション" },
    { id: "35", text: "コメディ" },
  ];
  const genres2 = [
    { id: "99", text: "ドキュメンタリー" },
    { id: "10751", text: "ファミリー" },
    { id: "14", text: "ファンタジー" },
    { id: "27", text: "ホラー" },
    { id: "10749", text: "ロマンス" },
    { id: "878", text: "サイエンスフィクション" },
  ];
  const companies = [
    { id: "2", text: "ディズニー" },
    { id: "4", text: "パラマウント" },
    { id: "5", text: "コロンビア" },
    { id: "33", text: "ユニバーサル" },
    { id: "174", text: "ワーナー・ブラザーズ" },
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
            <ListItem>
              <ListItemText>
                <Typography sx={{ fontWeight: "bold" }}>
                  ランキングで探す
                </Typography>
              </ListItemText>
            </ListItem>
            {rankingListItems.map(({ path, text }) => (
              <NextLink key={text} href={path} passHref>
                <MuiLink color="white" underline="none">
                  <ListItem dense onClick={toggleDrawer("left", false)}>
                    <ListItemButton>
                      <ListItemText>{text}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </MuiLink>
              </NextLink>
            ))}
            <Divider />
            <ListItem>
              <ListItemText>
                <Typography sx={{ fontWeight: "bold" }}>
                  ジャンルで探す
                </Typography>
              </ListItemText>
            </ListItem>
            {genres1.map(({ id, text }) => {
              return (
                <NextLink
                  key={id}
                  href={`/movies/genre?id=${id}&sort=popularity.desc&&page=1`}
                  passHref
                >
                  <MuiLink color="white" underline="none">
                    <ListItem dense onClick={toggleDrawer("left", false)}>
                      <ListItemButton>
                        <ListItemText>{text}</ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </MuiLink>
                </NextLink>
              );
            })}
            <ListItem dense>
              <ListItemButton onClick={handleMoreOpen}>
                <ListItemText>さらに表示</ListItemText>
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              {genres2.map(({ id, text }) => {
                return (
                  <NextLink
                    key={id}
                    href={`/movies/genre?id=${id}&sort=popularity.desc&&page=1`}
                    passHref
                  >
                    <MuiLink color="white" underline="none">
                      <ListItem dense onClick={toggleDrawer("left", false)}>
                        <ListItemButton>
                          <ListItemText>{text}</ListItemText>
                        </ListItemButton>
                      </ListItem>
                    </MuiLink>
                  </NextLink>
                );
              })}
              <NextLink href="/genres" passHref>
                <MuiLink color="white" underline="none">
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
                <Typography sx={{ fontWeight: "bold" }}>
                  制作会社から探す
                </Typography>
              </ListItemText>
            </ListItem>
            {companies.map(({ id, text }) => {
              return (
                <NextLink
                  key={id}
                  href={`/movies/company?id=${id}&sort=popularity.desc&&page=1`}
                  passHref
                >
                  <MuiLink color="white" underline="none">
                    <ListItem dense onClick={toggleDrawer("left", false)}>
                      <ListItemButton>
                        <ListItemText>{text}</ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </MuiLink>
                </NextLink>
              );
            })}
            <Divider />
            <ListItem>
              <ListItemText>
                <Typography sx={{ fontWeight: "bold" }}>その他</Typography>
              </ListItemText>
            </ListItem>
            <NextLink href="/watchlist" passHref>
              <MuiLink color="white" underline="none">
                <ListItem dense onClick={toggleDrawer("left", false)}>
                  <ListItemButton>
                    <ListItemIcon>
                      <VideoLibraryIcon />
                    </ListItemIcon>
                    <ListItemText>ウォッチリスト</ListItemText>
                  </ListItemButton>
                </ListItem>
              </MuiLink>
            </NextLink>
            <MuiLink
              color="white"
              href="https://github.com/FutaMiyazaki/miya-react-app"
              rel="noopener noreferrer"
              target="_blank"
              underline="none"
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
};
