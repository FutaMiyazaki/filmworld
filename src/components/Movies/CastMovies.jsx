import { useState } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { Grid, Pagination } from "@mui/material";
import { Loading } from "src/components/Layout/Loading";
import { MobileCard } from "src/components/Movies/Card/MobileCard";
import { PcCard } from "src/components/Movies/Card/Pccard";
import { useCastMovies } from "src/hooks/useCastMovies";
import { PageHeading } from "src/components/Layout/PageHeading";

export function CastMovies() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const { data, error, isLoading } = useCastMovies();
  const [page, setPage] = useState(1);

  const router = useRouter();

  const handlePage = (e, clickPage) => {
    setPage((page) => clickPage);
    router.push(
      `/movies/cast?cast_id=${router.query.cast_id}&page=${clickPage}`
    );
  };

  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <PageHeading text="xxが出演している映画" />
      <Grid
        container
        spacing={2}
        justifyContent="center"
        columns={{ xs: 4, sm: 8 }}
      >
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
      <Grid container justifyContent="center" spacing={1} sx={{ mt: 3 }}>
        <Pagination
          count={data.total_pages}
          variant="outlined"
          shape="rounded"
          color="primary"
          size={isMobileScreen ? "small" : "medium"}
          onChange={handlePage}
        />
      </Grid>
    </div>
  );
}
