import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useMoviesTop = () => {
  const { data, error } = useSWR(
    "https://api.themoviedb.org/3/movie/popular?api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&language=ja-JP&page=1",
    fetcher
  );
  return {
    data,
    error,
    isLoading: !error && !data,
  };
};
