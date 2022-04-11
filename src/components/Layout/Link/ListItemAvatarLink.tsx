import NextLink from "next/link";
import { VFC } from "react";
import {
  Avatar,
  Link as MuiLink,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

type ListItemAvatarLinkProps = {
  id: number;
  name: string;
  profilePath?: string;
};

export const ListItemAvatarLink: VFC<ListItemAvatarLinkProps> = (props) => {
  const { id, name, profilePath } = props;

  return (
    <NextLink
      href={`/movies/cast?id=${id}&sort=popularity.desc&&page=1`}
      passHref
    >
      <MuiLink underline="none">
        <ListItem>
          {profilePath ? (
            <ListItemAvatar>
              <Avatar
                alt={`${name}の顔写真`}
                src={`https://image.tmdb.org/t/p/w300${profilePath}`}
              />
            </ListItemAvatar>
          ) : (
            <ListItemIcon>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemIcon>
          )}
          <ListItemText>{name}</ListItemText>
        </ListItem>
      </MuiLink>
    </NextLink>
  );
};
