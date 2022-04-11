import NextLink from "next/link";
import { useState, VFC } from "react";
import { useMediaQuery } from "react-responsive";
import {
  Box,
  Button,
  Collapse,
  Divider,
  Link as MuiLink,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { InfoHeader } from "src/components/Movies/About/InfoHeader";
import { ListItemAvatarLink } from "src/components/Layout/Link/ListItemAvatarLink";
import { CreditsAvatar } from "src/components/Movies/About/CreditsAvatar";

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
                  <>
                    <ListItemAvatarLink
                      key={id}
                      id={id}
                      name={name}
                      profilePath={profile_path}
                    />
                    <Divider variant="inset" />
                  </>
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
                    <>
                      <ListItemAvatarLink
                        key={id}
                        id={id}
                        name={name}
                        profilePath={profile_path}
                      />
                      {i === 14 || i === cast.length ? null : (
                        <Divider variant="inset" />
                      )}
                    </>
                  ) : null;
                })}
              </Collapse>
            </List>
          ) : (
            <Box>
              {cast?.map(({ id, name, profile_path }, i: number) => {
                return i < 10 && profile_path ? (
                  <NextLink
                    key={id}
                    href={`/movies/cast?id=${id}&sort=popularity.desc&page=1`}
                    passHref
                  >
                    <MuiLink underline="none" sx={{ display: "inline-block" }}>
                      <CreditsAvatar
                        name={name}
                        profilePath={profile_path}
                        tipPlacement="top"
                      />
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
                  return i > 10 && i < 20 && profile_path ? (
                    <NextLink
                      key={id}
                      href={`/movies/cast?id=${id}&sort=popularity.desc&page=1`}
                      passHref
                    >
                      <MuiLink
                        underline="none"
                        sx={{ display: "inline-block" }}
                      >
                        <CreditsAvatar
                          name={name}
                          profilePath={profile_path}
                          tipPlacement="bottom"
                        />
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
