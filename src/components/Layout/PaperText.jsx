import { Paper } from "@mui/material";

export function PaperText({ children }) {
  return (
    <Paper
      sx={{
        display: "inline-block",
        textAlign: "center",
        px: 1,
        mr: 1,
        mb: 1,
      }}
    >
      {children}
    </Paper>
  );
}
