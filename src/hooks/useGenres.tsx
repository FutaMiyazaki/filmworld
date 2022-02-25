import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useGenres = () => {
  const { data: genres, error: genresError } = useSWR(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&language=ja-JP",
    fetcher
  );

  return {
    genres,
    genresError,
    isLoading: !genres && !genresError,
  };
};
