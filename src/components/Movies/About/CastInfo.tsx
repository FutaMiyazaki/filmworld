import NextLink from "next/link";
import { useState, VFC } from "react";
import { useMediaQuery } from "react-responsive";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Collapse,
  Link as MuiLink,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import { InfoHeader } from "src/components/Movies/About/InfoHeader";

type CastData = {
  id: number;
  name: string;
  profile_path: string;
}[];

type CastProps = {
  cast: CastData;
};

export const CastInfo: VFC<CastProps> = (props) => {
  const [open, setOpen] = useState(false);
  const { cast } = props;
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      {cast?.length ? (
        <Box>
          <InfoHeader text="出演者" />
          {isMobileScreen ? (
            <List>
              {cast?.map(({ id, name, profile_path }, i: number) => {
                return i < 8 ? (
                  <NextLink
                    key={id}
                    href={`/movies/cast?id=${id}&sort=popularity.desc&&page=1`}
                    passHref
                  >
                    <MuiLink underline="none">
                      <ListItem>
                        {profile_path ? (
                          <ListItemAvatar>
                            <Avatar
                              alt={`${name}の顔写真`}
                              src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                            />
                          </ListItemAvatar>
                        ) : (
                          <ListItemIcon>
                            <AccountCircleIcon />
                          </ListItemIcon>
                        )}
                        <ListItemText primary={name} />
                      </ListItem>
                    </MuiLink>
                  </NextLink>
                ) : null;
              })}
              {!open && cast.length > 8 ? (
                <ListItem dense>
                  <ListItemButton onClick={handleOpen}>
                    <ListItemText>もっと見る</ListItemText>
                    <ExpandMore />
                  </ListItemButton>
                </ListItem>
              ) : null}
              <Collapse in={open} timeout="auto" unmountOnExit>
                {cast?.map(({ id, name, profile_path }, i: number) => {
                  return i > 7 && i < 15 ? (
                    <NextLink
                      key={id}
                      href={`/movies/cast?id=${id}&sort=popularity.desc&page=1`}
                      passHref
                    >
                      <MuiLink underline="none">
                        <ListItem>
                          {profile_path ? (
                            <ListItemAvatar>
                              <Avatar
                                alt={`${name}の顔写真`}
                                src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                              />
                            </ListItemAvatar>
                          ) : (
                            <ListItemIcon>
                              <AccountCircleIcon />
                            </ListItemIcon>
                          )}
                          <ListItemText primary={name} />
                        </ListItem>
                      </MuiLink>
                    </NextLink>
                  ) : null;
                })}
              </Collapse>
            </List>
          ) : (
            <Box>
              {cast?.map(({ id, name, profile_path }, i: number) => {
                return i < 10 ? (
                  <NextLink
                    key={id}
                    href={`/movies/cast?id=${id}&sort=popularity.desc&page=1`}
                    passHref
                  >
                    <MuiLink underline="none" sx={{ display: "inline-block" }}>
                      <Tooltip
                        arrow
                        disableInteractive
                        title={
                          <Typography
                            color="primary"
                            variant="subtitle1"
                            sx={{ fontWeight: "bold" }}
                          >
                            {name}
                          </Typography>
                        }
                        placement="bottom"
                      >
                        {profile_path ? (
                          <Avatar
                            alt={`${name}の画像`}
                            src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                            sx={{ m: 2 }}
                          />
                        ) : (
                          <Avatar sx={{ m: 2 }}>
                            <PersonIcon />
                          </Avatar>
                        )}
                      </Tooltip>
                    </MuiLink>
                  </NextLink>
                ) : null;
              })}
              {!open && cast.length > 10 ? (
                <Button
                  fullWidth
                  onClick={handleOpen}
                  size="small"
                  sx={{ display: "block", mt: 1 }}
                >
                  すべて表示
                </Button>
              ) : null}
              <Collapse in={open} timeout="auto" unmountOnExit>
                {cast?.map(({ id, name, profile_path }, i: number) => {
                  return i > 10 && i < 20 ? (
                    <NextLink
                      key={id}
                      href={`/movies/cast?id=${id}&sort=popularity.desc&page=1`}
                      passHref
                    >
                      <MuiLink
                        underline="none"
                        sx={{ display: "inline-block" }}
                      >
                        <Tooltip
                          arrow
                          disableInteractive
                          title={
                            <Typography
                              color="primary"
                              variant="subtitle1"
                              sx={{ fontWeight: "bold" }}
                            >
                              {name}
                            </Typography>
                          }
                          placement="bottom"
                        >
                          {profile_path ? (
                            <Avatar
                              alt={`${name}の画像`}
                              src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                              sx={{ m: 2 }}
                            />
                          ) : (
                            <Avatar sx={{ m: 2 }}>
                              <PersonIcon />
                            </Avatar>
                          )}
                        </Tooltip>
                      </MuiLink>
                    </NextLink>
                  ) : null;
                })}
              </Collapse>
            </Box>
          )}
        </Box>
      ) : null}
    </>
  );
};
