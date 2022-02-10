import Head from "next/head";
import { useRouter } from "next/router";
import { FilterByYear } from "src/components/Layout/Form/FilterByYear";
import { PageHeading } from "src/components/Layout/PageHeading";
import { RevenueMovies } from "src/components/Movies/RevenueMovies";

export default function MoviesRevenue() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>
          {router.query.year
            ? `${router.query.year}年代の興行収入ランキング - FilmWorld`
            : "興行収入ランキング - FilmWorld"}
        </title>
      </Head>
      <PageHeading
        primaryText={router.query.year}
        text={
          router.query.year ? "年代の興行収入ランキング" : "興行収入ランキング"
        }
      />
      <FilterByYear path="/movies/revenue?" />
      <RevenueMovies />
    </div>
  );
}
