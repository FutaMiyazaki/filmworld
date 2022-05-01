import { NextPage } from "next";
import Head from "next/head";
import NextImage from "next/image";
import { SyntheticEvent, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Box, Card, CardMedia, Grid, Stack, Tab, Tabs } from "@mui/material";
import { Loading } from "src/components/Layout/Loading";
import { PageHeading } from "src/components/Layout/PageHeading";
import { CastList } from "src/components/Movies/About/CastList";
import { DirectorList } from "src/components/Movies/About/DirectorList";
import { ExternalLinkDialog } from "src/components/Movies/About/ExternalLinkDialog";
import { FavoriteButton } from "src/components/Movies/About/FavoriteButton";
import { GenreList } from "src/components/Movies/About/GenreList";
import { MovieTitle } from "src/components/Movies/About/MovieTitle";
import { Overview } from "src/components/Movies/About/Overview";
import { ProductionSideInfo } from "src/components/Movies/About/ProductionSideInfo";
import { ProviderList } from "src/components/Movies/About/ProviderList";
import { Revenue } from "src/components/Movies/About/Revenue";
import { SimilarMovies } from "src/components/Movies/About/SimilarMovies";
import { MoviesAboutTab } from "src/components/Movies/About/Tab";
import { UserScore } from "src/components/Movies/About/UserScore";
import { WorkInfo } from "src/components/Movies/About/WorkInfo";
import { useMovie } from "src/hooks/useMovie";

const MoviesId: NextPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const { movieInfo, movieCredits, movieProviders, error, isLoading } =
    useMovie();

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
            <Box sx={{ height: "40vh", position: "relative" }}>
              <NextImage
                alt={`${movieInfo?.title}のポスター画像`}
                layout="fill"
                objectFit="contain"
                src={`https://image.tmdb.org/t/p/w300${movieInfo?.poster_path}`}
              />
            </Box>
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
          {isMobileScreen ? (
            <Box>
              <GenreList genres={movieInfo?.genres} />
              <UserScore
                voteAverage={movieInfo?.vote_average}
                voteCount={movieInfo?.vote_count}
                size="small"
              />
              <FavoriteButton
                id={movieInfo?.id}
                title={movieInfo?.title}
                poster_path={movieInfo?.poster_path}
              />
            </Box>
          ) : (
            <Box>
              <MovieTitle
                title={movieInfo?.title}
                originalTitle={movieInfo?.original_title}
              />
              <Box>
                <Tabs value={tabValue} onChange={handleTabChange}>
                  <Tab label="作品情報" />
                  <Tab label="スタッフ・出演者" />
                  <Tab label="配信サービス" />
                </Tabs>
              </Box>
              <MoviesAboutTab index={0} value={tabValue}>
                <GenreList genres={movieInfo?.genres} />
                <UserScore
                  voteAverage={movieInfo?.vote_average}
                  voteCount={movieInfo?.vote_count}
                  size="medium"
                />
                <WorkInfo
                  data={movieInfo?.release_date?.replace(/-/g, "/")}
                  text="公開日"
                />
                <WorkInfo data={`${movieInfo?.runtime}分`} text="上映時間" />
                <Revenue revenue={movieInfo?.revenue} />
                <Overview overview={movieInfo?.overview} />
              </MoviesAboutTab>
              <MoviesAboutTab index={1} value={tabValue}>
                <ProductionSideInfo
                  data={movieInfo?.production_countries}
                  headerText="製作国"
                />
                <ProductionSideInfo
                  data={movieInfo?.production_companies}
                  headerText="製作会社"
                  pathType="company"
                />
                <DirectorList crew={movieCredits?.crew} />
                <CastList cast={movieCredits?.cast} />
              </MoviesAboutTab>
              <MoviesAboutTab index={2} value={tabValue}>
                <ProviderList
                  headerText="購入"
                  providerList={movieProviders?.results?.JP?.buy}
                />
                <ProviderList
                  headerText="レンタル"
                  providerList={movieProviders?.results?.JP?.rent}
                />
              </MoviesAboutTab>
            </Box>
          )}
        </Grid>
        <Grid item xs={5} sx={{ display: { xs: "block", sm: "none" } }}>
          <Box>
            <Box>
              <Tabs value={tabValue} onChange={handleTabChange}>
                <Tab label="作品情報" />
                <Tab label="スタッフ・出演者" />
                <Tab label="配信サービス" />
              </Tabs>
            </Box>
            <MoviesAboutTab index={0} value={tabValue}>
              <WorkInfo
                data={movieInfo?.release_date?.replace(/-/g, "/")}
                text="公開日"
              />
              <WorkInfo data={`${movieInfo?.runtime}分`} text="上映時間" />
              <Revenue revenue={movieInfo?.revenue} />
              <Overview overview={movieInfo?.overview} />
            </MoviesAboutTab>
            <MoviesAboutTab index={1} value={tabValue}>
              <ProductionSideInfo
                data={movieInfo?.production_countries}
                headerText="製作国"
              />
              <ProductionSideInfo
                data={movieInfo?.production_companies}
                headerText="製作会社"
                pathType="company"
              />
              <DirectorList crew={movieCredits?.crew} />
              <CastList cast={movieCredits?.cast} />
            </MoviesAboutTab>
            <MoviesAboutTab index={2} value={tabValue}>
              <ProviderList
                headerText="購入"
                providerList={movieProviders?.results?.JP?.buy}
              />
              <ProviderList
                headerText="レンタル"
                providerList={movieProviders?.results?.JP?.rent}
              />
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
