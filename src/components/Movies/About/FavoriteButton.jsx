import { useState, useCallback, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

export const FavoriteButton = (props) => {
  const [nowFavoMovies, setNowFavoMovies] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [open, setOpen] = useState(false);
  const storageKey = "favoMovies";
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  useEffect(() => {
    const storage = localStorage.getItem(storageKey);
    setNowFavoMovies(JSON.parse(storage));
  }, []);

  useEffect(() => {
    if (nowFavoMovies) {
      const existsIndex = nowFavoMovies.findIndex(
        (movie) => movie.id == props?.id
      );
      existsIndex == -1 ? setFavorite(false) : setFavorite(true);
    }
  }, [nowFavoMovies]);

  const addFavorite = useCallback(() => {
    if (nowFavoMovies) {
      if (nowFavoMovies.length == 20) {
        window.alert("保存できる映画の数は20個までです");
      } else {
        const exists = nowFavoMovies.findIndex(
          (movie) => movie.id == props?.id
        );
        if (exists == -1) {
          const newFavoMovies = [
            ...nowFavoMovies,
            {
              id: props?.id,
              title: props?.title,
              poster_path: props?.poster_path,
            },
          ];
          const setJson = JSON.stringify(newFavoMovies);
          localStorage.setItem(storageKey, setJson);
          setNowFavoMovies(newFavoMovies);
        }
      }
    } else {
      const newFavoMovies = new Array({
        id: props?.id,
        title: props?.title,
        poster_path: props?.poster_path,
      });
      const setJson = JSON.stringify(newFavoMovies);
      localStorage.setItem(storageKey, setJson);
      setNowFavoMovies(newFavoMovies);
    }
  }, [nowFavoMovies]);

  const removeFavorite = useCallback(() => {
    if (nowFavoMovies) {
      const exists = nowFavoMovies.findIndex((movie) => movie.id == props?.id);
      if (exists != -1) {
        const newFavoMovies = nowFavoMovies.filter(
          (movie) => movie.id != props.id
        );
        const setJson = JSON.stringify(newFavoMovies);
        localStorage.setItem(storageKey, setJson);
        setNowFavoMovies(newFavoMovies);
      }
    }
    setOpen(false);
  }, [nowFavoMovies]);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      {favorite ? (
        <Button
          fullWidth={isMobileScreen}
          variant="outlined"
          onClick={handleClickOpen}
          sx={{ fontWeight: "bold" }}
        >
          登録済み
        </Button>
      ) : (
        <Button
          fullWidth={isMobileScreen}
          variant="contained"
          onClick={addFavorite}
          startIcon={<LibraryAddIcon />}
          sx={{ fontWeight: "bold" }}
        >
          観たい!
        </Button>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ウォッチリストから削除しますか？</DialogTitle>
        <DialogActions>
          <Button
            autoFocus
            fullWidth
            variant="contained"
            onClick={removeFavorite}
          >
            削除する
          </Button>
        </DialogActions>
        <DialogActions sx={{ mb: 2 }}>
          <Button fullWidth variant="outlined" onClick={handleClose}>
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
