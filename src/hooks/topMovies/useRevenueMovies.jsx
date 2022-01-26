import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useRevenueMovies = () => {
  const { data: revenueMovies, error } = useSWR(
    "https://api.themoviedb.org/3/discover/movie/?api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&language=ja-JP&page=1&sort_by=revenue.desc",
    fetcher
  );
  return {
    revenueMovies,
    error,
    isLoading: !revenueMovies && !error,
  };
};
