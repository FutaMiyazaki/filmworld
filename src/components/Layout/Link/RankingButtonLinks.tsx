import NextLink from "next/link";
import { useRouter } from "next/router";
import { VFC } from "react";
import { useMediaQuery } from "react-responsive";
import { Box, Button, ButtonGroup, Link as MuiLink } from "@mui/material";

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
      mobileText: "話題の映画",
    },
  ];

  return (
    <Box sx={{ mt: 1, mb: 2 }}>
      <ButtonGroup size="large" sx={{ display: "inline" }}>
        {buttonItems.map(({ path, text, mobileText }) => {
          return (
            <NextLink key={path} href={path} passHref>
              <MuiLink underline="none">
                <Button
                  disabled={`${router.pathname}?page=1` === path}
                  variant="text"
                  sx={{ mr: 1, fontWeight: "bold" }}
                >
                  {isMobileScreen ? mobileText : text}
                </Button>
              </MuiLink>
            </NextLink>
          );
        })}
      </ButtonGroup>
    </Box>
  );
};
