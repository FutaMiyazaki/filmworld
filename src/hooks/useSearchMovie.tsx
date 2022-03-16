import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

export const useSearchMovies = () => {
  const router = useRouter();
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca";

  const { data: movies, error } = useSWR(
    router.query.keyword && router.query.page
      ? `${API_URL}/search/movie?${API_KEY}&language=ja-JP&region=JP&include_adult=false&page=${router.query.page}&query=${router.query.keyword}`
      : router.query.genre &&
        router.query.page &&
        router.query.year_start &&
        router.query.year_end
      ? `${API_URL}/discover/movie?${API_KEY}&language=ja-JP&region=JP&include_adult=false&page=${router.query.page}&with_genres=${router.query.genre}&release_date.gte=${router.query.year_start}-01-01&release_date.lte=${router.query.year_end}-12-31`
      : null,
    fetcher
  );

  return {
    movies,
    error,
    isLoading: !movies && !error,
    isEmpty: movies?.results?.length === 0,
  };
};
