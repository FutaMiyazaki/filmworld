import { Box, Chip } from "@mui/material";

export function Genres(props) {
  return (
    <Box>
      {props.genres?.map((genre) => {
        return (
          <Chip
            key={genre.id}
            label={genre.name}
            size="small"
            color="primary"
            variant="outlined"
            sx={{ mr: 1, mb: 1 }}
          />
        );
      })}
    </Box>
  );
}
