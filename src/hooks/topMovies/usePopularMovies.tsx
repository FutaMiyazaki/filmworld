import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

export const usePopularMovies = () => {
  const { data: movies, error } = useSWR(
    "https://api.themoviedb.org/3/movie/popular?api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&language=ja-JP&page=1&region=JP",
    fetcher
  );

  return {
    movies,
    error,
    isLoading: !movies && !error,
  };
};
