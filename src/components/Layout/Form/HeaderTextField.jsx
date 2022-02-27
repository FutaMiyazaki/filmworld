import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { FormControl, InputAdornment, TextField } from "@mui/material/";
import SearchIcon from "@mui/icons-material/Search";

export const HeaderTextField = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const handleSearch = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (keyword.length === 0) {
      return;
    }
    router.push(`/search/movies?keyword=${keyword}&page=1`);
  });

  return (
    <form action="" onSubmit={handleSubmit}>
      <FormControl sx={{ width: "30vw" }}>
        <TextField
          id="header-form"
          type="text"
          value={keyword}
          onChange={handleSearch}
          size="small"
          placeholder="キーワードを入力"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </form>
  );
};
