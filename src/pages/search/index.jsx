import { Box, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { SearchMovies } from "src/components/Movies/SearchMovies";

export default function Search() {
  const router = useRouter();
  const query = router.query;

  return (
    <div>
      <Head>
        <title>{query.keyword} - Movie</title>
      </Head>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" color="primary" sx={{ display: "inline" }}>
          {query.keyword}
        </Typography>
        <Typography variant="h6" sx={{ display: "inline" }}>
          の検索結果:
        </Typography>
      </Box>
      <SearchMovies />
    </div>
  );
}
