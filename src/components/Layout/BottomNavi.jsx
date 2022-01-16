import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material/";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";

export function BottomNavi() {
  const router = useRouter();
  const [value, setValue] = useState(router.pathname.slice(1) || "./");

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        sx={{ bgcolor: "#0A192A" }}
        onChange={async (event, newValue) => {
          setValue(newValue);
          router.push(newValue);
        }}
      >
        <BottomNavigationAction label="ホーム" icon={<HomeIcon />} value="/" />
        <BottomNavigationAction
          label="検索"
          icon={<SearchIcon />}
          value="posts"
        />
        <BottomNavigationAction
          label="お気に入り"
          icon={<StarIcon />}
          value="favorite"
        />
      </BottomNavigation>
    </Paper>
  );
}
