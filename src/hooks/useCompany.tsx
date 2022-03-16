import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useCompany = () => {
  const router = useRouter();
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "api_key=a9f5f6a6a7d86b9c7a665290b1dc19ca";
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
