import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import GitHubIcon from "@mui/icons-material/GitHub";
import BugReportIcon from '@mui/icons-material/BugReport';
import { Box, Button, IconButton, Paper, Tooltip } from "@mui/material";
import { GITHUB_URL, ISSUES_URL, TITLE } from "../utils/constants";

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
        <Box display="flex" flexDirection="row" gap={1}>
          <Tooltip title="Submit a bug or feature request!">
            <Paper sx={{ padding: "2px" }}>
              <IconButton href={ISSUES_URL} target="_blank">
                <BugReportIcon />
              </IconButton>
            </Paper>
          </Tooltip>
          <Paper sx={{ padding: "2px" }}>
            <IconButton href={GITHUB_URL} target="_blank">
              <GitHubIcon />
            </IconButton>
          </Paper>
        </Box>
      </span>
      <Divider />
    </div>
  );
}
