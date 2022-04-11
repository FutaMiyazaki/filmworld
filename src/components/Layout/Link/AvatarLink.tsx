import NextLink from "next/link";
import { VFC } from "react";
import { Avatar, Link as MuiLink, Tooltip, Typography } from "@mui/material";

type AvatarLinkProps = {
  id: number;
  name: string;
  profilePath?: string;
  tipPlacement: "top" | "bottom";
};

export const AvatarLink: VFC<AvatarLinkProps> = (props) => {
  const { id, name, profilePath, tipPlacement } = props;

  return (
    <NextLink
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
          placement={tipPlacement}
        >
          <Avatar
            alt={`${name}の画像`}
            src={`https://image.tmdb.org/t/p/w300${profilePath}`}
            sx={{ m: 2 }}
          />
        </Tooltip>
      </MuiLink>
    </NextLink>
  );
};
