import {
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
} from "@mui/material";

export const SortMenu = ({ sort, handleChangeSort }) => {
  return (
    <Grid container columns={{ xs: 4, sm: 12 }} sx={{ mt: 2, mb: 4 }}>
      <Grid item xs={4} sm={3}>
        <FormHelperText sx={{ fontWeight: "bold" }}>並び替え</FormHelperText>
        <FormControl fullWidth>
          <Select id="select-sort" onChange={handleChangeSort} value={sort}>
            <MenuItem value="popularity.desc">人気順</MenuItem>
            <MenuItem value="release_date.desc">公開日順</MenuItem>
            <MenuItem value="revenue.desc">興行収入が多い順</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
