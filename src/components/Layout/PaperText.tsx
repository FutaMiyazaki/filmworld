import { ReactNode, VFC } from "react";
import { Paper } from "@mui/material";

type PaperTextProps = {
  children: ReactNode;
};

export const PaperText: VFC<PaperTextProps> = ({ children }) => {
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
};
