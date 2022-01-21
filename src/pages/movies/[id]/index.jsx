import Head from "next/head";
import Image from "next/image";
import { Box, Card, CardMedia, Grid } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { useMovie } from "src/hooks/useMovie";
import { Loading } from "src/components/Layout/Loading";
import { ExternalLink } from "src/components/Layout/Link/ExternalLink";
import { UserScore } from "src/components/Movies/Info/UserScore";
import { TitleHeader } from "src/components/Movies/Info/TitleHeader";
import { Overview } from "src/components/Movies/Info/Overview";
import { ProductionCompanies } from "src/components/Movies/Info/ProductionCompanies";
import { Director } from "src/components/Movies/Info/Director";
import { Screenwriter } from "src/components/Movies/Info/ScreenWriter";
import { Cast } from "src/components/Movies/Info/Cast";
import { ReleaseDate } from "src/components/Movies/Info/ReleaseDate";
import { Genres } from "src/components/Movies/Info/Genres";

export default function MoviesId() {
  const { movieInfo, movieCredits, similarMovies, error, isLoading } =
    useMovie();
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

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
        <Grid item xs={2} md={4}>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
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
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <div style={{ position: "relative", width: "100%", height: 450 }}>
              <Image
                src={`https://image.tmdb.org/t/p/w185${movieInfo?.poster_path}`}
                layout="fill"
                objectFit="contain"
                alt="ポスター画像"
              />
            </div>
            {movieInfo?.homepage && (
              <Grid container justifyContent="center" sx={{ mt: 1 }}>
                <Grid item>
                  <ExternalLink url={movieInfo?.homepage} text="公式サイト" />
                </Grid>
              </Grid>
            )}
          </Box>
        </Grid>
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
          <ReleaseDate releaseDate={movieInfo?.release_date} />
          <Genres genres={movieInfo?.genres} />
          {!isMobileScreen && (
            <UserScore
              voteAverage={movieInfo?.vote_average}
              voteCount={movieInfo?.vote_count}
              size="medium"
            />
          )}
          {movieInfo?.overview && (
            <Box sx={{ display: { xs: "none", sm: "block" }, my: 1 }}>
              <Overview overview={movieInfo?.overview} />
            </Box>
          )}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ProductionCompanies
              productionCompanies={movieInfo?.production_companies}
            />
            <Director crew={movieCredits?.crew} />
            <Screenwriter crew={movieCredits?.crew} />
            <Cast cast={movieCredits?.cast} />
          </Box>
        </Grid>
        <Grid item xs={5} sx={{ display: { xs: "block", sm: "none" } }}>
          <UserScore
            voteAverage={movieInfo?.vote_average}
            voteCount={movieInfo?.vote_count}
            size="medium"
          />
          {movieInfo?.overview && <Overview overview={movieInfo?.overview} />}
          <ProductionCompanies
            productionCompanies={movieInfo?.production_companies}
          />
          <Director crew={movieCredits?.crew} />
          <Screenwriter crew={movieCredits?.crew} />
          <Cast cast={movieCredits?.cast} />
        </Grid>
      </Grid>
    </div>
  );
}
