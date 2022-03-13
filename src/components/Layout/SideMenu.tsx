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
  const [openGenre, setOpenGenre] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  const maxListDisplay = 4;
  const rankingLists = [
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
  const genreLists = [
    { id: "28", text: "アクション" },
    { id: "12", text: "アドベンチャー" },
    { id: "16", text: "アニメーション" },
    { id: "35", text: "コメディ" },
    { id: "99", text: "ドキュメンタリー" },
    { id: "10751", text: "ファミリー" },
    { id: "14", text: "ファンタジー" },
    { id: "27", text: "ホラー" },
    { id: "10749", text: "ロマンス" },
    { id: "878", text: "サイエンスフィクション" },
  ];
  const companyLists = [
    { id: "2", text: "ディズニー" },
    { id: "33", text: "ユニバーサル" },
    { id: "174", text: "ワーナー・ブラザーズ" },
    { id: "25", text: "20世紀スタジオ" },
    { id: "4", text: "パラマウント" },
    { id: "420", text: "MARVEL" },
    { id: "3", text: "Pixar" },
    { id: "882", text: "東宝" },
    { id: "192", text: "松竹" },
  ];

  const handleMoreOpenGenre = () => {
    setOpenGenre(!openGenre);
  };

  const handleMoreOpenCompany = () => {
    setOpenCompany(!openCompany);
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
        {rankingLists.map(({ path, text }) => {
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
        {genreLists.map(({ id, text }, i: number) => {
          return i < maxListDisplay ? (
            <ListItemLink
              key={text}
              path={`/movies/genre?id=${id}&sort=popularity.desc&&page=1`}
              text={text}
            />
          ) : null;
        })}
        <ListItem dense>
          <ListItemButton onClick={handleMoreOpenGenre}>
            <ListItemText>
              {openGenre ? "折りたたむ" : "さらに表示"}
            </ListItemText>
            {openGenre ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openGenre} timeout="auto" unmountOnExit>
          {genreLists.map(({ id, text }, i: number) => {
            return i > maxListDisplay ? (
              <ListItemLink
                key={text}
                path={`/movies/genre?id=${id}&sort=popularity.desc&&page=1`}
                text={text}
              />
            ) : null;
          })}
          <ListItemLink path="/genres" text="ジャンル一覧" />
        </Collapse>
        <Divider />
        <ListItem sx={{ pt: 0 }}>
          <ListItemText>
            <Typography color="white" sx={{ fontWeight: "bold" }}>
              制作会社で探す
            </Typography>
          </ListItemText>
        </ListItem>
        {companyLists.map(({ id, text }, i: number) => {
          return i < maxListDisplay ? (
            <ListItemLink
              key={text}
              path={`/movies/company?id=${id}&sort=popularity.desc&&page=1`}
              text={text}
            />
          ) : null;
        })}
        <ListItem dense>
          <ListItemButton onClick={handleMoreOpenCompany}>
            <ListItemText>
              {openCompany ? "折りたたむ" : "さらに表示"}
            </ListItemText>
            {openCompany ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openCompany} timeout="auto" unmountOnExit>
          {companyLists.map(({ id, text }, i: number) => {
            return i > maxListDisplay ? (
              <ListItemLink
                key={text}
                path={`/movies/company?id=${id}&sort=popularity.desc&&page=1`}
                text={text}
              />
            ) : null;
          })}
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
