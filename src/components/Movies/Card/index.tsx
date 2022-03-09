import NextLink from "next/link";
import { VFC } from "react";
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
      <CardContent sx={{ pa: 1 }}>
        <Box sx={{ mb: 1 }}>
          <TextLink
            path={`/movies/${movie.id}`}
            text={movie.title}
            variant={isMobileScreen ? "subtitle1" : "h6"}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box>
            <NextLink passHref href={`/movies/${movie.id}`}>
              <MuiLink underline="none">
                <CardMedia
                  alt="ポスター画像"
                  component="img"
                  image={`https://image.tmdb.org/t/p/w200${movie.posterPath}`}
                  sx={{
                    width: isMobileScreen ? "100" : "150",
                    "&:hover": {
                      opacity: 0.7,
                    },
                  }}
                />
              </MuiLink>
            </NextLink>
          </Box>
          <Box sx={{ ml: 2 }}>
            {movie.releaseDate ? (
              <Typography
                color="white"
                variant={isMobileScreen ? "subtitle2" : "subtitle1"}
                sx={{ display: "inline" }}
              >
                公開日: {movie.releaseDate?.replace(/-/g, "/")}
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
                  fullWidth={isMobileScreen}
                  variant="outlined"
                >
                  詳細を見る
                </Button>
              </MuiLink>
            </NextLink>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
