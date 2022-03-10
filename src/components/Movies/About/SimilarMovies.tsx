import { useSimilarMovies } from "src/hooks/useSimilarMovies";
import { Movies } from "src/components/Movies/index";

export const SimilarMovies = () => {
  const { similarMovies, error, isLoading } = useSimilarMovies();

  return (
    <Movies
      movies={similarMovies?.results}
      error={error}
      gridSm={3}
      gridXs={1}
      isLoading={isLoading}
      maxDisplay={12}
      path="/"
      totalPages={1}
    />
  );
};
