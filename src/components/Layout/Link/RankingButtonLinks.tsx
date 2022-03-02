import NextLink from "next/link";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import {
  Box,
  Button,
  ButtonGroup,
  Link as MuiLink,
  Typography,
} from "@mui/material";

type ButtonItems = {
  path: string;
  text: string;
  mobileText: string;
}[];

export const RankingButtonLinks = () => {
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
      path: "/movies/score?page=1",
      text: "評価数ランキング",
      mobileText: "評価数",
    },
  ];

  return (
    <Box sx={{ mt: 1, mb: 2 }}>
      <Typography variant="subtitle1" sx={{ display: "inline", mr: 2 }}>
        並び替え
      </Typography>
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
