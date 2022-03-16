import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useCast = () => {
  const router = useRouter();
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca";

  const { data: cast, error: castError } = useSWR(
    router.query.id
      ? `${API_URL}/person/${router.query.id}?${API_KEY}&language=ja-JP`
      : null,
    fetcher
  );
  return {
    cast,
    error: castError,
  };
};
