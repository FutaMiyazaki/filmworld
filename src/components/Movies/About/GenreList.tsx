import NextLink from "next/link";
import { VFC } from "react";
import { useMediaQuery } from "react-responsive";
import { Box, Chip } from "@mui/material";

type GenresData = {
  id?: number;
  name?: string;
}[];

type GenreListProps = {
  genres: GenresData;
};

export const GenreList: VFC<GenreListProps> = (props) => {
  const { genres } = props;
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <Box>
      {genres?.map((genre) => {
        return (
          <NextLink
            key={genre.id}
            href={`/movies?page=1&sort_type=popularity.desc&genre_id=${genre.id}`}
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
