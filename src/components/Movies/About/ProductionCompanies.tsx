import NextLink from "next/link";
import { VFC } from "react";
import { Box, Link as MuiLink, Typography } from "@mui/material";
import { InfoHeader } from "src/components/Movies/About/InfoHeader";

type CompaniesData = {
  id: number;
  name: string;
}[];

type ProductionCompaniesProps = {
  companies: CompaniesData;
};

export const ProductionCompanies: VFC<ProductionCompaniesProps> = (props) => {
  const { companies } = props;

  return (
    <>
      {companies?.length ? (
        <Box sx={{ mb: 2 }}>
          <InfoHeader text="制作会社" />
          {companies?.map(({ id, name }) => {
            return (
              <NextLink
                key={id}
                href={`/movies/company?id=${id}&sort=popularity.desc&page=1`}
                passHref
              >
                <MuiLink underline="hover" sx={{ display: "inline-block" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      mr: 2,
                      mb: 1,
                    }}
                  >
                    {name}
                  </Typography>
                </MuiLink>
              </NextLink>
            );
          })}
        </Box>
      ) : null}
    </>
  );
};
