import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { VFC } from "react";
import { useMediaQuery } from "react-responsive";
import { Grid, Pagination } from "@mui/material";

type AppPaginationProps = {
  path: string;
  totalPages: number;
};

export const AppPagination: VFC<AppPaginationProps> = (props) => {
  const { path, totalPages } = props;
  const router = useRouter();
  const [page, setPage] = useState(Number(router.query.page));
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  const handlePage = (e: {}, clickPage: number) => {
    setPage(clickPage);
    router.push({
      pathname: path,
      query: {
        page: clickPage,
        sort_type: router.query.sort_type,
        year: router.query.year,
        company_id: router.query.company_id,
        genre_id: router.query.genre_id,
        cast_id: router.query.cast_id,
        keyword: router.query.keyword,
      },
    });
  };

  useEffect(() => {
    setPage(Number(router.query.page));
  }, [router.query]);

  return (
    <div>
      {totalPages < 2 ? null : (
        <Grid container justifyContent="center" spacing={1} sx={{ mt: 4 }}>
          <Pagination
            color="primary"
            count={totalPages > 100 ? 100 : totalPages}
            onChange={handlePage}
            page={page}
            shape="rounded"
            siblingCount={isMobileScreen ? 0 : 1}
            size={isMobileScreen ? "medium" : "large"}
            variant="outlined"
          />
        </Grid>
      )}
    </div>
  );
};
