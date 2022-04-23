import { VFC } from "react";
import { useMediaQuery } from "react-responsive";
import { Grid } from "@mui/material";
import { FilterByYear } from "src/components/Layout/Form/FilterByYear";
import { RankingButtonLinks } from "src/components/Layout/Link/RankingButtonLinks";
import { SortBottomMenu } from "src/components/Layout/SortBottomMenu";

type SortSectionProps = {
  path: string;
};

export const SortSection: VFC<SortSectionProps> = (props) => {
  const { path } = props;
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <Grid container justifyContent="flex-start" sx={{ mb: 4 }}>
      <Grid item xs={5} sm={4} md={3} lg={3}>
        <FilterByYear path={`/movies/${path}?`} />
      </Grid>
      <Grid item xs={2} sm={1} md={3} lg={3} />
      <Grid
        item
        xs={5}
        sm={7}
        md={6}
        lg={6}
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {isMobileScreen ? <SortBottomMenu /> : <RankingButtonLinks />}
      </Grid>
    </Grid>
  );
};
