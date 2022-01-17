import { Link as MuiLink, Button } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

export function ExternalLink(props) {
  return (
    <MuiLink
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      underline="hover"
    >
      <Button variant="text" color="primary" startIcon={<LinkIcon />}>
        {props.text}
      </Button>
    </MuiLink>
  );
}
