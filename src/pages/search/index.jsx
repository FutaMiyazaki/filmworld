import Head from "next/head";
import { SearchForm } from "src/components/Layout/Form/SearchForm";
import { PageHeading } from "src/components/Layout/PageHeading";

const Search = () => {
  return (
    <div>
      <Head>
        <title>映画を探す - FilmWorld</title>
      </Head>
      <PageHeading text="映画を探す" />
      <SearchForm />
    </div>
  );
};

export default Search;
