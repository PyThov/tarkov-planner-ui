import React from "react";
import { useQuery } from "@tanstack/react-query";
import { CircularProgress, Typography } from "@mui/material";
import { fetchTasks } from "../api";
import {
  API_RETRIES,
  ENDPOINTS,
  ERROR_MSGS,
  TABLE_DEFAULT_LIMIT,
} from "../utils/constants";
import { TasksTable } from "../components/TasksTable";

export default function Home() {
  const [limit, setLimit] = React.useState(TABLE_DEFAULT_LIMIT);
  const [offset, setOffset] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState("");
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
        setLimit={setLimit}
        setOffset={setOffset}
        setSearchTerm={setSearchTerm}
      />
      {tasksIsLoading && <CircularProgress color="secondary" />}
      {tasksError && <Typography>{ERROR_MSGS.generic}</Typography>}
    </div>
  );
}
