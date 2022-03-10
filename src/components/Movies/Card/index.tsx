import NextLink from "next/link";
import { VFC } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TextLink } from "src/components/Layout/Link/TextLink";
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
      <CardContent>
        <Grid container columns={{ xs: 5 }} spacing={2}>
          <Grid item xs={2}>
            <NextLink passHref href={`/movies/${movie.id}`}>
              <MuiLink underline="none">
                <CardMedia
                  alt="ポスター画像"
                  component="img"
                  image={`https://image.tmdb.org/t/p/original${movie.posterPath}`}
                  sx={{
                    "&:hover": {
                      opacity: 0.7,
                    },
                  }}
                />
              </MuiLink>
            </NextLink>
          </Grid>
          <Grid item xs={3}>
            <TextLink
              path={`/movies/${movie.id}`}
              text={movie.title}
              variant={isMobileScreen ? "subtitle2" : "subtitle1"}
            />
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
            <NextLink href={`/movies/${movie.id}`} passHref>
              <MuiLink underline="none">
                <Button
                  endIcon={<ChevronRightIcon />}
                  fullWidth
                  size="small"
                  variant="outlined"
                >
                  詳細を見る
                </Button>
              </MuiLink>
            </NextLink>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
