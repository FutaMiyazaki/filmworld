import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { InputAdornment, TextField } from "@mui/material/";
import SearchIcon from "@mui/icons-material/Search";

export function HeaderTextField() {
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
    router.push(`/search?keyword=${keyword}`);
  });

  return (
    <form action="" onSubmit={handleSubmit}>
      <TextField
        id="header-form"
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
    </form>
  );
}
