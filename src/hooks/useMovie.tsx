import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export function useMovie() {
  const router = useRouter();
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca";

  const { data: movieInfo, error: movieInfoError } = useSWR(
    router.query.id
      ? `${API_URL}/movie/${router.query.id}?${API_KEY}&language=ja-JP`
      : null,
    fetcher
  );

  const { data: movieCredits, error: movieCreditsError } = useSWR(
    router.query.id
      ? `${API_URL}/movie/${router.query.id}/credits?${API_KEY}&language=ja-JP`
      : null,
    fetcher
  );

  return {
    movieInfo,
    movieCredits,
    error: movieInfoError || movieCreditsError,
    isLoading:
      !movieInfo && !movieCredits && !movieInfoError && !movieCreditsError,
  };
}
