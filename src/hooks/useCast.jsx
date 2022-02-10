import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useCast = () => {
  const router = useRouter();
  const { data: cast, error: castError } = useSWR(
    router.query.id
      ? `https://api.themoviedb.org/3/person/${router.query.id}?api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca&language=ja-JP`
      : null,
    fetcher
  );
  return {
    cast,
    error: castError,
  };
};
