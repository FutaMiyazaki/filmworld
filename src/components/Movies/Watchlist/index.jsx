import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Card, CardMedia, Grid } from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { AppLink } from "src/components/Layout/Link/AppLink";
import { ButtonLink } from "src/components/Layout/Link/ButtonLink";

export const MoviesWatchlist = () => {
  const [nowFavoMovies, setNowFavoMovies] = useState([]);
  const storageKey = "favoMovies";
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

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
                <Grid
                  item
                  xs={1}
                  sm={1}
                  md={1}
                  lg={1}
                  key={movie.id}
                  sx={{
                    "&:hover": {
                      opacity: 0.6,
                    },
                  }}
                >
                  <AppLink path={`/movies/${movie.id}`} underline="none">
                    <Card>
                      <CardMedia
                        component="img"
                        height={isMobileScreen ? "250" : "400"}
                        image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt="ポスター画像"
                      />
                    </Card>
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
