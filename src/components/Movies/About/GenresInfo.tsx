import NextLink from "next/link";
import { VFC } from "react";
import { useMediaQuery } from "react-responsive";
import { Box, Chip } from "@mui/material";

type GenresData = {
  id?: number;
  name?: string;
}[];

type GenresInfoProps = {
  genres: GenresData;
};

export const GenresInfo: VFC<GenresInfoProps> = (props) => {
  const { genres } = props;
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <Box>
      {genres?.map((genre) => {
        return (
          <NextLink
            key={genre.id}
            href={`/movies/genre?id=${genre.id}&sort=popularity.desc&page=1`}
            passHref
          >
            <Chip
              clickable
              component="a"
              color="primary"
              label={genre.name}
              size={isMobileScreen ? "small" : "medium"}
              variant="outlined"
              sx={{ mr: 1, mb: 1 }}
            />
          </NextLink>
        );
      })}
    </Box>
  );
};
