import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import {
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import { Loading } from "src/components/Layout/Loading";
import { PageHeading } from "src/components/Layout/PageHeading";
import { MobileCard } from "src/components/Movies/Card/MobileCard";
import { PcCard } from "src/components/Movies/Card/Pccard";
import { useCastMovies } from "src/hooks/useCastMovies";

export function CastMovies() {
  const router = useRouter();
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("popularity.desc");
  const { movies, cast, error, isLoading } = useCastMovies();

  const handlePage = (e, clickPage) => {
    setPage((page) => clickPage);
    router.push(
      `/movies/cast?id=${router.query.id}&page=${clickPage}&sort=${router.query.sort}`
    );
  };

  const handleChange = useCallback(
    (e) => {
      const newSort = e.target.value;
      setSort(newSort);
      router.push(`/movies/cast?id=${router.query.id}&page=1&sort=${newSort}`);
    },
    [sort]
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <PageHeading primaryText={cast?.name} text="が出演している映画" />
      <Grid
        container
        justifyContent="flex-end"
        xs={12}
        sm={12}
        sx={{ mt: 2, mb: 4 }}
      >
        <Grid item xs="12" sm="4">
          <FormControl fullWidth>
            <Select
              labelId="select-sort-label"
              id="select-sort"
              value={sort}
              label="Sort"
              onChange={handleChange}
            >
              <MenuItem value="popularity.desc">人気順</MenuItem>
              <MenuItem value="release_date.desc">公開日</MenuItem>
              <MenuItem value="revenue.desc">興行収入</MenuItem>
            </Select>
            <FormHelperText>ソート順</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
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
      <Grid container justifyContent="center" spacing={1} sx={{ mt: 3 }}>
        <Pagination
          count={movies?.total_pages}
          variant="outlined"
          shape="rounded"
          color="primary"
          onChange={handlePage}
        />
      </Grid>
    </div>
  );
}
