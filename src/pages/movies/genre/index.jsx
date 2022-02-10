import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { SortMenu } from "src/components/Layout/Form/SortMenu";
import { PageHeading } from "src/components/Layout/PageHeading";
import { GenreMovies } from "src/components/Movies/GenreMovies";
import { useGenres } from "src/hooks/useGenres";

export default function MoviesGenre() {
  const router = useRouter();
  const [genre, setGenre] = useState("");
  const { genres, error } = useGenres();
  const [sort, setSort] = useState("popularity.desc");

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
      router.push(`/movies/genre?id=${router.query.id}&sort=${newSort}&page=1`);
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
      <GenreMovies />
    </div>
  );
}
