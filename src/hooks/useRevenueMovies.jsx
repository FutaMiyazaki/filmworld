import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useRevenueMovies = () => {
  const router = useRouter();
  const { data: revenueMovies, error } = useSWR(
    router.query.page
      ? `https://api.themoviedb.org/3/discover/movie?api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&language=ja-JP&include_adult=false&page=${router.query.page}&sort_by=revenue.desc`
      : null,
    fetcher
  );
  return {
    revenueMovies,
    error,
    isLoading: !revenueMovies && !error,
  };
};
