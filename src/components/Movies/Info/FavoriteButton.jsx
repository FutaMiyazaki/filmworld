import { useState, useCallback, useEffect } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export function FavoriteButton(props) {
  const [nowFavoMovies, setNowFavoMovies] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const storageKey = "favoMovies";

  useEffect(() => {
    const storage = localStorage.getItem(storageKey);
    setNowFavoMovies(JSON.parse(storage));
  }, []);

  useEffect(() => {
    const existsIndex = nowFavoMovies.findIndex(
      (movie) => movie.id == props?.id
    );
    existsIndex == -1 ? setFavorite(false) : setFavorite(true);
  }, [nowFavoMovies]);

  const addFavorite = useCallback(() => {
    if (nowFavoMovies) {
      const exists = nowFavoMovies.findIndex((movie) => movie.id == props?.id);
      if (exists == -1) {
        const newFavoMovies = [
          ...nowFavoMovies,
          { id: props?.id, title: props?.title },
        ];
        const setJson = JSON.stringify(newFavoMovies);
        localStorage.setItem(storageKey, setJson);
        setNowFavoMovies(newFavoMovies);
      }
    } else {
      const newFavoMovies = new Array({ id: props?.id, title: props?.title });
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
  }, [nowFavoMovies]);

  return (
    <div>
      {favorite ? (
        <Button
          fullWidth
          variant="outlined"
          onClick={removeFavorite}
          sx={{ fontWeight: "bold" }}
        >
          登録済み
        </Button>
      ) : (
        <Button
          fullWidth
          variant="contained"
          onClick={addFavorite}
          startIcon={<AddIcon />}
          sx={{ fontWeight: "bold" }}
        >
          観たい!
        </Button>
      )}
    </div>
  );
}
