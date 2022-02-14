import { useState } from "react";
import { useRouter } from "next/router";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { MobileTemporaryDrawer } from "src/components/Layout/MobileTemporaryDrawer";

export function BottomNavi() {
  const router = useRouter();
  const [value, setValue] = useState("");

  return (
    <div>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: { xs: "block", sm: "none" },
        }}
        elevation={20}
      >
        <BottomNavigation
          showLabels
          value={value}
          sx={{ bgcolor: "#2D2D2D" }}
          onChange={async (event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="ホーム"
            icon={<HomeIcon />}
            value="home"
            onClick={() => {
              router.push("/");
            }}
          />
          <BottomNavigationAction
            label="見つける"
            icon={<SearchIcon />}
            onClick={() => {
              router.push("/search");
            }}
            value="search"
          />
          <BottomNavigationAction
            label="ライブラリ"
            icon={<VideoLibraryIcon />}
            value="favorite"
            onClick={() => {
              router.push("/favorite");
            }}
          />
          <BottomNavigationAction
            label="メニュー"
            icon={<MobileTemporaryDrawer />}
            value="menu"
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
}
