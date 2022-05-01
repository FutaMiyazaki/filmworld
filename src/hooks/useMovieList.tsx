import { useRouter } from "next/router";
import useSWR from "swr";
import { API_KEY, API_URL } from "src/utils/const";
import { fetcher } from "src/utils/fetcher";

export const useMovieList = () => {
  const router = useRouter();
  const { data: movieListData, error } = useSWR(
    `${API_URL}/discover/movie?${API_KEY}&language=ja-JP&region=JP&include_adult=false&page=${router.query.page}&sort_by=${router.query.sort_type}&year=${router.query.year}&with_companies=${router.query.company_id}&with_genres=${router.query.genre_id}&with_people=${router.query.cast_id}`,
    fetcher
  );

  return {
    movieListData,
    error,
    isLoading: !movieListData && !error,
  };
};
