import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { SyntheticEvent, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Box, Card, CardMedia, Grid, Stack, Tab, Tabs } from "@mui/material";
import { Loading } from "src/components/Layout/Loading";
import { PageHeading } from "src/components/Layout/PageHeading";
import { CastInfo } from "src/components/Movies/About/CastInfo";
import { DirectorInfo } from "src/components/Movies/About/DirectorInfo";
import { ExternalLinkDialog } from "src/components/Movies/About/ExternalLinkDialog";
import { FavoriteButton } from "src/components/Movies/About/FavoriteButton";
import { GenresInfo } from "src/components/Movies/About/GenresInfo";
import { MovieTitle } from "src/components/Movies/About/MovieTitle";
import { Overview } from "src/components/Movies/About/Overview";
import { ProductionCompanies } from "src/components/Movies/About/ProductionCompanies";
import { ProductionCountries } from "src/components/Movies/About/ProductionCountries";
import { ReleaseDate } from "src/components/Movies/About/ReleaseDate";
import { Revenue } from "src/components/Movies/About/Revenue";
import { RunningTime } from "src/components/Movies/About/RunningTime";
import { ScreenwriterInfo } from "src/components/Movies/About/ScreenwriterInfo";
import { SimilarMovies } from "src/components/Movies/About/SimilarMovies";
import { MoviesAboutTab } from "src/components/Movies/About/Tab";
import { UserScore } from "src/components/Movies/About/UserScore";
import { useMovie } from "src/hooks/useMovie";

const MoviesId: NextPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const { movieInfo, movieCredits, error, isLoading } = useMovie();

  const handleTabChange = (e: SyntheticEvent, newTabValue: number) => {
    setTabValue(newTabValue);
  };

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
        <Grid item xs={5} sx={{ display: { xs: "block", sm: "none" } }}>
          <MovieTitle
            title={movieInfo?.title}
            originalTitle={movieInfo?.original_title}
          />
        </Grid>
        <Grid item xs={2} sm={4}>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <Card sx={{ mb: 1 }}>
              <CardMedia
                component="img"
                height="100%"
                image={`https://image.tmdb.org/t/p/w300${movieInfo?.poster_path}`}
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
                src={`https://image.tmdb.org/t/p/w300${movieInfo?.poster_path}`}
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
          {isMobileScreen ? null : (
            <Box>
              <MovieTitle
                title={movieInfo?.title}
                originalTitle={movieInfo?.original_title}
              />
              <Box>
                <Tabs value={tabValue} onChange={handleTabChange}>
                  <Tab label="作品情報" />
                  <Tab label="スタッフ・出演者" />
                </Tabs>
              </Box>
              <MoviesAboutTab index={0} value={tabValue}>
                <GenresInfo genres={movieInfo?.genres} />
                <UserScore
                  voteAverage={movieInfo?.vote_average}
                  voteCount={movieInfo?.vote_count}
                  size="medium"
                />
                <ReleaseDate releaseDate={movieInfo?.release_date} />
                <RunningTime runtime={movieInfo?.runtime} />
                <Revenue revenue={movieInfo?.revenue} />
                {movieInfo?.overview && (
                  <Overview overview={movieInfo?.overview} />
                )}
              </MoviesAboutTab>
              <MoviesAboutTab index={1} value={tabValue}>
                {movieInfo?.production_companies && (
                  <ProductionCompanies
                    companies={movieInfo?.production_companies}
                  />
                )}
                {movieInfo?.production_countries && (
                  <ProductionCountries
                    countries={movieInfo?.production_countries}
                  />
                )}
                <DirectorInfo crew={movieCredits?.crew} />
                <ScreenwriterInfo crew={movieCredits?.crew} />
                <CastInfo cast={movieCredits?.cast} />
              </MoviesAboutTab>
            </Box>
          )}
          {isMobileScreen ? (
            <Box>
              <GenresInfo genres={movieInfo?.genres} />
              <UserScore
                voteAverage={movieInfo?.vote_average}
                voteCount={movieInfo?.vote_count}
                size="small"
              />
            </Box>
          ) : null}
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <FavoriteButton
              id={movieInfo?.id}
              title={movieInfo?.title}
              poster_path={movieInfo?.poster_path}
            />
          </Box>
        </Grid>
        <Grid item xs={5} sx={{ display: { xs: "block", sm: "none" } }}>
          <Box>
            <Box>
              <Tabs value={tabValue} onChange={handleTabChange}>
                <Tab label="作品情報" />
                <Tab label="スタッフ・出演者" />
              </Tabs>
            </Box>
            <MoviesAboutTab index={0} value={tabValue}>
              <ReleaseDate releaseDate={movieInfo?.release_date} />
              <RunningTime runtime={movieInfo?.runtime} />
              <Revenue revenue={movieInfo?.revenue} />
              {movieInfo?.overview && (
                <Overview overview={movieInfo?.overview} />
              )}
            </MoviesAboutTab>
            <MoviesAboutTab index={1} value={tabValue}>
              {movieInfo?.production_companies && (
                <ProductionCompanies
                  companies={movieInfo?.production_companies}
                />
              )}
              {movieInfo?.production_countries && (
                <ProductionCountries
                  countries={movieInfo?.production_countries}
                />
              )}
              <DirectorInfo crew={movieCredits?.crew} />
              <ScreenwriterInfo crew={movieCredits?.crew} />
              <CastInfo cast={movieCredits?.cast} />
            </MoviesAboutTab>
          </Box>
        </Grid>
      </Grid>
      <PageHeading text="似ている作品" />
      <SimilarMovies />
    </div>
  );
};

export default MoviesId;
