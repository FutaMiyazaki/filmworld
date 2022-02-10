import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const usePopularMovies = () => {
  const { data: popularMovies, error } = useSWR(
    "https://api.themoviedb.org/3/movie/popular?api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&language=ja-JP&page=1&region=JP",
    fetcher
  );

  return {
    popularMovies,
    error,
    isLoading: !popularMovies && !error,
  };
};
