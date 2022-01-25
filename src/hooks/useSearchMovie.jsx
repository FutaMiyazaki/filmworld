import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useSearchMovies = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    router.query.page && router.query.keyword
      ? `https://api.themoviedb.org/3/search/movie?api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&page=${router.query.page}&query=${router.query.keyword}&language=ja-JP&include_adult=false`
      : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};
