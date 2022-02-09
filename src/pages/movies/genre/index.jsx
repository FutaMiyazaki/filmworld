import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { Loading } from "src/components/Layout/Loading";
import { SortMenu } from "src/components/Layout/Form/SortMenu";
import { PageHeading } from "src/components/Layout/PageHeading";
import { GenreMovies } from "src/components/Movies/GenreMovies";
import { useGenreMovies } from "src/hooks/useGenreMovies";

export default function MoviesGenre() {
  const router = useRouter();
  const [genre, setGenre] = useState("");
  const [sort, setSort] = useState("popularity.desc");
  const { movies, genres, error, isLoading } = useGenreMovies();

  const genreSearch = useEffect(() => {
    for (let i = 0; i < genres?.genres.length; i++) {
      if (genres?.genres[i].id == router.query.id) {
        setGenre(genres?.genres[i].name);
      }
    }
  });

  const handleChangeSort = useCallback(
    (e) => {
      const newSort = e.target.value;
      setSort(newSort);
      router.push(`/movies/genre?id=${router.query.id}&page=1&sort=${newSort}`);
    },
    [sort]
  );

  return (
    <div>
      <Head>
        <title>{`${genre}の映画 - FilmWorld`}</title>
      </Head>
      <PageHeading primaryText={genre} text="の映画" />
      <SortMenu sort={sort} handleChangeSort={handleChangeSort} />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <div>{error.message}</div>
      ) : (
        <GenreMovies movies={movies} />
      )}
    </div>
  );
}
