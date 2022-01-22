import { Grid, Pagination } from "@mui/material";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export function PaginationRounded(props) {
  const [page, setPage] = useState(1);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  const handlePage = (e, page) => {
    console.log(page);
    setPage(page);
  };

  return (
    <Grid container spacing={1} sx={{ mt: 3 }}>
      <Pagination
        count={props.totalPages}
        variant="outlined"
        shape="rounded"
        color="primary"
        size={isMobileScreen ? "small" : "medium"}
        onChange={handlePage}
      />
    </Grid>
  );
}
