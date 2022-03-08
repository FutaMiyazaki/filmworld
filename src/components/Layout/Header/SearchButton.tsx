import { useRouter } from "next/router";
import { useState, useCallback, VFC } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

export const SearchButton: VFC = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [open, setOpen] = useState(false);

  const openDialog = useCallback(() => {
    setOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setOpen(false);
  }, []);

  const handleSearch = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (keyword.length === 0) {
        return;
      }
      setOpen(false);
      router.push(`/search/movies?keyword=${keyword}&page=1`);
    },
    [keyword]
  );

  const handleDeleteKeyword = useCallback(() => {
    setKeyword("");
  }, []);

  return (
    <>
      <IconButton
        color="primary"
        onClick={openDialog}
        sx={{ ml: "auto", display: "block" }}
      >
        <SearchIcon />
      </IconButton>
      <Dialog fullScreen open={open} onClose={closeDialog}>
        <DialogTitle>
          <Button
            onClick={closeDialog}
            variant="text"
            sx={{ ml: "auto", display: "block" }}
          >
            キャンセル
          </Button>
        </DialogTitle>
        <DialogContent>
          <form action="" onSubmit={handleSubmit}>
            <TextField
              autoFocus
              fullWidth
              id="mobile-header-form"
              onChange={handleSearch}
              placeholder="キーワードを入力"
              size="small"
              type="text"
              value={keyword}
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <CloseIcon fontSize="small" onClick={handleDeleteKeyword} />
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
