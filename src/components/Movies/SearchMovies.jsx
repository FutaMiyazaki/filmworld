import { useState } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { Grid, Pagination, Typography } from "@mui/material";
import { Loading } from "src/components/Layout/Loading";
import { MobileCard } from "src/components/Movies/Card/MobileCard";
import { PcCard } from "src/components/Movies/Card/Pccard";
import { useSearchMovies } from "src/hooks/useSearchMovie";

export function SearchMovies() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const router = useRouter();
  const [page, setPage] = useState(1);
  const { data, error, isLoading, isEmpty } = useSearchMovies();

  const handlePage = (e, clickPage) => {
    setPage((page) => clickPage);
    router.push(`/search?keyword=${router.query.keyword}&page=${clickPage}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>見つかりませんでした</div>;
  }

  return (
    <div>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        columns={{ xs: 4, sm: 8 }}
      >
        <Grid item xs={4} sm={8} sx={{ mb: 2 }}>
          <Typography
            variant="h5"
            color="primary"
            sx={{ display: "inline", fontWeight: "bold" }}
          >
            {router.query.keyword}
          </Typography>
          <Typography
            variant="h6"
            sx={{ display: "inline", fontWeight: "bold" }}
          >
            の検索結果:{data.total_results}件
          </Typography>
        </Grid>
        {data.results.map((movie) => {
          return (
            <Grid key={movie.id} item xs={4} sm={4}>
              {isMobileScreen ? (
                <MobileCard movie={movie} />
              ) : (
                <PcCard movie={movie} />
              )}
            </Grid>
          );
        })}
      </Grid>
      {data.total_pages === 1 ? null : (
        <Grid container justifyContent="center" spacing={1} sx={{ mt: 4 }}>
          <Pagination
            count={data.total_pages}
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
