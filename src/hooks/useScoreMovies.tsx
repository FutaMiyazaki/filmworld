import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useScoreMovies = () => {
  const router = useRouter();
  const { data: movies, error } = useSWR(
    router.query.page
      ? router.query.year
        ? `https://api.themoviedb.org/3/discover/movie?sort_by=vote_count.desc&api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&page=${router.query.page}&year=${router.query.year}&language=ja-JP&include_adult=false&region=JP`
        : `https://api.themoviedb.org/3/discover/movie?sort_by=vote_count.desc&api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&page=${router.query.page}&language=ja-JP&include_adult=false&region=JP`
      : null,
    fetcher
  );

  return {
    movies,
    error,
    isLoading: !movies && !error,
  };
};
