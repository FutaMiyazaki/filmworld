import React from "react";
import Head from "next/head";
import { useMovies } from "src/hooks/useMovies";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

export default function Index(props) {
  const { data, error, isLoading, isEmpty } = useMovies();
  console.log(data);

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
    <div>
      <Head>
        <title>トップページ</title>
      </Head>
      {/* <Grid container spacing={2}>
        {data.results.map((movie) => {
          return (
            <Grid key={movie.id} item xs={3}>
              <Card sx={{ maxWidth: 345 }}>
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
                  <Typography variant="body2" color="text.secondary">
                    {movie.overview}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid> */}
    </div>
  );
}
