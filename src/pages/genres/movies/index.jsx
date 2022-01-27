import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useGenres } from "src/hooks/useGenres";
import { PageHeading } from "src/components/Layout/PageHeading";
import { GenreMovies } from "src/components/Movies/GenreMovies";

export default function Posts() {
  const router = useRouter();
  const { data, error, isLoading } = useGenres();
  const [genre, setGenre] = useState("");

  const genreSearch = useEffect(() => {
    for (let i = 0; i < data?.genres.length; i++) {
      if (data?.genres[i].id == router.query.genre_id) {
        setGenre(data?.genres[i].name);
      }
    }
  });

  return (
    <div>
      <Head>
        <title>{`${genre}の映画 - FilmWorld`}</title>
      </Head>
      <PageHeading primaryText={genre} text="の映画" />
      <GenreMovies />
    </div>
  );
}
