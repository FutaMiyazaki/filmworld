import useSWR from "swr";
import { API_KEY, API_URL } from "src/utils/const";
import { fetcher } from "src/utils/fetcher";

export const useRevenueMovies = () => {
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
