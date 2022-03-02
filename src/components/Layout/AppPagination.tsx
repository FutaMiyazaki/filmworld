import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { Grid, Pagination } from "@mui/material";

type AppPaginationProps = {
  path: string;
  totalPages: number;
};

export const AppPagination = (props: AppPaginationProps) => {
  const { path, totalPages } = props;
  const router = useRouter();
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const [page, setPage] = useState(Number(router.query.page));

  const handlePage = (e: {}, clickPage: number) => {
    setPage(clickPage);
    router.push(`${path}page=${clickPage}`);
  };

  useEffect(() => {
    setPage(Number(router.query.page));
  }, [router.query.year, router.query.sort]);

  return (
    <div>
      {totalPages == 1 ? null : (
        <Grid container justifyContent="center" spacing={1} sx={{ mt: 4 }}>
          <Pagination
            color="primary"
            count={totalPages}
            onChange={handlePage}
            page={page}
            shape="rounded"
            siblingCount={0}
            size="medium"
            variant="outlined"
          />
        </Grid>
      )}
    </div>
  );
};
