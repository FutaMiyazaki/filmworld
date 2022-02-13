import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useSearchMovies = () => {
  const router = useRouter();
  const { data: movies, error } = useSWR(
    router.query.page && router.query.keyword
      ? `https://api.themoviedb.org/3/search/movie?api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&page=${router.query.page}&query=${router.query.keyword}&language=ja-JP&include_adult=false`
      : router.query.page &&
        router.query.genre &&
        router.query.year_start &&
        router.query.year_end
      ? `https://api.themoviedb.org/3/discover/movie?api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&page=${router.query.page}&with_genres=${router.query.genre}&release_date.gte=${router.query.year_start}-01-01&release_date.lte=${router.query.year_end}-12-31&language=ja-JP&include_adult=false&region=JP`
      : null,
    fetcher
  );

  return {
    movies,
    error,
    isLoading: !movies && !error,
    isEmpty: movies && movies.length === 0,
  };
};
