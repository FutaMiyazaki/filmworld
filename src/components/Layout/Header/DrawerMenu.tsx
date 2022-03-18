import NextLink from "next/link";
import { KeyboardEvent, MouseEvent, useState, VFC } from "react";
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
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

export const DrawerMenu: VFC = () => {
  const [state, setState] = useState({
    left: false,
  });
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

  const toggleDrawer =
    (anchor: "left", open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      setState({ ...state, [anchor]: open });
    };

  const handleMoreOpenGenre = () => {
    setOpenGenre(!openGenre);
  };

  const handleMoreOpenCompany = () => {
    setOpenCompany(!openCompany);
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
            {rankingLists.map(({ path, text }) => (
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
            {genreLists.map(({ id, text }, i: number) => {
              return i < maxListDisplay ? (
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
              ) : null;
            })}
            {!openGenre ? (
              <ListItem dense>
                <ListItemButton onClick={handleMoreOpenGenre}>
                  <ListItemText>すべて表示</ListItemText>
                  <ExpandMore />
                </ListItemButton>
              </ListItem>
            ) : null}
            <Collapse in={openGenre} timeout="auto" unmountOnExit>
              {genreLists.map(({ id, text }, i: number) => {
                return i > maxListDisplay ? (
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
                ) : null;
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
              {openGenre ? (
                <ListItem dense>
                  <ListItemButton onClick={handleMoreOpenGenre}>
                    <ListItemText>折りたたむ</ListItemText>
                    <ExpandLess />
                  </ListItemButton>
                </ListItem>
              ) : null}
            </Collapse>
            <Divider />
            <ListItem>
              <ListItemText>
                <Typography sx={{ fontWeight: "bold" }}>
                  制作会社から探す
                </Typography>
              </ListItemText>
            </ListItem>
            {companyLists.map(({ id, text }, i: number) => {
              return i < maxListDisplay ? (
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
              ) : null;
            })}
            {!openCompany ? (
              <ListItem dense>
                <ListItemButton onClick={handleMoreOpenCompany}>
                  <ListItemText>すべてを表示</ListItemText>
                  <ExpandMore />
                </ListItemButton>
              </ListItem>
            ) : null}
            <Collapse in={openCompany} timeout="auto" unmountOnExit>
              {companyLists.map(({ id, text }, i: number) => {
                return i > maxListDisplay ? (
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
                ) : null;
              })}
              {openCompany ? (
                <ListItem dense>
                  <ListItemButton onClick={handleMoreOpenCompany}>
                    <ListItemText>折りたたむ</ListItemText>
                    <ExpandLess />
                  </ListItemButton>
                </ListItem>
              ) : null}
            </Collapse>
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
