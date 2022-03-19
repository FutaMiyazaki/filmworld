import { NextPage } from "next";
import Head from "next/head";
import { GenreList } from "src/components/Genre/GenreList";
import { SearchForm } from "src/components/Layout/Form/SearchForm";
import { PageHeading } from "src/components/Layout/PageHeading";

const Search: NextPage = () => {
  return (
    <div>
      <Head>
        <title>映画を探す - FilmWorld</title>
      </Head>
      <PageHeading text="映画を探す" />
      <SearchForm />
      <PageHeading text="ジャンル" />
      <GenreList />
    </div>
  );
};

export default Search;
