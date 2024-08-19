import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Item, ItemRequirement } from "../models/items";
import StickyCardHeader from "./StickyCardHeader";

interface MultipleItemsProps {
  items: Item[]
}
const MultipleItems = ({items}: MultipleItemsProps) => {
  return (
    <Box maxHeight="20vh" overflow="auto" display="flex" flexDirection="column" alignItems="center" gap={1}>
      {items.map((item, i) => {
        return (
          <Link
            href={item.wikiLink}
            target="_blank"
            color="primary.contrastText"
            key={`item-${item.name}-${i}`}
          >
            <Typography>{item.name}</Typography>
          </Link>
        )
      })}
    </Box>
  )
}

const MultipleItemsLabel = ({itemCount}: {itemCount: number}) => {
  return (
    <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
      <Typography color="warning.light">
        {"x" + itemCount}
      </Typography>
      <Typography>any of:</Typography>
  </Box>
  )
}

interface MultipleProps {
  count: number
  items: Item[]
}
const Multiple = ({count, items}: MultipleProps) => {
  return (
    <>
      <MultipleItemsLabel itemCount={count} />
      <Divider flexItem />
      <MultipleItems items={items} />
      <Divider flexItem />
    </>
  )
}

interface SingleProps {
  count: number
  item: Item
  foundInRaid: boolean
}
const Single = ({count, item, foundInRaid}: SingleProps) => {
  return (
    <>
      <div>
        {foundInRaid && <TaskAltIcon fontSize="small" sx={(theme) => ({color: theme.palette.primary.contrastText})} />}
      </div>
      <Typography color="warning.light">
        {"x" + count}
      </Typography>
      <Link
        href={item.wikiLink}
        target="_blank"
        color="primary.contrastText"
      >
        <Typography>{item.name}</Typography>
      </Link>
    </>
  )
}

interface TaskItemsCardProps {
  itemReqs: ItemRequirement[];
  total: number;
}
export default function TaskItemsCard({ itemReqs, total }: TaskItemsCardProps) {
  return (
    <Box sx={{ minWidth: "25vw", maxWidth: "45vw" }}>
      <StickyCardHeader>
        <CardHeader title="Required Items" subheader={`Total: ${total}`} />
      </StickyCardHeader>
      <Card>
        <CardContent>
          <List>
            {itemReqs.map((itemReq, i) => {
              const isSingle = itemReq.items.length == 1
              return (
                <ListItem
                  key={`item-requirement-${i}`}
                  sx={{ display: "flex", flexDirection: isSingle ? "row" : "column", gap: 1 }}
                >
                  {isSingle ? 
                    <Single item={itemReq.items[0]} count={itemReq.count} foundInRaid={itemReq.foundInRaid} /> :
                    <Multiple items={itemReq.items} count={itemReq.count} />
                  }
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}
