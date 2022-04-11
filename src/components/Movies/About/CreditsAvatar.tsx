import { VFC } from "react";
import { Avatar, Tooltip, Typography } from "@mui/material";

type CreditsAvatarProps = {
  name: string;
  profilePath?: string;
  tipPlacement: "top" | "bottom";
};

export const CreditsAvatar: VFC<CreditsAvatarProps> = (props) => {
  const { name, profilePath, tipPlacement } = props;

  return (
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
      placement={tipPlacement}
    >
      <Avatar
        alt={`${name}の画像`}
        src={`https://image.tmdb.org/t/p/w300${profilePath}`}
        sx={{ m: 2 }}
      />
    </Tooltip>
  );
};
