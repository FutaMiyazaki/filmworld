import { Box, Typography } from "@mui/material";
import { PaperText } from "src/components/Layout/PaperText";
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
          {companies?.map((company) => {
            return (
              <PaperText key={company.id}>
                <Typography variant="body2">{company.name}</Typography>
              </PaperText>
            );
          })}
        </Box>
      ) : null}
    </>
  );
};
