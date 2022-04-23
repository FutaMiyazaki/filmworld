import { useRouter } from "next/router";
import { VFC } from "react";
import { useMediaQuery } from "react-responsive";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { AppLink } from "src/components/Layout/Link/AppLink";

type ButtonItems = {
  path: string;
  text: string;
  mobileText: string;
}[];

export const RankingButtonLinks: VFC = () => {
  const router = useRouter();
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const buttonItems: ButtonItems = [
    {
      path: "/movies/popular?page=1",
      text: "人気ランキング",
      mobileText: "人気",
    },
    {
      path: "/movies/revenue?page=1",
      text: "興行収入ランキング",
      mobileText: "興行収入",
    },
    {
      path: "/movies/topic?page=1",
      text: "話題の映画ランキング",
      mobileText: "話題",
    },
  ];

  return (
    <>
      <Typography
        color="#FFFFFFB3"
        variant="caption"
        sx={{ fontWeight: "bold" }}
      >
        並び替え：
      </Typography>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <ButtonGroup size={isMobileScreen ? "small" : "medium"} variant="text">
          {buttonItems.map(({ path, text, mobileText }) => {
            return (
              <AppLink key={path} path={path} underline="none">
                <Button
                  disabled={`${router.pathname}?page=1` === path}
                  sx={{ mr: 1, fontWeight: "bold" }}
                >
                  {isMobileScreen ? mobileText : text}
                </Button>
              </AppLink>
            );
          })}
        </ButtonGroup>
      </Box>
    </>
  );
};
