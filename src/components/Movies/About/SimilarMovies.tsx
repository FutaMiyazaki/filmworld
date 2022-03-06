import { useSimilarMovies } from "src/hooks/useSimilarMovies";
import { Movies } from "src/components/Movies/index";

export const SimilarMovies = () => {
  const { similarMovies, error, isLoading } = useSimilarMovies();

  return (
    <Movies
      movies={similarMovies?.results}
      error={error}
      isLoading={isLoading}
      maxDisplay={10}
      path="/"
      totalPages={1}
    />
  );
};
