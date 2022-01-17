import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useMovie = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    router.query.id
      ? `https://api.themoviedb.org/3/movie/${router.query.id}?api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&language=jp-JP`
      : null,
    fetcher
  );
  return {
    data,
    error,
    isLoading: !error && !data,
  };
};
