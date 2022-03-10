import NextLink from "next/link";
import { VFC } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { useMediaQuery } from "react-responsive";
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
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <Card>
      <CardActionArea>
        <NextLink passHref href={`/movies/${movie.id}`}>
          <MuiLink underline="none">
            <CardContent>
              <Grid container columns={{ xs: 5 }} spacing={2}>
                <Grid item xs={2}>
                  <CardMedia
                    alt="ポスター画像"
                    component="img"
                    image={`https://image.tmdb.org/t/p/original${movie.posterPath}`}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant={isMobileScreen ? "subtitle2" : "subtitle1"}
                  >
                    {movie.title}
                  </Typography>
                  {movie.releaseDate ? (
                    <Typography
                      color="white"
                      variant={isMobileScreen ? "subtitle2" : "subtitle1"}
                      sx={{ display: "inline" }}
                    >
                      公開日： {movie.releaseDate?.replace(/-/g, "/")}
                    </Typography>
                  ) : null}
                  <UserScore
                    size={isMobileScreen ? "small" : "medium"}
                    voteAverage={movie?.voteAverage}
                    voteCount={movie?.voteCount}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </MuiLink>
        </NextLink>
      </CardActionArea>
    </Card>
  );
};
