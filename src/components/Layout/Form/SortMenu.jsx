import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";

export const SortMenu = ({ path }) => {
  const router = useRouter();
  const [sort, setSort] = useState("popularity.desc");

  const MenuItems = [
    { text: "人気順", value: "popularity.desc" },
    { text: "公開日順", value: "release_date.desc" },
    { text: "興行収入が多い順", value: "revenue.desc" },
    { text: "評価数が多い順", value: "vote_count.desc" },
  ];

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
          {MenuItems.map(({ text, value }) => {
            return (
              <MenuItem key={text} value={value}>
                {text}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
};
