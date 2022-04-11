import { useState, VFC } from "react";
import { useMediaQuery } from "react-responsive";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { AppLink } from "src/components/Layout/Link/AppLink";
import { UserScore } from "src/components/Movies/About/UserScore";

type MoviesCardProps = {
  movie: {
    id: number;
    posterPath?: string;
    releaseDate?: string;
    title: string;
    voteAverage: 0;
    voteCount: 0;
  };
};

export const MoviesCard: VFC<MoviesCardProps> = (props) => {
  const { movie } = props;
  const [show, setShow] = useState(false);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <>
      {isMobileScreen ? (
        <Card>
          <CardActionArea>
            <AppLink path={`/movies/${movie.id}`} underline="none">
              <Grid container columns={{ xs: 5 }}>
                <Grid item xs={2}>
                  <CardMedia
                    alt="ポスター画像"
                    component="img"
                    height="100%"
                    image={`https://image.tmdb.org/t/p/original${movie.posterPath}`}
                  />
                </Grid>
                <Grid item xs={3}>
                  <CardContent>
                    <Typography variant="subtitle2">{movie.title}</Typography>
                    {movie.releaseDate ? (
                      <Typography
                        color="white"
                        variant="subtitle2"
                        sx={{ display: "inline" }}
                      >
                        公開日： {movie.releaseDate?.replace(/-/g, "/")}
                      </Typography>
                    ) : null}
                    <UserScore
                      size="small"
                      voteAverage={movie?.voteAverage}
                      voteCount={movie?.voteCount}
                    />
                  </CardContent>
                </Grid>
              </Grid>
            </AppLink>
          </CardActionArea>
        </Card>
      ) : (
        <Card
          onMouseOver={() => setShow(true)}
          onMouseOut={() => setShow(false)}
        >
          <CardActionArea>
            <AppLink path={`/movies/${movie.id}`} underline="none">
              <Box sx={{ position: "relative" }}>
                {show && (
                  <Paper
                    elevation={0}
                    sx={{
                      position: "absolute",
                      display: "inline-block",
                      p: 1,
                    }}
                  >
                    <Typography
                      color="primary"
                      variant="subtitle2"
                      sx={{ fontWeight: "bold" }}
                    >
                      {movie.title}
                    </Typography>
                  </Paper>
                )}
                <CardMedia
                  alt="ポスター画像"
                  component="img"
                  height="360"
                  image={`https://image.tmdb.org/t/p/original${movie.posterPath}`}
                />
              </Box>
              <Box sx={{ pt: 1, pl: 2 }}>
                {movie.releaseDate ? (
                  <Typography
                    color="white"
                    variant="subtitle2"
                    sx={{ display: "inline" }}
                  >
                    公開日：{movie.releaseDate?.replace(/-/g, "/")}
                  </Typography>
                ) : null}
                <UserScore
                  size="small"
                  voteAverage={movie?.voteAverage}
                  voteCount={movie?.voteCount}
                />
              </Box>
            </AppLink>
          </CardActionArea>
        </Card>
      )}
    </>
  );
};
