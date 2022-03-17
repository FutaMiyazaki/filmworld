import { useRouter } from "next/router";
import useSWR from "swr";
import { API_KEY, API_URL } from "src/utils/const";
import { fetcher } from "src/utils/fetcher";

export function useMovie() {
  const router = useRouter();
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
