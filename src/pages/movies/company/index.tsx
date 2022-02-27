import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { CompanyMovies } from "src/components/Movies/CompanyMovies";
import { PageHeading } from "src/components/Layout/PageHeading";
import { SortMenu } from "src/components/Layout/Form/SortMenu";
import { useCompany } from "src/hooks/useCompany";

const MoviesCompany: NextPage = () => {
  const router = useRouter();
  const [sort, setSort] = useState("popularity.desc");
  const { company } = useCompany();

  const handleChangeSort = useCallback(
    (e) => {
      const newSort = e.target.value;
      setSort(newSort);
      router.push(
        `/movies/company?id=${router.query.id}&page=1&sort=${newSort}`
      );
    },
    [sort]
  );

  return (
    <div>
      <Head>
        <title>{company?.name}の映画 - FilmWorld</title>
      </Head>
      <PageHeading text={`${company?.name}の映画`} />
      <SortMenu sort={sort} handleChangeSort={handleChangeSort} />
      <CompanyMovies />
    </div>
  );
};

export default MoviesCompany;
