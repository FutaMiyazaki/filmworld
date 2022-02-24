import NextLink from "next/link";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { UserScore } from "src/components/Movies/Info/UserScore";

type MoviesCardProps = {
  movie: {
    id: number;
    title: string;
    posterPath?: string;
    releaseDate?: string;
    voteAverage?: number;
    voteCount?: number;
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
                  voteAverage={movie.voteAverage}
                  voteCount={movie.voteCount}
                  size={isMobileScreen ? "small" : "medium"}
                />
                <NextLink href={`/movies/${movie.id}`} passHref>
                  <MuiLink underline="hover">
                    <Typography variant="subtitle2" sx={{ display: "inline" }}>
                      詳しい情報はこちら
                    </Typography>
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
