import {
  Box,
  Card,
  CardContent,
  Link,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import CircleSharpIcon from "@mui/icons-material/CircleSharp";
import { TaskDependencies } from "../models/tasks";
import ExpansiveItem from "./ExpansiveItem";

interface TaskPlanCardProps {
  taskDeps: TaskDependencies;
}
export default function TaskPlanCard({ taskDeps }: TaskPlanCardProps) {
  console.log(taskDeps);
  return (
    <div>
      <Paper
        sx={(theme) => ({
          backgroundColor: theme.palette.primary.dark,
          position: "sticky",
          zIndex: 100,
          padding: 2,
          top: 0,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
          flexDirection: "row",
          display: "flex",
          alignItems: "end",
          justifyContent: "space-between",
        })}
      >
        <Box display="flex" flexDirection="row" alignItems="end" gap={1}>
          <img
            style={{ maxHeight: "100px" }}
            src={taskDeps.tasks[taskDeps.tasks.length - 1].taskImageLink || ""}
          />
          <Typography variant="h6">{taskDeps.name}</Typography>
        </Box>
        {/* <Box flexDirection="column" display="flex"> */}
        {/* <Typography>Items: {taskDeps.itemsTotal}</Typography> */}
        <Typography>Tasks: {taskDeps.tasksTotal}</Typography>
        {/* </Box> */}
      </Paper>
      <Card sx={{ minWidth: "40vw" }}>
        <CardContent>
          <Box display="flex" flexDirection="column" gap={1}>
            {taskDeps.tasks.map((task) => {
              return (
                <Paper
                  sx={(theme) => ({
                    backgroundColor: theme.palette.primary.light,
                  })}
                  key={task.id}
                >
                  <ExpansiveItem
                    content={task.objectives?.map((obj, i) => {
                      return (
                        <ListItem key={obj.id + i} sx={{ gap: "10px" }}>
                          <CircleSharpIcon sx={{ fontSize: "8px" }} />
                          <Typography>{`${obj.description}${obj.count ? ":" : ""}`}</Typography>
                          <Typography color="warning.light">
                            {obj.count ? "x" + obj.count : ""}
                          </Typography>
                        </ListItem>
                      );
                    })}
                  >
                    <Box
                      flexDirection="row"
                      display="flex"
                      gap={1}
                      alignItems="center"
                    >
                      <Typography variant="subtitle1">
                        <Link
                          href={task.wikiLink}
                          target="_blank"
                          color="secondary"
                        >
                          {task.name}
                        </Link>
                      </Typography>
                      <Typography variant="caption">
                        - {task.trader?.name}
                      </Typography>
                      <Typography variant="caption">
                        - level {task.minPlayerLevel}
                      </Typography>
                    </Box>
                  </ExpansiveItem>
                </Paper>
              );
            })}
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
