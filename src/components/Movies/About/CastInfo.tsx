import NextLink from "next/link";
import { useState, VFC } from "react";
import {
  Box,
  Button,
  Collapse,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { InfoHeader } from "src/components/Movies/About/InfoHeader";

type CastData = {
  id: number;
  name: string;
}[];

type CastProps = {
  cast: CastData;
};

export const CastInfo: VFC<CastProps> = (props) => {
  const [open, setOpen] = useState(false);
  const { cast } = props;

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      {cast?.length ? (
        <Box>
          <InfoHeader text="出演者" />
          {cast?.map(({ id, name }, i: number) => {
            return i < 10 ? (
              <NextLink
                key={id}
                href={`/movies/cast?id=${id}&sort=popularity.desc&page=1`}
                passHref
              >
                <MuiLink underline="hover" sx={{ display: "inline-block" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      mr: 2,
                    }}
                  >
                    {name}
                  </Typography>
                </MuiLink>
              </NextLink>
            ) : null;
          })}
          {!open ? (
            <Button
              fullWidth
              onClick={handleOpen}
              size="small"
              sx={{ display: "block", mt: 1 }}
            >
              すべて表示
            </Button>
          ) : null}
          <Collapse in={open} timeout="auto" unmountOnExit>
            {cast?.map(({ id, name }, i: number) => {
              return i > 10 && i < 30 ? (
                <NextLink
                  key={id}
                  href={`/movies/cast?id=${id}&sort=popularity.desc&page=1`}
                  passHref
                >
                  <MuiLink underline="hover" sx={{ display: "inline-block" }}>
                    <Typography
                      variant="body2"
                      sx={{
                        mr: 2,
                      }}
                    >
                      {name}
                    </Typography>
                  </MuiLink>
                </NextLink>
              ) : null;
            })}
          </Collapse>
        </Box>
      ) : null}
    </>
  );
};
