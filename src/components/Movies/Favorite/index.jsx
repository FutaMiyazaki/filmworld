import NextLink from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  Button,
  Card,
  CardMedia,
  Grid,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

export const MoviesFavorite = () => {
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
        <Grid container columns={{ xs: 4, sm: 8 }} spacing="10">
          {nowFavoMovies.map((movie) => {
            return (
              movie.id && (
                <Grid
                  item
                  xs={2}
                  sm={2}
                  key={movie.id}
                  sx={{
                    "&:hover": {
                      opacity: 0.6,
                    },
                  }}
                >
                  <NextLink href={`/movies/${movie.id}`} passHref>
                    <MuiLink underline="none">
                      <Card>
                        <CardMedia
                          component="img"
                          height={isMobileScreen ? "250" : "400"}
                          image={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                          alt="ポスター画像"
                        />
                      </Card>
                    </MuiLink>
                  </NextLink>
                </Grid>
              )
            );
          })}
        </Grid>
      ) : (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sx={{ mb: 4 }}>
            <VideoLibraryIcon sx={{ fontSize: 80 }} />
          </Grid>
          <Grid item sx={{ mb: 4 }}>
            ウォッチリストへの登録はありません
          </Grid>
          <Grid item>
            <NextLink href="/search" passHref>
              <MuiLink underline="none">
                <Button variant="outlined">
                  <Typography>次に観る映画を探す</Typography>
                </Button>
              </MuiLink>
            </NextLink>
          </Grid>
        </Grid>
      )}
    </div>
  );
};
