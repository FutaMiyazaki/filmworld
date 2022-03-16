import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

export const useRevenueMovies = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca";

  const { data: movies, error } = useSWR(
    `${API_URL}/discover/movie?${API_KEY}&language=ja-JP&region=JP&include_adult=false&page=1&sort_by=revenue.desc`,
    fetcher
  );
  return {
    movies,
    error,
    isLoading: !movies && !error,
  };
};
