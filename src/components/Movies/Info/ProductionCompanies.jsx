import { Box, Typography } from "@mui/material";
import { PaperText } from "src/components/Layout/PaperText";
import { InfoHeader } from "src/components/Movies/Info/InfoHeader";

export function ProductionCompanies(props) {
  return (
    <Box>
      <InfoHeader text="制作会社" />
      {props?.productionCompanies.map((company) => {
        return (
          <PaperText key={company.id}>
            <Typography variant="body2">{company.name}</Typography>
          </PaperText>
        );
      })}
    </Box>
  );
}
