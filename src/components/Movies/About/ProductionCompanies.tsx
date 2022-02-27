import NextLink from "next/link";
import { Box, Link as MuiLink, Paper, Typography } from "@mui/material";
import { InfoHeader } from "src/components/Movies/About/InfoHeader";

type CompaniesData = {
  id: number;
  name: string;
}[];

type ProductionCompaniesProps = {
  companies: CompaniesData;
};

export const ProductionCompanies = (props: ProductionCompaniesProps) => {
  const { companies } = props;

  return (
    <>
      {companies?.length ? (
        <Box sx={{ mb: 1 }}>
          <InfoHeader text="制作会社" />
          {companies?.map(({ id, name }) => {
            return (
              <NextLink
                key={id}
                href={`/movies/company?id=${id}&sort=popularity.desc&page=1`}
                passHref
              >
                <MuiLink underline="none">
                  <Paper
                    sx={{
                      display: "inline-block",
                      textAlign: "center",
                      px: 1,
                      mr: 1,
                      mb: 1,
                      "&:hover": {
                        opacity: 0.6,
                      },
                    }}
                  >
                    <Typography variant="body2">{name}</Typography>
                  </Paper>
                </MuiLink>
              </NextLink>
            );
          })}
        </Box>
      ) : null}
    </>
  );
};
