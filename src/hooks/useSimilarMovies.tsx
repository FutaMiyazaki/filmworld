import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

export function useSimilarMovies() {
  const router = useRouter();

  const { data: similarMovies, error } = useSWR(
    router.query.id
      ? `https://api.themoviedb.org/3/movie/${router.query.id}/similar?api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&language=ja-JP`
      : null,
    fetcher
  );

  return {
    similarMovies,
    error,
    isLoading: !similarMovies && !error,
  };
}
