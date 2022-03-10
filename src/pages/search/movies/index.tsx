import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Movies } from "src/components/Movies/index";
import { useSearchMovies } from "src/hooks/useSearchMovie";
import { PageHeading } from "src/components/Layout/PageHeading";
import { useGenres } from "src/hooks/useGenres";

const SearchMovies: NextPage = () => {
  const router = useRouter();
  const [genre, setGenre] = useState("");
  const [path, setPath] = useState("");
  const { genres } = useGenres();
  const { movies, error, isLoading, isEmpty } = useSearchMovies();

  useEffect(() => {
    for (let i = 0; i < genres?.genres.length; i++) {
      if (genres?.genres[i].id == router.query.genre) {
        setGenre(genres?.genres[i].name);
      }
    }
  }, [genres?.genres, router.query.genre]);

  useEffect(() => {
    router.query.keyword
      ? setPath(`/search/movies?keyword=${router.query.keyword}&`)
      : setPath(
          `/search/movies?genre=${router.query.genre}&year_start=${router.query.year_start}&year_end=${router.query.year_end}&`
        );
  }, [router]);

  return (
    <div>
      <Head>
        <title>
          {router.query.keyword
            ? `${router.query.keyword}の検索結果 - FilmWorld`
            : `${router.query.year_start}~${router.query.year_end}年に公開された${genre}のおすすめ映画 - FilmWorld`}
        </title>
      </Head>
      {router.query.keyword ? (
        <PageHeading
          text={`${router.query.keyword}の検索結果 ${movies?.total_results}件`}
        />
      ) : (
        <PageHeading
          text={`${router.query.year_start}~${router.query.year_end}年に公開された${genre}のオススメ映画`}
        />
      )}
      {isEmpty ? (
        <Grid
          container
          alignItems="center"
          direction="column"
          justifyContent="center"
        >
          <Grid item sx={{ my: 3 }}>
            <SearchIcon sx={{ fontSize: 80 }} />
          </Grid>
          <Grid item>一致する検索結果はありませんでした</Grid>
        </Grid>
      ) : (
        <Movies
          movies={movies?.results}
          error={error}
          gridSm={2}
          gridXs={1}
          isLoading={isLoading}
          maxDisplay={20}
          path={path}
          totalPages={movies?.total_pages}
        />
      )}
    </div>
  );
};

export default SearchMovies;
