import NextImage from "next/image";
import { VFC } from "react";
import { Box, Rating, Typography } from "@mui/material";
import { AppLink } from "src/components/Layout/Link/AppLink";
import StarIcon from "@mui/icons-material/Star";

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
  const shapingScore = (score: number) => {
    return Math.floor((score / 2) * Math.pow(10, 1)) / Math.pow(10, 1);
  };

  return (
    <AppLink path={`/movies/${movie.id}`} underline="none">
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
          src={`https://image.tmdb.org/t/p/original${movie.posterPath}`}
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
        {movie.releaseDate ? (
          <Box color="white">{movie.releaseDate?.replace(/-/g, "/")} 公開</Box>
        ) : null}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Rating
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
            precision={0.1}
            readOnly
            size="small"
            value={shapingScore(movie.voteAverage)}
          />
          <Box color="#FBBD30" sx={{ fontWeight: "bold", ml: 1 }}>
            {shapingScore(movie.voteAverage)}
          </Box>
        </Box>
      </Box>
    </AppLink>
  );
};
