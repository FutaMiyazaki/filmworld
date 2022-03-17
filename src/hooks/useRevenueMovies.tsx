import { useRouter } from "next/router";
import useSWR from "swr";
import { API_KEY, API_URL } from "src/utils/const";
import { fetcher } from "src/utils/fetcher";

export const useRevenueMovies = () => {
  const router = useRouter();
  const { data: movies, error } = useSWR(
    router.query.page
      ? router.query.year
        ? `${API_URL}/discover/movie?${API_KEY}&language=ja-JP&region=JP&include_adult=false&page=${router.query.page}&sort_by=revenue.desc&year=${router.query.year}`
        : `${API_URL}/discover/movie?${API_KEY}&language=ja-JP&region=JP&include_adult=false&page=${router.query.page}&sort_by=revenue.desc&year=${router.query.year}`
      : null,
    fetcher
  );
  return {
    movies,
    error,
    isLoading: !movies && !error,
  };
};
