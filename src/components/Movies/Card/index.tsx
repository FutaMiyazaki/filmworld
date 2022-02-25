import NextLink from "next/link";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useMediaQuery } from "react-responsive";
import { UserScore } from "src/components/Movies/About/UserScore";

type MoviesCardProps = {
  movie: {
    id: number;
    title: string;
    posterPath?: string;
    releaseDate?: string;
    voteAverage: 0;
    voteCount: 0;
  };
};

export function MoviesCard(props: MoviesCardProps) {
  const { movie } = props;
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <>
      {movie.posterPath ? (
        <Card>
          <CardContent sx={{ pa: 1 }}>
            <Box sx={{ mb: 1 }}>
              <NextLink href={`/movies/${movie.id}`} passHref>
                <MuiLink underline="hover">
                  <Typography
                    variant={isMobileScreen ? "subtitle1" : "h6"}
                    sx={{ display: "inline" }}
                  >
                    {movie.title}
                  </Typography>
                </MuiLink>
              </NextLink>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box>
                <NextLink passHref href={`/movies/${movie.id}`}>
                  <MuiLink underline="none">
                    <CardMedia
                      component="img"
                      sx={{ width: isMobileScreen ? "100" : "150" }}
                      image={`https://image.tmdb.org/t/p/w185${movie.posterPath}`}
                      alt="ポスター画像"
                    />
                  </MuiLink>
                </NextLink>
              </Box>
              <Box sx={{ ml: 2 }}>
                {movie.releaseDate ? (
                  <Typography
                    variant={isMobileScreen ? "subtitle2" : "subtitle1"}
                    color="white"
                    sx={{ display: "inline" }}
                  >
                    公開日: {movie.releaseDate?.replace(/-/g, "/")}
                  </Typography>
                ) : null}
                <UserScore
                  voteAverage={movie?.voteAverage}
                  voteCount={movie?.voteCount}
                  size={isMobileScreen ? "small" : "medium"}
                />
                <NextLink href={`/movies/${movie.id}`} passHref>
                  <MuiLink underline="none">
                    <Button
                      fullWidth={isMobileScreen}
                      variant="outlined"
                      endIcon={<ChevronRightIcon />}
                    >
                      詳細を見る
                    </Button>
                  </MuiLink>
                </NextLink>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ) : null}
    </>
  );
}
