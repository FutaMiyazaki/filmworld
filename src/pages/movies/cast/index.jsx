import Head from "next/head";
import { useRouter } from "next/router";
import { CastMovies } from "src/components/Movies/CastMovies";

export default function Search() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>が出演している映画 - FilmWorld</title>
      </Head>
      <CastMovies />
    </div>
  );
}
