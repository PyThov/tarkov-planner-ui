import {
  Card,
  CardContent,
  CardHeader,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { ItemRequirement } from "../models/items";

interface TaskItemsCardProps {
  itemReqs: ItemRequirement[];
}
export default function TaskItemsCard({ itemReqs }: TaskItemsCardProps) {
  return (
    <Card>
      <CardHeader title="Required Items" />
      <CardContent>
        <List>
          {itemReqs.map((item, i) => {
            return (
              <ListItem
                key={item.name + i}
                sx={{ display: "flex", flexDirection: "row", gap: 1 }}
              >
                <Link
                  href={item.wikiLink}
                  target="_blank"
                  color="primary.contrastText"
                >
                  <Typography>{item.name + ":"}</Typography>
                </Link>
                <Typography color="warning.light">
                  {"x" + item.count}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
}
