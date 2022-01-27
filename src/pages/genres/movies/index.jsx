import { useCallback } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useGenres } from "src/hooks/useGenres";
import { PageHeading } from "src/components/Layout/PageHeading";
import { GenreMovies } from "src/components/Movies/GenreMovies";

export default function Posts() {
  const router = useRouter();
  const { data, error, isLoading } = useGenres();

  const genreSearch = useCallback(
    data?.genres.filter((genre) => {
      return genre.id == router.query.genre_id;
    }),
    []
  );
  const genreName = genreSearch[0].name;

  return (
    <div>
      <Head>
        <title>{`${genreName}の映画 - FilmWorld`}</title>
      </Head>
      <PageHeading primaryText={genreName} text="の映画" />
      <GenreMovies />
    </div>
  );
}
