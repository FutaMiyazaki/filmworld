import NextLink from "next/link";
import { Box, Chip } from "@mui/material";

export function Genres(props) {
  return (
    <Box>
      {props.genres?.map((genre) => {
        return (
          <NextLink
            key={genre.id}
            href={`/genres/movies?genre_id=${genre.id}&page=1`}
            passHref
          >
            <Chip
              component="a"
              label={genre.name}
              size="small"
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
