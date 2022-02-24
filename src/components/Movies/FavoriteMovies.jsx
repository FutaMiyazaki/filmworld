import { useEffect, useState } from "react";
import NextLink from "next/link";
import { useMediaQuery } from "react-responsive";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

export function FavoriteMovies(props) {
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
        <Grid
          container
          columns={{ xs: 4, sm: 8 }}
          justifyContent="flex-start"
          spacing="10"
        >
          {nowFavoMovies.map((movie) => {
            return (
              <Grid item xs="2" sm="2" key={movie.id}>
                <NextLink href={`/movies/${movie.id}`} passHref>
                  <MuiLink underline="none">
                    <Card>
                      <CardMedia
                        component="img"
                        height={isMobileScreen ? "300" : "450"}
                        image={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                        alt="ポスター画像"
                      />
                      <CardContent>
                        <Typography variant="body2">{movie.title}</Typography>
                      </CardContent>
                    </Card>
                  </MuiLink>
                </NextLink>
              </Grid>
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
            ウオッチリストへの登録はありません
          </Grid>
        </Grid>
      )}
    </div>
  );
}
