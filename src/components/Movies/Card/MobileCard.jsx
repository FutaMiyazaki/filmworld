import NextLink from "next/link";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import BasicLink from "src/components/Layout/Link/BasicLink";
import { UserScore } from "src/components/Movies/Info/UserScore";

export function MobileCard({ movie }) {
  return (
    <Card>
      <CardContent sx={{ pa: 1 }}>
        <Box sx={{ mb: 1 }}>
          <BasicLink
            href={{ pathname: `/movies/${movie.id}` }}
            tag="subtitle1"
            text={movie.title}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box>
            <NextLink passHref href={`/movies/${movie.id}`}>
              <MuiLink underline="none">
                <CardMedia
                  component="img"
                  sx={{ width: 100 }}
                  image={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  alt="ポスター画像"
                />
              </MuiLink>
            </NextLink>
          </Box>
          <Box sx={{ ml: 2 }}>
            <Typography
              variant="subtitle2"
              color="white"
              sx={{ display: "inline" }}
            >
              公開日: {movie.release_date?.replace(/-/g, "/")}
            </Typography>
            <UserScore
              voteAverage={movie.vote_average}
              voteCount={movie.vote_count}
              size="small"
            />
            <BasicLink
              href={{ pathname: `/movies/${movie.id}` }}
              tag="subtitle2"
              text=">>詳しい情報を見る"
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
