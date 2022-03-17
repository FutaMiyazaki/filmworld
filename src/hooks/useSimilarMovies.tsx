import { useRouter } from "next/router";
import useSWR from "swr";
import { API_KEY, API_URL } from "src/utils/const";
import { fetcher } from "src/utils/fetcher";

export function useSimilarMovies() {
  const router = useRouter();
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
