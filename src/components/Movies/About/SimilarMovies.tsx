import { useSimilarMovies } from "src/hooks/useSimilarMovies";
import { MovieList } from "src/components/Movies/MovieList";

export const SimilarMovies = () => {
  const { similarMovies, error, isLoading } = useSimilarMovies();

  return (
    <MovieList
      movies={similarMovies?.results}
      error={error}
      gridLg={5}
      gridSm={3}
      gridXs={1}
      isLoading={isLoading}
      maxDisplay={15}
      path="/"
      totalPages={1}
    />
  );
};
