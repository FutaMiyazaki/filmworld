import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useGenreMovies = () => {
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.with
      ? `https://api.themoviedb.org/3/discover/movie?api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&language=ja-JP&page=1&include_adult=false&with_genres=${router.query.with}`
      : null,
    fetcher
  );
  return {
    data,
    error,
    isLoading: !error && !data,
  };
};
