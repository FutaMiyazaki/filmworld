import { KeyboardEvent, MouseEvent, useState } from "react";
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
import { COMPANY_LIST, GENRE_LIST, SORT_TYPES } from "src/utils/const";

export const BottomNavi = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [state, setState] = useState({
    right: false,
  });
  const [openGenre, setOpenGenre] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  const maxListDisplay = 4;

  const toggleDrawer =
    (anchor: "right", open: boolean) => (event: KeyboardEvent | MouseEvent) => {
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
          display: { xs: "block", sm: "none", lg: "none" },
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
            {SORT_TYPES.map(({ sort, text }) => (
              <NextLink
                key={sort}
                href={`/movies?page=1&sort_type=${sort}`}
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
            ))}
            <Divider />
            <ListItem>
              <ListItemText>
                <Typography color="white" sx={{ fontWeight: "bold" }}>
                  ジャンルで探す
                </Typography>
              </ListItemText>
            </ListItem>
            {GENRE_LIST.map(({ id, text }, i: number) => {
              return i < maxListDisplay ? (
                <NextLink
                  key={id}
                  href={`/movies?page=1&sort_type=popularity.desc&genre_id=${id}`}
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
              {GENRE_LIST.map(({ id, text }, i: number) => {
                return i > maxListDisplay ? (
                  <NextLink
                    key={id}
                    href={`/movies?page=1&sort_type=popularity.desc&genre_id=${id}`}
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
            {COMPANY_LIST.map(({ id, text }, i: number) => {
              return i < maxListDisplay ? (
                <NextLink
                  key={id}
                  href={`/movies?page=1&sort_type=popularity.desc&company_id=${id}`}
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
              {COMPANY_LIST.map(({ id, text }, i: number) => {
                return i > maxListDisplay ? (
                  <NextLink
                    key={id}
                    href={`/movies?page=1&sort_type=popularity.desc&company_id=${id}`}
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
            <Divider />
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
