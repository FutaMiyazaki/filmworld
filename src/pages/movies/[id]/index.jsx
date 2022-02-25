import Head from "next/head";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { Box, Card, CardMedia, Grid, Stack } from "@mui/material";
import { useMovie } from "src/hooks/useMovie";
import { Loading } from "src/components/Layout/Loading";
import { PageHeading } from "src/components/Layout/PageHeading";
import { ExternalLinkDialog } from "src/components/Movies/About/ExternalLinkDialog";
import { CastInfo } from "src/components/Movies/About/CastInfo";
import { DirectorInfo } from "src/components/Movies/About/DirectorInfo";
import { FavoriteButton } from "src/components/Movies/About/FavoriteButton";
import { Genres } from "src/components/Movies/About/Genres";
import { Overview } from "src/components/Movies/About/Overview";
import { ProductionCompanies } from "src/components/Movies/About/ProductionCompanies";
import { ReleaseDate } from "src/components/Movies/About/ReleaseDate";
import { Screenwriter } from "src/components/Movies/About/Screenwriter";
import { SimilarMovies } from "src/components/Movies/About/SimilarMovies";
import { TitleHeader } from "src/components/Movies/About/TitleHeader";
import { UserScore } from "src/components/Movies/About/UserScore";

export default function MoviesId() {
  const { movieInfo, movieCredits, error, isLoading } = useMovie();
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
        <title>{movieInfo?.title} - FilmWorld</title>
      </Head>
      <Grid container columns={{ xs: 5, sm: 12 }} spacing={2} sx={{ mb: 4 }}>
        <TitleHeader
          xsDisplay="block"
          smDisplay="none"
          title={movieInfo?.title}
          originalTitle={movieInfo?.original_title}
        />
        <Grid item xs={2} sm={4}>
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
            {movieInfo?.homepage && (
              <ExternalLinkDialog url={movieInfo?.homepage} />
            )}
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
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
              sx={{ mt: 2 }}
            >
              {movieInfo?.homepage && (
                <ExternalLinkDialog url={movieInfo?.homepage} />
              )}
              <FavoriteButton
                id={movieInfo?.id}
                title={movieInfo?.title}
                poster_path={movieInfo?.poster_path}
              />
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={3} sm={8}>
          <TitleHeader
            xsDisplay="none"
            smDisplay="block"
            title={movieInfo?.title}
            originalTitle={movieInfo?.original_title}
          />
          <ReleaseDate releaseDate={movieInfo?.release_date} />
          <Genres genres={movieInfo?.genres} />
          {isMobileScreen && (
            <UserScore
              voteAverage={movieInfo?.vote_average}
              voteCount={movieInfo?.vote_count}
              size="small"
            />
          )}
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <FavoriteButton
              id={movieInfo?.id}
              title={movieInfo?.title}
              poster_path={movieInfo?.poster_path}
            />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <UserScore
              voteAverage={movieInfo?.vote_average}
              voteCount={movieInfo?.vote_count}
              size="medium"
            />
            {movieInfo?.overview && <Overview overview={movieInfo?.overview} />}
            {movieInfo?.production_companies && (
              <ProductionCompanies
                productionCompanies={movieInfo?.production_companies}
              />
            )}
            <DirectorInfo crew={movieCredits?.crew} />
            <Screenwriter crew={movieCredits?.crew} />
            <CastInfo cast={movieCredits?.cast} />
          </Box>
        </Grid>
        <Grid item xs="5" sx={{ display: { xs: "block", sm: "none" } }}>
          {movieInfo?.overview && <Overview overview={movieInfo?.overview} />}
          <ProductionCompanies
            productionCompanies={movieInfo?.production_companies}
          />
          <DirectorInfo crew={movieCredits?.crew} />
          <Screenwriter crew={movieCredits?.crew} />
          <CastInfo cast={movieCredits?.cast} />
        </Grid>
      </Grid>
      <PageHeading text="似ている作品" />
      <SimilarMovies />
    </div>
  );
}
