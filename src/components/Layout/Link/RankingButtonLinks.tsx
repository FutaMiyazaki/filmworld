import NextLink from "next/link";
import { useRouter } from "next/router";
import { VFC } from "react";
import {
  Button,
  ButtonGroup,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { SORT_TYPES } from "src/utils/const";

export const RankingButtonLinks: VFC = () => {
  const router = useRouter();

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
        {SORT_TYPES.map(({ sort, text }) => {
          return (
            <NextLink
              key={sort}
              href={{
                pathname: "/movies",
                query: {
                  page: 1,
                  sort_type: sort,
                  year: router.query.year,
                  with_companies: router.query.company_id,
                  with_genres: router.query.genre_id,
                  with_people: router.query.cast_id,
                },
              }}
              passHref
            >
              <MuiLink underline="none">
                <Button
                  disabled={router.query.sort_type === sort}
                  sx={{ mr: 1, fontWeight: "bold" }}
                >
                  {text}
                </Button>
              </MuiLink>
            </NextLink>
          );
        })}
      </ButtonGroup>
    </>
  );
};
