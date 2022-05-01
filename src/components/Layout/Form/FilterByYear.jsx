import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { FormHelperText, InputAdornment, TextField } from "@mui/material";

export const FilterByYear = () => {
  const router = useRouter();
  const [year, setYear] = useState("");

  const handleChange = useCallback((e) => {
    setYear(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (year < 1950 || year > 2022) {
        return;
      }
      router.push({
        pathname: "/movies",
        query: {
          page: 1,
          sort_type: router.query.sort_type,
          year: year,
          company_id: router.query.company_id,
          genre_id: router.query.genre_id,
          cast_id: router.query.cast_id,
        },
      });
    },
    [year]
  );

  return (
    <>
      <FormHelperText sx={{ fontWeight: "bold" }}>
        公開年 (1950~2022年)
      </FormHelperText>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          size="small"
          id="filter-by-year"
          type="number"
          value={year}
          onChange={handleChange}
          error={year && (year < 1950 || year > 2022) ? true : false}
          variant="outlined"
          InputProps={{
            endAdornment: <InputAdornment position="start">年</InputAdornment>,
          }}
        />
      </form>
    </>
  );
};
