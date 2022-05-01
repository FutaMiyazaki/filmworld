import { useRouter } from "next/router";
import useSWR from "swr";
import { API_KEY, API_URL } from "src/utils/const";
import { fetcher } from "src/utils/fetcher";

export const useCast = () => {
  const router = useRouter();
  const { data: cast, error: castError } = useSWR(
    router.query.cast_id
      ? `${API_URL}/person/${router.query.cast_id}?${API_KEY}&language=ja-JP`
      : null,
    fetcher
  );
  return {
    cast,
    error: castError,
  };
};
