import { VFC } from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

type ListItemWithAvatarProps = {
  dense: boolean;
  name: string;
  profilePath?: string;
};

export const ListItemWithAvatar: VFC<ListItemWithAvatarProps> = (props) => {
  const { dense, name, profilePath } = props;

  return (
    <ListItem dense={dense}>
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
  );
};
