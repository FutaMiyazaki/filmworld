import { useCallback } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useGenres } from "src/hooks/useGenres";
import { PageHeading } from "src/components/Layout/PageHeading";
import { GenreMovies } from "src/components/Movies/GenreMovies";

export default function Posts() {
  const router = useRouter();
  const { data, error, isLoading } = useGenres();

  const genreName = useCallback(
    data?.genres.filter((genre) => {
      return genre.id == router.query.genre_id;
    }),
    []
  );

  return (
    <div>
      <Head>
        <title>{`${genreName[0].name}の映画 - FilmWorld`}</title>
      </Head>
      <PageHeading primaryText={genreName[0].name} text="の映画" />
      <GenreMovies />
    </div>
  );
}
