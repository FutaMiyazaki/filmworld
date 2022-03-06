import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { VFC } from "react";
import { Grid, Pagination } from "@mui/material";

type AppPaginationProps = {
  path: string;
  totalPages: number;
};

export const AppPagination: VFC<AppPaginationProps> = (props) => {
  const { path, totalPages } = props;
  const router = useRouter();
  const [page, setPage] = useState(Number(router.query.page));

  const handlePage = (e: {}, clickPage: number) => {
    setPage(clickPage);
    router.push(`${path}page=${clickPage}`);
  };

  useEffect(() => {
    setPage(Number(router.query.page));
  }, [router.query]);

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
