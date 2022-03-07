import { VFC } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { InfoHeader } from "src/components/Movies/About/InfoHeader";

type CountriesData = {
  id: number;
  name: string;
}[];

type ProductionCountriesProps = {
  countries: CountriesData;
};

export const ProductionCountries: VFC<ProductionCountriesProps> = (props) => {
  const { countries } = props;

  return (
    <>
      {countries?.length ? (
        <Box sx={{ mb: 1 }}>
          <InfoHeader text="制作国" />
          {countries?.map(({ id, name }) => {
            return (
              <Paper
                key={id}
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
            );
          })}
        </Box>
      ) : null}
    </>
  );
};
