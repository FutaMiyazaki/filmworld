import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";

export const SortMenu = ({ path }) => {
  const router = useRouter();
  const [sort, setSort] = useState("popularity.desc");

  const handleChangeSort = useCallback(
    (e) => {
      const newSort = e.target.value;
      setSort(newSort);
      router.push(
        router.query.year
          ? `${path}&sort=${newSort}&year=${router.query.year}&page=1`
          : `${path}&sort=${newSort}&page=1`
      );
    },
    [sort]
  );

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
