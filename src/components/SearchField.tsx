import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { debounce } from "lodash";
import { useMemo } from "react";

interface SearchFieldProps {
  debounceDelay?: number; // in milliseconds
  placeholder?: string;
  setSearchTerm: (a: string) => void;
}
export default function SearchField({
  debounceDelay = 200,
  placeholder,
  setSearchTerm,
}: SearchFieldProps) {
  // Create a debounced function that only updates the state after 100ms
  const debouncedChangeHandler = useMemo(
    () =>
      debounce((value: string) => {
        setSearchTerm(value);
      }, debounceDelay),
    [setSearchTerm, debounceDelay],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedChangeHandler(e.target.value); // Pass the value to the debounced function
  };

  return (
    <Paper
      component="form"
      sx={(theme) => ({
        p: "10px 16px",
        display: "flex",
        alignItems: "center",
        width: "300px",
        backgroundColor: theme.palette.background.default,
        borderBottom: `2px solid ${theme.palette.divider}`,
      })}
    >
      <SearchIcon />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ "aria-label": placeholder, onChange: handleChange }}
      />
    </Paper>
  );
}
