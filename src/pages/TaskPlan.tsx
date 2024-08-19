import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchTaskPlan } from "../api";
import TaskPlanCard from "../components/TaskPlanCard";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";
import { API_RETRIES, ENDPOINTS, ERROR_MSGS } from "../utils/constants";
import TaskItemsCard from "../components/TaskItemsCard";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface TaskPlanProps {}
// eslint-disable-next-line no-empty-pattern
export default function TaskPlan({}: TaskPlanProps) {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useQuery({
    queryKey: [ENDPOINTS.taskPlan, id],
    queryFn: () => fetchTaskPlan({ id: id || "" }),
    retry: API_RETRIES,
  });

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      overflow="auto"
    >
      {isLoading ? (
        <CircularProgress color="secondary" />
      ) : (
        data && (
          <Box display="flex" flexDirection="row" alignItems="start" gap={4}>
            <TaskPlanCard taskDeps={data} />
            <TaskItemsCard itemReqs={data.items} />
          </Box>
        )
      )}
      {error && <Typography>{ERROR_MSGS.generic}</Typography>}
    </Box>
  );
}
