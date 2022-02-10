import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { CastMovies } from "src/components/Movies/CastMovies";
import { PageHeading } from "src/components/Layout/PageHeading";
import { SortMenu } from "src/components/Layout/Form/SortMenu";
import { useCast } from "src/hooks/useCast";

export default function MoviesCast() {
  const router = useRouter();
  const [sort, setSort] = useState("popularity.desc");
  const { cast, castError } = useCast();

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
      <CastMovies />
    </div>
  );
}
