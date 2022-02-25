import NextLink from "next/link";
import { useMediaQuery } from "react-responsive";
import { Box, Chip } from "@mui/material";

type GenresData = {
  id?: number;
  name?: string;
}[];

type GenresProps = {
  genres: GenresData;
};

export function Genres(props: GenresProps) {
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
              component="a"
              label={genre.name}
              size={isMobileScreen ? "small" : "medium"}
              color="primary"
              variant="outlined"
              clickable
              sx={{ mr: 1, mb: 1 }}
            />
          </NextLink>
        );
      })}
    </Box>
  );
}
