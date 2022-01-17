import Head from "next/head";
import {
  Box,
  Card,
  CardMedia,
  Chip,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { useMovie } from "src/hooks/useMovie";
import { Loading } from "src/components/Layout/Loading";
import { ExternalLink } from "src/components/Layout/Link/ExternalLink";

export default function MoviesId() {
  const { data, error, isLoading } = useMovie();
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const releaseDate = data?.release_date.replace(/-/g, "/");
  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <Grid container columns={{ xs: 5, md: 12 }} spacing={2}>
        <Grid item xs={5} sx={{ display: { xs: "block", sm: "none" }, mb: 1 }}>
          <Typography
            variant="subtitle1"
            color="white"
            sx={{ fontWeight: "bold" }}
          >
            {data.title}
          </Typography>
          <Typography variant="subtitle2" color="gray">
            {data.original_title}
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={4}>
          {isMobileScreen ? (
            <Card sx={{ mb: 1, bgcolor: "#0A192A" }}>
              <CardMedia
                component="img"
                sx={{
                  height: "30vh",
                }}
                image={`https://image.tmdb.org/t/p/w185${data.poster_path}`}
                alt="ポスター画像"
              />
            </Card>
          ) : (
            <Card sx={{ mb: 1, bgcolor: "#0A192A" }}>
              <CardMedia
                component="img"
                sx={{
                  width: "30vh",
                }}
                image={`https://image.tmdb.org/t/p/w185${data.poster_path}`}
                alt="ポスター画像"
              />
            </Card>
          )}
          <ExternalLink url={data.homepage} text="公式サイト" />
        </Grid>
        <Grid item xs={3} md={8}>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Typography variant="h4" color="white" sx={{ fontWeight: "bold" }}>
              {data.title}
            </Typography>
            <Typography variant="subtitle1" color="gray" sx={{ mb: 2 }}>
              {data.original_title}
            </Typography>
          </Box>
          <Typography variant="body1" color="white" sx={{ mb: 1 }}>
            公開日: {releaseDate}
          </Typography>
          {data.genres.map((genre) => {
            return (
              <Chip
                key={genre.id}
                label={genre.name}
                size="small"
                color="primary"
                variant="outlined"
                sx={{ mr: 1, mb: 1 }}
              />
            );
          })}
          <Box sx={{ display: { xs: "none", sm: "block" }, my: 1 }}>
            <Typography
              variant="subtitle1"
              color="white"
              sx={{ fontWeight: "bold" }}
            >
              あらすじ
            </Typography>
            <Typography variant="body2" color="white" sx={{ mb: 2 }}>
              {data.overview}
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            color="white"
            sx={{ fontWeight: "bold" }}
          >
            制作会社
          </Typography>
          {data.production_companies.map((Company) => {
            return (
              <Paper
                sx={{
                  display: "inline-block",
                  textAlign: "center",
                  px: 1,
                  mr: 1,
                  mb: 1,
                }}
              >
                <Typography variant="body2">{Company.name}</Typography>
              </Paper>
            );
          })}
        </Grid>
        {data.overview && (
          <Grid item sx={{ display: { xs: "block", sm: "none" } }}>
            <Typography
              variant="subtitle1"
              color="white"
              sx={{ fontWeight: "bold" }}
            >
              あらすじ
            </Typography>
            <Typography variant="body2" color="white">
              {data.overview}
            </Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
