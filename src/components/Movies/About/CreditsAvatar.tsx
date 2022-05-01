import { VFC } from "react";
import { Avatar, Box, Typography } from "@mui/material";

type CreditsAvatarProps = {
  name: string;
  profilePath?: string;
};

export const CreditsAvatar: VFC<CreditsAvatarProps> = (props) => {
  const { name, profilePath } = props;

  return (
    <Box
      sx={{
        alignContent: "center",
        alignItems: "center",
        display: "inline-flex",
        m: 1,
      }}
    >
      <Avatar
        alt={`${name}の画像`}
        src={`https://image.tmdb.org/t/p/w300${profilePath}`}
        sx={{ mr: 1 }}
      />
      <Typography variant="body2">{name}</Typography>
    </Box>
  );
};
