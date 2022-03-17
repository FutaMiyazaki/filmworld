import useSWR from "swr";
import { API_KEY, API_URL } from "src/utils/const";
import { fetcher } from "src/utils/fetcher";

export const useGenres = () => {
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
