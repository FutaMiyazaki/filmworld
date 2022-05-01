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
import { COMPANY_LIST, GENRE_LIST, SORT_TYPES } from "src/utils/const";

export const DrawerMenu: VFC = () => {
  const [state, setState] = useState({
    left: false,
  });
  const [openGenre, setOpenGenre] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  const maxListDisplay = 4;

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
            {SORT_TYPES.map(({ sort, text }) => (
              <NextLink
                key={sort}
                href={`/movies?page=1&sort_type=${sort}`}
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
            ))}
            <Divider />
            <ListItem>
              <ListItemText>
                <Typography sx={{ fontWeight: "bold" }}>
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
              {GENRE_LIST.map(({ id, text }, i: number) => {
                return i > maxListDisplay ? (
                  <NextLink
                    key={id}
                    href={`/movies?page=1&sort_type=popularity.desc&genre_id=${id}`}
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
            {COMPANY_LIST.map(({ id, text }, i: number) => {
              return i < maxListDisplay ? (
                <NextLink
                  key={id}
                  href={`/movies?page=1&sort_type=popularity.desc&company_id=${id}`}
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
              {COMPANY_LIST.map(({ id, text }, i: number) => {
                return i > maxListDisplay ? (
                  <NextLink
                    key={id}
                    href={`/movies?page=1&sort_type=popularity.desc&company_id=${id}`}
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
