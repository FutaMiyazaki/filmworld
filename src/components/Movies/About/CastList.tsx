import NextLink from "next/link";
import { useCallback, useState, VFC } from "react";
import { useMediaQuery } from "react-responsive";
import {
  Box,
  Button,
  Collapse,
  Link as MuiLink,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { AppLink } from "src/components/Layout/Link/AppLink";
import { CreditsAvatar } from "src/components/Movies/About/CreditsAvatar";
import { InfoHeader } from "src/components/Movies/About/InfoHeader";
import { ListItemWithAvatar } from "src/components/Layout/List/ListItemWithAvatar";

type CastData = {
  id: number;
  name: string;
  profile_path: string;
}[];

type CastListProps = {
  cast: CastData;
};

export const CastList: VFC<CastListProps> = (props) => {
  const [open, setOpen] = useState(false);
  const { cast } = props;
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, []);

  return (
    <>
      {cast?.length ? (
        <Box>
          <InfoHeader text="出演者" />
          {isMobileScreen ? (
            <List>
              {cast?.map(({ id, name, profile_path }, i: number) => {
                return i < 8 ? (
                  <AppLink
                    key={id}
                    path={`/movies?page=1&sort_type=popularity.desc&cast_id=${id}`}
                    underline="none"
                  >
                    <ListItemWithAvatar
                      dense={false}
                      name={name}
                      profilePath={profile_path}
                    />
                  </AppLink>
                ) : null;
              })}
              {!open && cast.length > 8 ? (
                <ListItem dense>
                  <ListItemButton onClick={handleClick}>
                    <ListItemText>さらに表示</ListItemText>
                    <ExpandMore />
                  </ListItemButton>
                </ListItem>
              ) : null}
              <Collapse in={open} timeout="auto" unmountOnExit>
                {cast?.map(({ id, name, profile_path }, i: number) => {
                  return i > 7 && i < 15 ? (
                    <AppLink
                      key={id}
                      path={`/movies?page=1&sort_type=popularity.desc&cast_id=${id}`}
                      underline="none"
                    >
                      <ListItemWithAvatar
                        dense={false}
                        name={name}
                        profilePath={profile_path}
                      />
                    </AppLink>
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
                    href={`/movies?page=1&sort_type=popularity.desc&cast_id=${id}`}
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
                  onClick={handleClick}
                  size="small"
                  sx={{ display: "block", mt: 1 }}
                >
                  さらに表示
                </Button>
              ) : null}
              <Collapse in={open} timeout="auto" unmountOnExit>
                {cast?.map(({ id, name, profile_path }, i: number) => {
                  return i > 10 && i < 20 && profile_path ? (
                    <NextLink
                      key={id}
                      href={`/movies?page=1&sort_type=popularity.desc&cast_id=${id}`}
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
