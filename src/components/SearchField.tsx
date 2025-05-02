import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { Clear } from "@mui/icons-material";

interface SearchFieldProps {
  searchTerm: string
  placeholder?: string;
  setSearchTerm: (a: string) => void;
}
export default function SearchField({
  searchTerm,
  placeholder,
  setSearchTerm,
}: SearchFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); // Pass the value to the debounced function
  };

  return (
    <Paper
      component="form"
      sx={(theme) => ({
        p: "10px 16px",
        display: "flex",
        alignItems: "center",
        width: "300px",
        height: "40px",
        backgroundColor: theme.palette.background.default,
        borderBottom: `2px solid ${theme.palette.divider}`,
      })}
    >
      <SearchIcon />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ "aria-label": placeholder }}
        onChange={handleChange}
        value={searchTerm}
      />
      <IconButton onClick={() => setSearchTerm("")}>
        <Clear />
      </IconButton>
    </Paper>
  );
}
