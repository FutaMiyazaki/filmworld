import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useMovies = () => {
  const { data, error } = useSWR(
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&language=ja-JP",
    fetcher
  );
  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};
