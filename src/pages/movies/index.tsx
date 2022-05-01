import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { PageHeading } from "src/components/Layout/PageHeading";
import { MovieList } from "src/components/Movies/MovieList";
import { SortSection } from "src/components/Layout/SortSection";
import { useMovieList } from "src/hooks/useMovieList";
import { useCast } from "src/hooks/useCast";
import { useCompany } from "src/hooks/useCompany";
import { useGenres } from "src/hooks/useGenres";

const MoviesIndex: NextPage = () => {
  const router = useRouter();
  const [genre, setGenre] = useState("");
  const { movieListData, error, isLoading } = useMovieList();
  const { cast } = useCast();
  const { company } = useCompany();
  const { genres } = useGenres();

  useEffect(() => {
    for (let i = 0; i < genres?.genres.length; i++) {
      if (genres?.genres[i].id == router.query.genre_id) {
        setGenre(genres?.genres[i].name);
      }
    }
  }, [genres?.genres]);

  const title = useCallback(() => {
    switch (router.query.sort_type) {
      case "popularity.desc":
        if (router.query.cast_id) {
          return `${cast?.name}が出演している映画 人気ランキング`;
        } else if (router.query.company_id) {
          return `${company?.name}の映画 人気ランキング`;
        } else if (router.query.genre_id) {
          return `${genre}映画 人気ランキング`;
        }
        return "人気ランキング";
      case "revenue.desc":
        if (router.query.cast_id) {
          return `${cast?.name}が出演している映画 興行収入ランキング`;
        } else if (router.query.company_id) {
          return `${company?.name}の映画 興行収入ランキング`;
        } else if (router.query.genre_id) {
          return `${genre}映画 興行収入ランキング`;
        }
        return "興行収入ランキング";
      case "vote_count.desc":
        if (router.query.cast_id) {
          return `${cast?.name}が出演している映画 レビュー数ランキング`;
        } else if (router.query.company_id) {
          return `${company?.name}の映画 レビュー数ランキング`;
        } else if (router.query.genre_id) {
          return `${genre}映画 レビュー数ランキング`;
        }
        return "レビュー数ランキング";
      default:
        return "ランキング";
    }
  }, [router, cast, company, genre]);

  return (
    <div>
      <Head>
        <title>{title()} - FilmWorld</title>
      </Head>
      <PageHeading text={title()} />
      <SortSection path="popular" />
      <MovieList
        movies={movieListData?.results}
        error={error}
        gridLg={5}
        gridMd={4}
        gridSm={3}
        gridXs={2}
        isLoading={isLoading}
        maxDisplay={20}
        path="/movies"
        totalPages={movieListData?.total_pages}
      />
    </div>
  );
};

export default MoviesIndex;
