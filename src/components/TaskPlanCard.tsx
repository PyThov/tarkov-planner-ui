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
import StickyCardHeader from "./StickyCardHeader";

interface TaskPlanCardProps {
  taskDeps: TaskDependencies;
}
export default function TaskPlanCard({ taskDeps }: TaskPlanCardProps) {
  return (
    <Box sx={{ width: "45vw" }}>
      <StickyCardHeader>
        <Box display="flex" flexDirection="row" alignItems="end" gap={1}>
            <img
              style={{ maxHeight: "100px" }}
              src={taskDeps.tasks[taskDeps.tasks.length - 1].taskImageLink || ""}
            />
            <Typography variant="h4">{taskDeps.name}</Typography>
          </Box>
          <Typography>Tasks: {taskDeps.tasksTotal}</Typography>
        </StickyCardHeader>
      <Card>
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
    </Box>
  );
}
