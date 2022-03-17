import { useRouter } from "next/router";
import useSWR from "swr";
import { API_KEY, API_URL } from "src/utils/const";
import { fetcher } from "src/utils/fetcher";

export const useCompany = () => {
  const router = useRouter();
  const { data: company, error: companyError } = useSWR(
    router.query.id
      ? `${API_URL}/company/${router.query.id}?${API_KEY}&language=ja-JP`
      : null,
    fetcher
  );
  return {
    company,
    error: companyError,
  };
};
