import React from "react";
import { useQuery } from "@tanstack/react-query";
import { CircularProgress, Typography } from "@mui/material";
import { fetchTasks } from "../api";
import {
  API_RETRIES,
  DEBOUNCE_DELAY,
  ENDPOINTS,
  ERROR_MSGS,
  TABLE_DEFAULT_LIMIT,
} from "../utils/constants";
import { TasksTable } from "../components/TasksTable";
import { debounce } from "lodash";

export default function Home() {
  const [limit, setLimit] = React.useState(TABLE_DEFAULT_LIMIT);
  const [offset, setOffset] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState(""); // used for API query
  const [searchInput, setSearchInput] = React.useState(""); // used for controlling input of search term
  const {
    data: tasks,
    error: tasksError,
    isLoading: tasksIsLoading,
  } = useQuery({
    queryKey: [ENDPOINTS.tasks, limit, offset, searchTerm],
    queryFn: () => fetchTasks({ limit, offset, searchTerm }),
    retry: API_RETRIES,
  });

  React.useEffect(() => {
    setOffset(0);
  }, [searchTerm]);

  const debouncedChangeHandler = React.useMemo(
    () =>
      debounce((value: string) => {
        setSearchTerm(value);
      }, DEBOUNCE_DELAY),
    [setSearchTerm],
  );

  const handleSearch = React.useCallback((newValue: string) => {
    setSearchInput(newValue)
    debouncedChangeHandler(newValue)
  }, [debouncedChangeHandler])

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <TasksTable
        data={tasks}
        searchTerm={searchInput}
        setLimit={setLimit}
        setOffset={setOffset}
        setSearchTerm={handleSearch}
      />
      {tasksIsLoading && <CircularProgress color="secondary" />}
      {tasksError && <Typography>{ERROR_MSGS.generic}</Typography>}
    </div>
  );
}
