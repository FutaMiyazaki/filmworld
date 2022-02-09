import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const usePopularMovies = () => {
  const router = useRouter();
  const { data: movies, error } = useSWR(
    router.query.page
      ? `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&page=${router.query.page}&language=ja-JP&include_adult=false`
      : null,
    fetcher
  );

  return {
    movies,
    error,
    isLoading: !movies && !error,
  };
};
