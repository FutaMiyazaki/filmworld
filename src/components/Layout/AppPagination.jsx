import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { Grid, Pagination } from "@mui/material";

export const AppPagination = ({ movies, path }) => {
  const router = useRouter();
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const [page, setPage] = useState(Number(router.query.page));

  const handlePage = (e, clickPage) => {
    setPage(clickPage);
    router.push(`${path}page=${clickPage}`);
  };

  useEffect(() => {
    setPage(1);
  }, [router.query.year]);

  return (
    <div>
      {movies?.total_pages == 1 ? null : (
        <Grid container justifyContent="center" spacing={1} sx={{ mt: 4 }}>
          <Pagination
            page={page}
            count={movies?.total_pages}
            shape="rounded"
            variant="outlined"
            color="primary"
            size="medium"
            onChange={handlePage}
          />
        </Grid>
      )}
    </div>
  );
};
