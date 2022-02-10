import { useState } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { Grid, Pagination } from "@mui/material";

export function AppPagination({ movies }) {
  const router = useRouter();
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const [page, setPage] = useState(Number(router.query.page));

  const handlePage = (e, clickPage) => {
    setPage((page) => clickPage);
    router.push(
      `/movies/cast?id=${router.query.id}&page=${clickPage}&sort=${router.query.sort}`
    );
  };

  return (
    <div>
      {movies?.total_pages == 1 ? null : (
        <Grid container justifyContent="center" spacing={1} sx={{ mt: 4 }}>
          <Pagination
            page={page}
            count={movies?.total_pages}
            variant="outlined"
            shape="rounded"
            color="primary"
            size={isMobileScreen ? "small" : "medium"}
            onChange={handlePage}
          />
        </Grid>
      )}
    </div>
  );
}
