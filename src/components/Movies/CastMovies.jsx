import { useState } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { Grid, Pagination } from "@mui/material";
import { MobileCard } from "src/components/Movies/Card/MobileCard";
import { PcCard } from "src/components/Movies/Card/Pccard";

export function CastMovies({ movies }) {
  const router = useRouter();
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const [page, setPage] = useState(1);

  const handlePage = (e, clickPage) => {
    setPage((page) => clickPage);
    router.push(
      `/movies/cast?id=${router.query.id}&page=${clickPage}&sort=${router.query.sort}`
    );
  };

  return (
    <div>
      <Grid
        container
        spacing={2}
        justifyContent="flex-start"
        columns={{ xs: 4, sm: 8 }}
      >
        {movies?.results.map((movie) => {
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
      {movies?.total_pages == 1 ? null : (
        <Grid container justifyContent="center" spacing={1} sx={{ mt: 3 }}>
          <Pagination
            page={page}
            count={movies?.total_pages}
            variant="outlined"
            shape="rounded"
            color="primary"
            onChange={handlePage}
          />
        </Grid>
      )}
    </div>
  );
}
