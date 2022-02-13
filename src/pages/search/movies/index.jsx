import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useGenres } from "src/hooks/useGenres";
import { SearchResultsMovies } from "src/components/Movies/SearchResultsMovies";

export default function SearchMovies() {
  const router = useRouter();
  const [genre, setGenre] = useState("");
  const { genres, error } = useGenres();

  const genreSet = useEffect(() => {
    for (let i = 0; i < genres?.genres.length; i++) {
      if (genres?.genres[i].id == router.query.id) {
        setGenre(genres?.genres[i].name);
      }
    }
  });

  return (
    <div>
      <Head>
        <title>
          {router.query.keyword
            ? `${router.query.keyword}の検索結果 - FilmWorld`
            : `${router.query.year_start}~${router.query.year_end}年に公開された${genre}の映画 - FilmWorld`}
        </title>
      </Head>
      <SearchResultsMovies />
    </div>
  );
}
