import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import {
  Grid,
  Select,
  MenuItem,
  NativeSelect,
  Slider,
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
        spacing={2}
        sx={{ mt: 1, mb: 4 }}
      >
        <Grid item xs="12" sm="4" sx={{ m: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            ジャンル
          </Typography>
          <FormControl fullWidth>
            {isMobileScreen ? (
              <NativeSelect
                id="select-genre-mobile"
                defaultValue=""
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
                id="select-genre-pc"
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
        <Grid item xs="12" sm="4" sx={{ mx: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            公開年 {year[0]}~{year[1]}年
          </Typography>
          <Slider
            max={2022}
            min={1950}
            value={year}
            onChange={handleChangeYear}
            valueLabelDisplay="auto"
            marks={marks}
          />
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
