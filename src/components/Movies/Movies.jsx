import NextLink from "next/link";
import { useMovies } from "src/hooks/useMovies";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Link as MuiLink,
} from "@mui/material";

export function Movies() {
  const { data, error, isLoading, isEmpty } = useMovies();

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {data.results.map((movie) => {
        return (
          <Grid key={movie.id} item xs={4} sm={4} md={3}>
            <NextLink href="/posts" passHref>
              <MuiLink underline="none">
                <Card>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                  </CardActions>
                </Card>
              </MuiLink>
            </NextLink>
          </Grid>
        );
      })}
    </Grid>
  );
}
