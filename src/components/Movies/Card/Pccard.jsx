import NextLink from "next/link";
import {
  Card,
  CardContent,
  CardMedia,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import BasicLink from "src/components/Layout/Link/BasicLink";

export function PcCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <NextLink passHref href={`/movies/${props.movie.id}`}>
        <MuiLink underline="none">
          <CardMedia
            component="img"
            height="400"
            image={`https://image.tmdb.org/t/p/w185${props.movie.poster_path}`}
            alt="ポスター画像"
          />
        </MuiLink>
      </NextLink>
      <CardContent>
        <BasicLink
          href={{ pathname: `/movies/${props.movie.id}` }}
          tag="subtitle1"
          text={props.movie.title}
        />
        <div style={{ flexGrow: 1 }}></div>
        <Typography variant="overline" color="white" sx={{ display: "inline" }}>
          {props.movie?.release_date.replace(/-/g, "/")}
        </Typography>
      </CardContent>
    </Card>
  );
}
