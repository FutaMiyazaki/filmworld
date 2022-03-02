import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { FormHelperText, InputAdornment, TextField } from "@mui/material";

export const FilterByYear = ({ path }) => {
  const router = useRouter();
  const [year, setYear] = useState("");

  const handleChange = useCallback((e) => {
    setYear(e.target.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (year < 1950 || year > 2022) {
      return;
    }
    router.push(`${path}year=${year}&page=1`);
  });

  return (
    <>
      <FormHelperText sx={{ fontWeight: "bold" }}>
        年代で絞り込む(1950~2022年)
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
          placeholder="年代を入力してください"
          InputProps={{
            endAdornment: <InputAdornment position="start">年</InputAdornment>,
          }}
        />
      </form>
    </>
  );
};
