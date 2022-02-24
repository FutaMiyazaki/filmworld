import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { Grid, Typography } from "@mui/material";
import { AppPagination } from "src/components/Layout/AppPagination";
import { Loading } from "src/components/Layout/Loading";
import { MobileCard } from "src/components/Movies/Card/MobileCard";
import { PcCard } from "src/components/Movies/Card/Pccard";
import { PageHeading } from "src/components/Layout/PageHeading";
import { useGenres } from "src/hooks/useGenres";
import { useSearchMovies } from "src/hooks/useSearchMovie";

export function SearchResultsMovies() {
  const router = useRouter();
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const [genre, setGenre] = useState("");
  const { genres } = useGenres();
  const { movies, error, isLoading, isEmpty } = useSearchMovies();

  const genreSet = useEffect(() => {
    for (let i = 0; i < genres?.genres.length; i++) {
      if (genres?.genres[i].id == router.query.genre) {
        setGenre(genres?.genres[i].name);
      }
    }
  });

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
      {router.query.keyword ? (
        <PageHeading
          text={`${router.query.keyword}の検索結果 ${movies?.total_results}件`}
        />
      ) : (
        <PageHeading
          text={`${router.query.year_start}~${router.query.year_end}年に公開された${genre}のオススメ映画`}
        />
      )}
      <Grid
        container
        spacing={2}
        justifyContent="flex-start"
        columns={{ xs: 4, sm: 8 }}
      >
        {movies?.results.map((movie) => {
          return (
            movie.poster_path && (
              <Grid key={movie.id} item xs={4} sm={4}>
                {isMobileScreen ? (
                  <MobileCard movie={movie} />
                ) : (
                  <PcCard movie={movie} />
                )}
              </Grid>
            )
          );
        })}
      </Grid>
      <AppPagination
        movies={movies}
        path={
          router.query.keyword
            ? `/search/movies?keyword=${router.query.keyword}&`
            : `/search/movies?genre=${router.query.genre}&year_start=${router.query.year_start}&year_end=${router.query.year_end}&`
        }
      />
    </div>
  );
}
