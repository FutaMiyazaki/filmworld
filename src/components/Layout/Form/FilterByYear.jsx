import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { FormHelperText, Grid, InputAdornment, TextField } from "@mui/material";

export function FilterByYear() {
  const router = useRouter();
  const [year, setYear] = useState();

  const handleChange = useCallback((e) => {
    setYear(e.target.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (year < 1950 || year > 2022) {
      return;
    }
    router.push(`/movies/popular?page=1&year=${year}`);
  });

  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="center"
      columns={{ xs: 12, sm: 12 }}
      sx={{ mt: 2, mb: 4 }}
    >
      <Grid item xs="12" sm="3">
        <FormHelperText sx={{ fontWeight: "bold" }}>
          年代で絞り込む
        </FormHelperText>
        <form action="" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            size="small"
            id="filter-by-year"
            type="number"
            value={year}
            onChange={handleChange}
            error={year < 1950 || year > 2022 ? true : false}
            variant="outlined"
            placeholder="年代を入力してください"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">年</InputAdornment>
              ),
            }}
          />
        </form>
      </Grid>
    </Grid>
  );
}
