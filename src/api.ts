import { TaskDependencies, Tasks } from "./models/tasks";
import { ENDPOINTS } from "./utils/constants";

const VERSION = "v1";
const apiUrl = import.meta.env.VITE_API_URL as string;

interface FetchTasksParams {
  limit?: number;
  offset?: number;
  searchTerm?: string;
}
export const fetchTasks = async ({
  limit = 10,
  offset = 0,
  searchTerm = "",
}: FetchTasksParams): Promise<Tasks> => {
  const response = await fetch(
    `${apiUrl}/${VERSION}/${ENDPOINTS.tasks}?limit=${limit}&offset=${offset}&searchTerm=${searchTerm}`,
  );

  if (!response.ok) throw new Error("Network response was not ok");

  return response.json();
};

interface FetchTaskPlanParams {
  id: string;
}
export const fetchTaskPlan = async ({
  id,
}: FetchTaskPlanParams): Promise<TaskDependencies> => {
  const response = await fetch(
    `${apiUrl}/${VERSION}/${ENDPOINTS.taskPlan}/${id}`,
  );

  if (!response.ok) throw new Error("Network response was not ok");

  return response.json();
};
