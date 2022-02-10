import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useCastMovies = () => {
  const router = useRouter();
  const { data: movies, error: moviesError } = useSWR(
    router.query.id && router.query.page && router.query.sort
      ? `https://api.themoviedb.org/3/discover/movie?api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&language=ja-JP&page=${router.query.page}&include_adult=false&with_people=${router.query.id}&sort_by=${router.query.sort}&region=JP`
      : null,
    fetcher
  );

  return {
    movies,
    error: moviesError,
    isLoading: !movies && !moviesError,
  };
};
