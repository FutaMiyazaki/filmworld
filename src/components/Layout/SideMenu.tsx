import NextLink from "next/link";
import { useState, VFC } from "react";
import {
  Collapse,
  Divider,
  Link as MuiLink,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { ListItemLink } from "src/components/Layout/Link/ListItemLink";

export const SideMenu: VFC = () => {
  const [open, setOpen] = useState(false);
  const rankingListItems = [
    {
      path: "/movies/popular?page=1",
      text: "人気の映画",
    },
    {
      path: "/movies/revenue?page=1",
      text: "歴代興行収入",
    },
    {
      path: "/movies/topic?page=1",
      text: "話題の映画",
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

  const handleMoreOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <List sx={{ pt: 0 }}>
        <ListItem sx={{ pt: 0 }}>
          <ListItemText>
            <Typography color="white" sx={{ fontWeight: "bold" }}>
              ランキングで探す
            </Typography>
          </ListItemText>
        </ListItem>
        {rankingListItems.map(({ path, text }) => {
          return <ListItemLink key={text} path={path} text={text} />;
        })}
        <Divider />
        <ListItem>
          <ListItemText>
            <Typography color="white" sx={{ fontWeight: "bold" }}>
              ジャンルで探す
            </Typography>
          </ListItemText>
        </ListItem>
        {genres1.map(({ id, text }) => {
          return (
            <ListItemLink
              key={id}
              path={`/movies/genre?id=${id}&sort=popularity.desc&&page=1`}
              text={text}
            />
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
              <ListItemLink
                key={id}
                path={`/movies/genre?id=${id}&sort=popularity.desc&&page=1`}
                text={text}
              />
            );
          })}
          <ListItemLink path="/genres" text="ジャンル一覧を表示" />
        </Collapse>
        <Divider />
        <NextLink passHref href="/watchlist">
          <MuiLink color="white" underline="none">
            <ListItem dense>
              <ListItemButton>
                <ListItemIcon>
                  <VideoLibraryIcon />
                </ListItemIcon>
                <ListItemText>ウォッチリスト</ListItemText>
              </ListItemButton>
            </ListItem>
          </MuiLink>
        </NextLink>
      </List>
    </div>
  );
};
