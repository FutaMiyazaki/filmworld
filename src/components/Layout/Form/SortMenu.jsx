import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";

export const SortMenu = ({ sort, handleChangeSort }) => {
  return (
    <>
        <FormHelperText sx={{ fontWeight: "bold" }}>並び替え</FormHelperText>
        <FormControl fullWidth>
          <Select
            id="select-sort"
            onChange={handleChangeSort}
            size="small"
            value={sort}
          >
            <MenuItem value="popularity.desc">人気順</MenuItem>
            <MenuItem value="release_date.desc">公開日順</MenuItem>
            <MenuItem value="revenue.desc">興行収入が多い順</MenuItem>
          </Select>
        </FormControl>
    </>
  );
};
