import { useState, useCallback, useEffect } from "react";
import NextLink from "next/link";
import {
  IconButton,
  Link as MuiLink,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export function FavoriteMovies(props) {
  const [nowFavoMovies, setNowFavoMovies] = useState([]);
  const storageKey = "favoMovies";

  useEffect(() => {
    const storage = localStorage.getItem(storageKey);
    setNowFavoMovies(JSON.parse(storage));
  }, []);

  // 今後保存した映画を削除する関数を追加予定
  // const removeFavorite = useCallback(
  //   (movieId) => {
  //     if (nowFavoMovies) {
  //       const newFavoMovies = nowFavoMovies.filter(
  //         (movie) => movie.id != movieId
  //       );
  //       const setJson = JSON.stringify(newFavoMovies);
  //       localStorage.setItem(storageKey, setJson);
  //       setNowFavoMovies(newFavoMovies);
  //     }
  //   },
  //   [nowFavoMovies]
  // );

  return (
    <List>
      {nowFavoMovies.map((movie) => {
        return (
          <ListItem
            disablePadding
            key={movie.id}
            // secondaryAction={
            //   <IconButton edge="end" onClick={removeFavorite(movie.id)}>
            //     <DeleteOutlineIcon />
            //   </IconButton>
            // }
          >
            <NextLink href={`/movies/${movie.id}`} passHref>
              <MuiLink underline="none" color="white">
                <ListItemButton>
                  <ListItemText>{movie.title}</ListItemText>
                </ListItemButton>
              </MuiLink>
            </NextLink>
          </ListItem>
        );
      })}
    </List>
  );
}
