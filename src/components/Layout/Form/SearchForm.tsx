import { useRouter } from "next/router";
import { useCallback, useState, VFC } from "react";
import {
  Grid,
  Select,
  MenuItem,
  Slider,
  Button,
  Typography,
  FormControl,
} from "@mui/material";
import { Loading } from "src/components/Layout/Loading";
import { useGenres } from "src/hooks/useGenres";

export const SearchForm: VFC = () => {
  const router = useRouter();
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState([1980, 2022]);
  const { genres, genresError, isLoading } = useGenres();
  const marks = [
    {
      value: 1980,
      label: "1980年",
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

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (genre) {
        router.push(
          `/search/movies?genre=${genre}&year_start=${year[0]}&year_end=${year[1]}&page=1`
        );
      }
    },
    [genre, year]
  );

  if (isLoading) {
    return <Loading />;
  }

  if (genresError) {
    return <div>{genresError.message}</div>;
  }

  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        columns={{ xs: 12, sm: 12, lg: 12 }}
        spacing={2}
        sx={{ mt: 1, mb: 4 }}
      >
        <Grid item xs={12} sm={5} lg={4} sx={{ m: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            ジャンル
          </Typography>
          <FormControl fullWidth>
            <Select
              id="select-genre"
              value={genre}
              onChange={handleChangeGenre}
            >
              {genres?.genres.map((genre: { id: number; name: string }) => {
                return (
                  <MenuItem key={genre.id} value={genre.id}>
                    {genre.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={5} lg={4} sx={{ mx: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            公開年 {year[0]}~{year[1]}年
          </Typography>
          <Slider
            max={2022}
            min={1980}
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
        <Grid item xs={12} sm={4}>
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
};
