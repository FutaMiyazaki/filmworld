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
import { UserScore } from "src/components/Movies/UserScore";

export function PcCard(props) {
  return (
    <Card>
      <CardContent sx={{ pa: 1 }}>
        <Box sx={{ mb: 1 }}>
          <BasicLink
            href={{ pathname: `/movies/${props.movie.id}` }}
            tag="h6"
            text={props.movie.title}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box>
            <NextLink passHref href={`/movies/${props.movie.id}`}>
              <MuiLink underline="none">
                <CardMedia
                  component="img"
                  sx={{ width: 150 }}
                  image={`https://image.tmdb.org/t/p/w185${props.movie.poster_path}`}
                  alt="ポスター画像"
                />
              </MuiLink>
            </NextLink>
          </Box>
          <Box sx={{ ml: 2 }}>
            <Typography
              variant="subtitle1"
              color="white"
              sx={{ display: "inline" }}
            >
              公開日: {props.movie.release_date.replace(/-/g, "/")}
            </Typography>
            <UserScore
              voteAverage={props.movie.vote_average}
              voteCount={props.movie.vote_count}
              size="medium"
            />
            <BasicLink
              href={{ pathname: `/movies/${props.movie.id}` }}
              tag="subtitle2"
              text=">>詳しい情報を見る"
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
