import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export function useMovie() {
  const router = useRouter();

  const { data: movieInfo, error: movieInfoError } = useSWR(
    router.query.id
      ? `https://api.themoviedb.org/3/movie/${router.query.id}?api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&language=ja-JP`
      : null,
    fetcher
  );

  const { data: movieCredits, error: movieCreditsError } = useSWR(
    router.query.id
      ? `https://api.themoviedb.org/3/movie/${router.query.id}/credits?api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&language=ja-JP`
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
