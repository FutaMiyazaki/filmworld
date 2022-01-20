import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useSearchMovies = () => {
  const router = useRouter();
  const query = router.query;
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/search/movie?api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&query=${query.keyword}&language=ja-JP&page=1&include_adult=false`,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};
