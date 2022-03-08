import { useRouter } from "next/router";
import { useCallback, useState, VFC } from "react";
import { FormControl, InputAdornment, TextField } from "@mui/material/";
import SearchIcon from "@mui/icons-material/Search";

export const HeaderTextField: VFC = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const handleSearch = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (keyword.length < 30) {
        router.push(`/search/movies?keyword=${keyword}&page=1`);
      }
    },
    [keyword]
  );

  return (
    <form action="" onSubmit={handleSubmit}>
      <FormControl sx={{ width: "25vw" }}>
        <TextField
          autoFocus
          id="header-form"
          onChange={handleSearch}
          placeholder="キーワードを入力"
          size="small"
          type="text"
          variant="outlined"
          value={keyword}
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
