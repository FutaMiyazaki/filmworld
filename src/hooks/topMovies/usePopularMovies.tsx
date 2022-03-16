import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

export const usePopularMovies = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca";

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
