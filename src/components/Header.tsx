import { GITHUB_URL, TITLE } from "../utils/constants";
import { theme } from "../theming/main";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, IconButton, Paper } from "@mui/material";

export default function Header() {
  return (
    <div style={{ width: "100%" }}>
      <span
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button href="/" variant="text">
          <Typography
            variant="h3"
            sx={(theme) => ({ color: theme.palette.secondary.light })}
          >
            {TITLE}
          </Typography>
        </Button>
        <Paper sx={{ padding: "2px" }}>
          <IconButton href={GITHUB_URL} target="_blank">
            <GitHubIcon />
          </IconButton>
        </Paper>
      </span>
      <Divider style={{ borderColor: theme.border.primary }} />
    </div>
  );
}
