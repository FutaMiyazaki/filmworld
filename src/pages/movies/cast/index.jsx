import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { CastMovies } from "src/components/Movies/CastMovies";
import { Loading } from "src/components/Layout/Loading";
import { PageHeading } from "src/components/Layout/PageHeading";
import { useCastMovies } from "src/hooks/useCastMovies";
import { SortMenu } from "src/components/Layout/Form/SortMenu";

export default function Search() {
  const router = useRouter();
  const [sort, setSort] = useState("popularity.desc");
  const { movies, cast, error, isLoading } = useCastMovies();

  const handleChangeSort = useCallback(
    (e) => {
      const newSort = e.target.value;
      setSort(newSort);
      router.push(`/movies/cast?id=${router.query.id}&page=1&sort=${newSort}`);
    },
    [sort]
  );

  return (
    <div>
      <Head>
        <title>{cast?.name}が出演している映画 - FilmWorld</title>
      </Head>
      <PageHeading primaryText={cast?.name} text="が出演している映画" />
      <SortMenu sort={sort} handleChangeSort={handleChangeSort} />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <div>{error.message}</div>
      ) : (
        <CastMovies movies={movies} />
      )}
    </div>
  );
}
