import Head from "next/head";
import Image from "next/image";
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
import { InfoHeader } from "src/components/Movies/InfoHeader";
import { PaperText } from "src/components/Layout/PaperText";
import { UserScore } from "src/components/Movies/UserScore";
import { TitleHeader } from "src/components/Movies/TitleHeader";

export default function MoviesId() {
  const { movieInfo, movieCredits, error, isLoading } = useMovie();
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const releaseDate = movieInfo?.release_date.replace(/-/g, "/");

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <Head>
        <title>{movieInfo?.title}</title>
      </Head>
      <Grid container columns={{ xs: 5, md: 12 }} spacing={2}>
        <TitleHeader
          xsDisplay="block"
          smDisplay="none"
          title={movieInfo?.title}
          originalTitle={movieInfo?.original_title}
        />
        {isMobileScreen ? (
          <Grid item xs={2} md={4}>
            <Card sx={{ mb: 1 }}>
              <CardMedia
                component="img"
                sx={{
                  height: "30vh",
                }}
                image={`https://image.tmdb.org/t/p/w185${movieInfo?.poster_path}`}
                alt="ポスター画像"
              />
            </Card>
          </Grid>
        ) : (
          <Grid item xs={2} md={4}>
            <div style={{ position: "relative", width: "100%", height: 450 }}>
              <Image
                src={`https://image.tmdb.org/t/p/w185${movieInfo?.poster_path}`}
                layout="fill"
                objectFit="contain"
                alt="ポスター画像"
              />
            </div>
            <Grid container justifyContent="center" sx={{ mt: 1 }}>
              <Grid item>
                <ExternalLink url={movieInfo?.homepage} text="公式サイト" />
              </Grid>
            </Grid>
          </Grid>
        )}
        <Grid item xs={3} md={8}>
          <TitleHeader
            xsDisplay="none"
            smDisplay="block"
            title={movieInfo?.title}
            originalTitle={movieInfo?.original_title}
          />
          {isMobileScreen && (
            <ExternalLink url={movieInfo?.homepage} text="公式サイト" />
          )}
          <Typography variant="body1" color="white" sx={{ mb: 1 }}>
            公開日: {releaseDate}
          </Typography>
          {movieInfo?.genres.map((genre) => {
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
          {!isMobileScreen && <UserScore score={movieInfo?.vote_average} />}
          {movieInfo?.overview && (
            <Box sx={{ display: { xs: "none", sm: "block" }, my: 1 }}>
              <Typography
                variant="subtitle1"
                color="white"
                sx={{ fontWeight: "bold" }}
              >
                あらすじ
              </Typography>
              <Typography variant="body2" color="white" sx={{ mb: 2 }}>
                {movieInfo?.overview}
              </Typography>
            </Box>
          )}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <InfoHeader text="制作会社" />
            {movieInfo?.production_companies.map((company) => {
              return (
                <PaperText key={company.id}>
                  <Typography variant="body2">{company.name}</Typography>
                </PaperText>
              );
            })}
            <InfoHeader text="監督" />
            {movieCredits?.crew.map((crew) => {
              return crew.job === "Director" ? (
                <Paper
                  key={crew.id}
                  sx={{
                    display: "inline-block",
                    textAlign: "center",
                    px: 1,
                    mr: 1,
                    mb: 1,
                  }}
                >
                  <Typography variant="body2">{crew.name}</Typography>
                </Paper>
              ) : null;
            })}
            <InfoHeader text="脚本" />
            {movieCredits?.crew.map((crew) => {
              return crew.job === "Story" ||
                crew.job === "Writer" ||
                crew.job === "Screenstory" ||
                crew.job === "Original Film Writer" ? (
                <Paper
                  key={crew.id}
                  sx={{
                    display: "inline-block",
                    textAlign: "center",
                    px: 1,
                    mr: 1,
                    mb: 1,
                  }}
                >
                  <Typography variant="body2">{crew.name}</Typography>
                </Paper>
              ) : null;
            })}
            <InfoHeader text="出演者" />
            {movieCredits?.cast.map((cast, i) => {
              return i < 10 ? (
                <Paper
                  key={cast.id}
                  sx={{
                    display: "inline-block",
                    textAlign: "center",
                    px: 1,
                    mr: 1,
                    mb: 1,
                  }}
                >
                  <Typography variant="body2">{cast.name}</Typography>
                </Paper>
              ) : null;
            })}
          </Box>
        </Grid>
        <Grid item sx={{ display: { xs: "block", sm: "none" } }}>
          <UserScore score={movieInfo?.vote_average} />
        </Grid>
        {movieInfo?.overview && (
          <Grid item sx={{ display: { xs: "block", sm: "none" } }}>
            <Typography
              variant="subtitle1"
              color="white"
              sx={{ fontWeight: "bold" }}
            >
              あらすじ
            </Typography>
            <Typography variant="body2" color="white">
              {movieInfo?.overview}
            </Typography>
          </Grid>
        )}
        <Grid item sx={{ display: { xs: "block", sm: "none" } }}>
          <InfoHeader text="制作会社" />
          {movieInfo?.production_companies.map((company) => {
            return (
              <PaperText key={company.id}>
                <Typography variant="body2">{company.name}</Typography>
              </PaperText>
            );
          })}
          <InfoHeader text="監督" />
          {movieCredits?.crew.map((crew) => {
            return crew.job === "Director" ? (
              <Paper
                key={crew.id}
                sx={{
                  display: "inline-block",
                  textAlign: "center",
                  px: 1,
                  mr: 1,
                  mb: 1,
                }}
              >
                <Typography variant="body2">{crew.name}</Typography>
              </Paper>
            ) : null;
          })}
          <InfoHeader text="脚本" />
          {movieCredits?.crew.map((crew) => {
            return crew.job === "Story" ||
              crew.job === "Writer" ||
              crew.job === "Screenstory" ||
              crew.job === "Original Film Writer" ? (
              <Paper
                key={crew.id}
                sx={{
                  display: "inline-block",
                  textAlign: "center",
                  px: 1,
                  mr: 1,
                  mb: 1,
                }}
              >
                <Typography variant="body2">{crew.name}</Typography>
              </Paper>
            ) : null;
          })}
          <InfoHeader text="出演者" />
          {movieCredits?.cast.map((cast, i) => {
            return i < 10 ? (
              <Paper
                key={cast.id}
                sx={{
                  display: "inline-block",
                  textAlign: "center",
                  px: 1,
                  mr: 1,
                  mb: 1,
                }}
              >
                <Typography variant="body2">{cast.name}</Typography>
              </Paper>
            ) : null;
          })}
        </Grid>
      </Grid>
    </div>
  );
}
