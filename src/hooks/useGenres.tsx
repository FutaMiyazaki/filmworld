import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useGenres = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca";

  const { data: genres, error: genresError } = useSWR(
    `${API_URL}/genre/movie/list?${API_KEY}&language=ja-JP`,
    fetcher
  );

  return {
    genres,
    genresError,
    isLoading: !genres && !genresError,
  };
};
