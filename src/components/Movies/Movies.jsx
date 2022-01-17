import { useMovies } from "src/hooks/useMovies";
import { useMediaQuery } from "react-responsive";
import { Loading } from "src/components/Layout/Loading";
import BasicLink from "src/components/Layout/Link/BasicLink";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export function Movies() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 560px)" });
  const { data, error, isLoading, isEmpty } = useMovies();
  console.log(data);

  if (isLoading) {
    return <Loading />;
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
            {isMobileScreen ? (
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 150 }}
                  image={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  alt="ポスター画像"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <BasicLink
                      href={{ pathname: `/movies/${movie.id}` }}
                      tag="subtitle1"
                      text={movie.title}
                    />
                  </CardContent>
                </Box>
              </Card>
            ) : (
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="400"
                  image={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  alt="ポスター画像"
                />
                <CardContent>
                  <BasicLink
                    href={{ pathname: `/movies/${movie.id}` }}
                    tag="subtitle1"
                    text={movie.title}
                  />
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Grid>
        );
      })}
    </Grid>
  );
}
