import { useState } from "react";
import NextLink from "next/link";
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

export function SideMenu() {
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

  const handleMoreOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <List sx={{ pt: 0, position: "fixed" }}>
        <ListItem sx={{ pt: 0 }}>
          <ListItemText>
            <Typography color="white" sx={{ fontWeight: "bold" }}>
              ランキングで探す
            </Typography>
          </ListItemText>
        </ListItem>
        {rankingListItems.map((listItem) => (
          <NextLink key={listItem.text} href={listItem.path} passHref>
            <MuiLink underline="none" color="white">
              <ListItem dense>
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
              <ListItem dense>
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
                <ListItem dense>
                  <ListItemButton>
                    <ListItemText>{genre.text}</ListItemText>
                  </ListItemButton>
                </ListItem>
              </MuiLink>
            </NextLink>
          ))}
          <NextLink href="/genres" passHref>
            <MuiLink underline="none" color="white">
              <ListItem dense>
                <ListItemButton>
                  <ListItemText>ジャンル一覧を表示</ListItemText>
                </ListItemButton>
              </ListItem>
            </MuiLink>
          </NextLink>
        </Collapse>
        <Divider />
        <NextLink href="/favorite" passHref>
          <MuiLink underline="none" color="white">
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
}
