import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useCastMovies = () => {
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.cast_id && router.query.page
      ? `https://api.themoviedb.org/3/discover/movie?api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&language=ja-JP&page=${router.query.page}&include_adult=false&with_people=${router.query.cast_id}`
      : null,
    fetcher
  );
  return {
    data,
    error,
    isLoading: !error && !data,
  };
};
