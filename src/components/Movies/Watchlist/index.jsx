import NextImage from "next/image";
import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { AppLink } from "src/components/Layout/Link/AppLink";
import { ButtonLink } from "src/components/Layout/Link/ButtonLink";

export const MoviesWatchlist = () => {
  const [nowFavoMovies, setNowFavoMovies] = useState([]);
  const storageKey = "favoMovies";

  useEffect(() => {
    const storage = localStorage.getItem(storageKey);
    setNowFavoMovies(JSON.parse(storage));
  }, []);

  return (
    <div>
      {nowFavoMovies && nowFavoMovies.length > 0 ? (
        <Grid container columns={{ xs: 2, sm: 3, md: 4, lg: 5 }} spacing={1}>
          {nowFavoMovies.map((movie) => {
            return (
              movie.id && (
                <Grid item xs={1} sm={1} md={1} lg={1} key={movie.id}>
                  <AppLink path={`/movies/${movie.id}`} underline="hover">
                    <Box
                      sx={{
                        height: "30vh",
                        position: "relative",
                        "&:hover": {
                          opacity: 0.6,
                        },
                      }}
                    >
                      <NextImage
                        alt={`${movie.title}のポスター画像`}
                        layout="fill"
                        objectFit="contain"
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      />
                    </Box>
                    <Box sx={{ p: 1 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: "bold",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {movie.title}
                      </Typography>
                    </Box>
                  </AppLink>
                </Grid>
              )
            );
          })}
        </Grid>
      ) : (
        <Grid
          container
          alignItems="center"
          direction="column"
          justifyContent="center"
        >
          <Grid item sx={{ mb: 4 }}>
            <VideoLibraryIcon sx={{ fontSize: 80 }} />
          </Grid>
          <Grid item sx={{ mb: 4 }}>
            ウォッチリストへの登録はありません
          </Grid>
          <Grid item>
            <ButtonLink
              path="/search"
              text="次に観る映画を探す"
              variant="outlined"
            />
          </Grid>
        </Grid>
      )}
    </div>
  );
};
