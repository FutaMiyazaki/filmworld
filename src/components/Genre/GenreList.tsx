import NextLink from "next/link";
import { VFC } from "react";
import { useMediaQuery } from "react-responsive";
import {
  Box,
  Chip,
  Grid,
  IconButton,
  Link as MuiLink,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Loading } from "src/components/Layout/Loading";
import { useGenres } from "src/hooks/useGenres";

export const GenreList: VFC = () => {
  const { genres, genresError, isLoading } = useGenres();
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  if (isLoading) {
    return <Loading />;
  }

  if (genresError) {
    return <div>{genresError.message}</div>;
  }

  return (
    <>
      {isMobileScreen ? (
        <Box sx={{ width: "100%" }}>
          <List sx={{ pt: 0 }}>
            {genres?.genres.map((genre: { id: number; name: string }) => {
              return (
                <NextLink
                  key={genre.id}
                  href={`/movies/genre?id=${genre.id}&sort=popularity.desc&page=1`}
                  passHref
                >
                  <MuiLink color="white" underline="none">
                    <ListItem
                      dense
                      disableGutters
                      secondaryAction={
                        <IconButton edge="end">
                          <ChevronRightIcon />
                        </IconButton>
                      }
                    >
                      <ListItemButton>
                        <ListItemText>{genre.name}</ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </MuiLink>
                </NextLink>
              );
            })}
          </List>
        </Box>
      ) : (
        <Grid
          container
          columns={{ xs: 4, sm: 6 }}
          justifyContent="center"
          spacing={2}
        >
          {genres?.genres.map((genre: { id: number; name: string }) => {
            return (
              <Grid item key={genre.id} xs="auto" sm={2}>
                <NextLink
                  href={`/movies/genre?id=${genre.id}&sort=popularity.desc&page=1`}
                  passHref
                >
                  <MuiLink underline="none">
                    <Chip
                      clickable
                      color="primary"
                      label={genre.name}
                      variant="outlined"
                    />
                  </MuiLink>
                </NextLink>
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};
