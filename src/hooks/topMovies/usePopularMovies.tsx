import useSWR from "swr";
import { API_KEY, API_URL } from "src/utils/const";
import { fetcher } from "src/utils/fetcher";

export const usePopularMovies = () => {
  const { data: movies, error } = useSWR(
    `${API_URL}/movie/popular?${API_KEY}&language=ja-JP&region=JP&page=1`,
    fetcher
  );

  return {
    movies,
    error,
    isLoading: !movies && !error,
  };
};
