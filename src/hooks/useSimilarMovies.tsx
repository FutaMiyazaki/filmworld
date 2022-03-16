import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

export function useSimilarMovies() {
  const router = useRouter();
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca";

  const { data: similarMovies, error } = useSWR(
    router.query.id
      ? `${API_URL}/movie/${router.query.id}/similar?${API_KEY}&language=ja-JP`
      : null,
    fetcher
  );

  return {
    similarMovies,
    error,
    isLoading: !similarMovies && !error,
  };
}
