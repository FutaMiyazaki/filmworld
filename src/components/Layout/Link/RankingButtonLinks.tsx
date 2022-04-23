import { useRouter } from "next/router";
import { VFC } from "react";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { AppLink } from "src/components/Layout/Link/AppLink";

type ButtonItems = {
  path: string;
  text: string;
}[];

export const RankingButtonLinks: VFC = () => {
  const router = useRouter();
  const buttonItems: ButtonItems = [
    {
      path: "/movies/popular?page=1",
      text: "人気",
    },
    {
      path: "/movies/revenue?page=1",
      text: "興行収入",
    },
    {
      path: "/movies/topic?page=1",
      text: "レビュー数",
    },
  ];

  return (
    <>
      <Typography
        color="#FFFFFFB3"
        variant="caption"
        sx={{ fontWeight: "bold" }}
      >
        並べ替え：
      </Typography>
      <ButtonGroup variant="text">
        {buttonItems.map(({ path, text }) => {
          return (
            <AppLink key={path} path={path} underline="none">
              <Button
                disabled={`${router.pathname}?page=1` === path}
                sx={{ mr: 1, fontWeight: "bold" }}
              >
                {text}
              </Button>
            </AppLink>
          );
        })}
      </ButtonGroup>
    </>
  );
};
