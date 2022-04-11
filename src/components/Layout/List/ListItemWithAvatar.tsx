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
  name: string;
  profilePath?: string;
};

export const ListItemWithAvatar: VFC<ListItemWithAvatarProps> = (props) => {
  const { name, profilePath } = props;

  return (
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
  );
};
