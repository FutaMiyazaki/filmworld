import { VFC } from "react";
import { Box, Typography } from "@mui/material";
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
        <Box sx={{ mb: 2 }}>
          <InfoHeader text="制作国" />
          {countries?.map(({ id, name }) => {
            return (
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
