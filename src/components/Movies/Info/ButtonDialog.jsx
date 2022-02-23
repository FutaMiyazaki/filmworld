import { useState, useCallback } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link as MuiLink,
  Typography,
} from "@mui/material";

export function ButtonDialog({ url }) {
  const [open, setOpen] = useState(false);

  const openDialog = useCallback(() => {
    setOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div>
      <Button
        variant="outlined"
        onClick={openDialog}
        sx={{ fontWeight: "bold" }}
      >
        公式サイト
      </Button>
      <Dialog open={open} onClose={closeDialog}>
        <DialogTitle id="official-site-dialog-title">
          下記の外部サイトに移動してよろしいでしょうか？
          <br />
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="official-site-dialog-content-url"
            sx={{ mb: 3, textAlign: "center" }}
          >
            <Typography color="primary">{url}</Typography>
          </DialogContentText>
          <DialogContentText id="official-site-dialog-content-alert">
            ※FilmWorldは、リンク先の内容に関して、またそのウェブサイトを利用した際に生じたいかなる損害についても一切の責任を負いません。他のウェブサイトについては、お客様自身の責任において閲覧・利用するものとします。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={closeDialog} sx={{ m: 1 }}>
            キャンセル
          </Button>
          <MuiLink
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            <Button
              autoFocus
              variant="contained"
              onClick={closeDialog}
              sx={{ m: 1 }}
            >
              移動する
            </Button>
          </MuiLink>
        </DialogActions>
      </Dialog>
    </div>
  );
}
