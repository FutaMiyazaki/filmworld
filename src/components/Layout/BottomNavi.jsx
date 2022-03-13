import { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Collapse,
  Divider,
  Drawer,
  Link as MuiLink,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

export const BottomNavi = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [state, setState] = useState({
    right: false,
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

  const toggleDrawer = (anchor, open) => (event) => {
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
            label="見つける"
            icon={<SearchIcon />}
            onClick={() => {
              router.push("/search");
            }}
            value="search"
          />
          <BottomNavigationAction
            label="リスト"
            icon={<VideoLibraryIcon />}
            value="watchlist"
            onClick={() => {
              router.push("/watchlist");
            }}
          />
          <BottomNavigationAction
            label="メニュー"
            icon={<MenuIcon />}
            value="menu"
            onClick={toggleDrawer("right", true)}
          />
        </BottomNavigation>
      </Paper>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <Box role="presentation" sx={{ width: "70vw" }}>
          <List>
            <ListItem>
              <ListItemText>
                <Typography color="white" sx={{ fontWeight: "bold" }}>
                  ランキングで探す
                </Typography>
              </ListItemText>
            </ListItem>
            {rankingLists.map((listItem) => (
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
            {genreLists.map(({ id, text }, i) => {
              return i < maxListDisplay ? (
                <NextLink
                  key={id}
                  href={`/movies/genre?id=${id}&sort=popularity.desc&&page=1`}
                  passHref
                >
                  <MuiLink underline="none" color="white">
                    <ListItem dense onClick={toggleDrawer("right", false)}>
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
              {genreLists.map(({ id, text }, i) => {
                return i > maxListDisplay ? (
                  <NextLink
                    key={id}
                    href={`/movies/genre?id=${id}&sort=popularity.desc&&page=1`}
                    passHref
                  >
                    <MuiLink underline="none" color="white">
                      <ListItem dense onClick={toggleDrawer("right", false)}>
                        <ListItemButton>
                          <ListItemText>{text}</ListItemText>
                        </ListItemButton>
                      </ListItem>
                    </MuiLink>
                  </NextLink>
                ) : null;
              })}
              <NextLink href="/genres" passHref>
                <MuiLink underline="none" color="white">
                  <ListItem dense onClick={toggleDrawer("right", false)}>
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
            <Divider />
            <ListItem>
              <ListItemText>
                <Typography sx={{ fontWeight: "bold" }}>
                  制作会社から探す
                </Typography>
              </ListItemText>
            </ListItem>
            {companyLists.map(({ id, text }, i) => {
              return i < maxListDisplay ? (
                <NextLink
                  key={id}
                  href={`/movies/company?id=${id}&sort=popularity.desc&&page=1`}
                  passHref
                >
                  <MuiLink color="white" underline="none">
                    <ListItem dense onClick={toggleDrawer("right", false)}>
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
              {companyLists.map(({ id, text }, i) => {
                return i > maxListDisplay ? (
                  <NextLink
                    key={id}
                    href={`/movies/company?id=${id}&sort=popularity.desc&&page=1`}
                    passHref
                  >
                    <MuiLink color="white" underline="none">
                      <ListItem dense onClick={toggleDrawer("right", false)}>
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
            <ListItem>
              <ListItemText>
                <Typography color="white" sx={{ fontWeight: "bold" }}>
                  その他
                </Typography>
              </ListItemText>
            </ListItem>
            <NextLink href="/watchlist" passHref>
              <MuiLink underline="none" color="white">
                <ListItem dense onClick={toggleDrawer("right", false)}>
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
};
