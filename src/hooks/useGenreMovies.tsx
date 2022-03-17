import { useRouter } from "next/router";
import useSWR from "swr";
import { API_KEY, API_URL } from "src/utils/const";
import { fetcher } from "src/utils/fetcher";

export const useGenreMovies = () => {
  const router = useRouter();
  const { data: movies, error } = useSWR(
    router.query.id && router.query.page && router.query.sort
      ? router.query.year
        ? `${API_URL}/discover/movie?${API_KEY}&language=ja-JP&region=JP&include_adult=false&page=${router.query.page}&with_genres=${router.query.id}&sort_by=${router.query.sort}&year=${router.query.year}`
        : `${API_URL}/discover/movie?${API_KEY}&language=ja-JP&region=JP&include_adult=false&page=${router.query.page}&with_genres=${router.query.id}&sort_by=${router.query.sort}`
      : null,
    fetcher
  );

  return {
    movies,
    error,
    isLoading: !movies && !error,
  };
};
