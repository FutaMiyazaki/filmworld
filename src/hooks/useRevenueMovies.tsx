import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useRevenueMovies = () => {
  const router = useRouter();
  const { data: movies, error } = useSWR(
    router.query.page
      ? router.query.year
        ? `https://api.themoviedb.org/3/discover/movie?api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&language=ja-JP&include_adult=false&page=${router.query.page}&year=${router.query.year}&sort_by=revenue.desc&region=JP`
        : `https://api.themoviedb.org/3/discover/movie?api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&language=ja-JP&include_adult=false&page=${router.query.page}&sort_by=revenue.desc&region=JP`
      : null,
    fetcher
  );
  return {
    movies,
    error,
    isLoading: !movies && !error,
  };
};