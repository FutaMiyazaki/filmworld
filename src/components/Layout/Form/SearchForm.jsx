import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import {
  Grid,
  Select,
  MenuItem,
  NativeSelect,
  Slider,
  Box,
  Button,
  Typography,
  FormControl,
} from "@mui/material";
import { useGenres } from "src/hooks/useGenres";
import { useMediaQuery } from "react-responsive";

export function SearchForm() {
  const router = useRouter();
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const { genres, genresError, isLoading } = useGenres();
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState([1950, 2022]);
  const marks = [
    {
      value: 1950,
      label: "1950年",
    },
    {
      value: 2022,
      label: "2022年",
    },
  ];

  const handleChangeGenre = useCallback((e) => {
    setGenre(e.target.value);
  }, []);

  const handleChangeYear = useCallback((e, newYear) => {
    setYear(newYear);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (genre) {
      router.push(
        `/search/movies?genre=${genre}&year_start=${year[0]}&year_end=${year[1]}&page=1`
      );
    }
  });

  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        columns={{ xs: 12, sm: 12 }}
        spacing={4}
        sx={{ mt: 2, mb: 4 }}
      >
        <Grid item xs="12" sm="4" sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 3 }}>
            ジャンル
          </Typography>
          <FormControl fullWidth>
            {isMobileScreen ? (
              <NativeSelect
                id="select-genre"
                value={genre}
                onChange={handleChangeGenre}
              >
                {genres?.genres.map((genreData) => {
                  return (
                    <option key={genreData.id} value={genreData.id}>
                      {genreData.name}
                    </option>
                  );
                })}
              </NativeSelect>
            ) : (
              <Select
                id="select-genre"
                value={genre}
                onChange={handleChangeGenre}
              >
                {genres?.genres.map((genreData) => {
                  return (
                    <MenuItem key={genreData.id} value={genreData.id}>
                      {genreData.name}
                    </MenuItem>
                  );
                })}
              </Select>
            )}
          </FormControl>
        </Grid>
        <Grid item xs="12" sm="4">
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 3 }}>
            公開年
          </Typography>
          <Box sx={{ width: isMobileScreen ? "80vw" : "30vw" }}>
            <Slider
              max={2022}
              min={1950}
              value={year}
              onChange={handleChangeYear}
              valueLabelDisplay="auto"
              marks={marks}
              sx={{ ml: 3 }}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        columns={{ xs: 12, sm: 12 }}
        sx={{ mt: 2, mb: 4 }}
      >
        <Grid item xs="12" sm="4">
          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            disabled={genre == ""}
          >
            検索する
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
