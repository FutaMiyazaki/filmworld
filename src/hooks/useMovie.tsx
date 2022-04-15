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
  const { data: movieProviders, error: movieProvidersError } = useSWR(
    router.query.id
      ? `${API_URL}/movie/${router.query.id}/watch/providers?${API_KEY}`
      : null,
    fetcher
  );

  return {
    movieInfo,
    movieCredits,
    movieProviders,
    error: movieInfoError || movieCreditsError || movieProvidersError,
    isLoading:
      !movieInfo &&
      !movieCredits &&
      !movieProviders &&
      !movieInfoError &&
      !movieCreditsError &&
      !movieProvidersError,
  };
}
