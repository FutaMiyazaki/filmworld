import NextLink from "next/link";
import { VFC } from "react";
import { Box, Link as MuiLink, Typography } from "@mui/material";
import { InfoHeader } from "src/components/Movies/About/InfoHeader";

type ProductionSideData = {
  id: number;
  name: string;
}[];

type ProductionSideInfoProps = {
  data: ProductionSideData;
  headerText: string;
  path?: string;
};

export const ProductionSideInfo: VFC<ProductionSideInfoProps> = (props) => {
  const { data, headerText, path } = props;

  return (
    <>
      {data?.length ? (
        <Box sx={{ mb: 2 }}>
          <InfoHeader text={headerText} />
          {data?.map(({ id, name }) => {
            return path ? (
              <NextLink
                key={name}
                href={`${path}?id=${id}&sort=popularity.desc&page=1`}
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
            ) : (
              <Typography
                key={id}
                variant="body2"
                sx={{
                  display: "inline-block",
                  mr: 2,
                }}
              >
                {name}
              </Typography>
            );
          })}
        </Box>
      ) : null}
    </>
  );
};
