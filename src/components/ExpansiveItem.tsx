import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { ListItemButton, Collapse, List } from "@mui/material";
import { ReactNode, useState } from "react";

interface ExpansiveItemProps {
  content: ReactNode;
  children: ReactNode;
}
export default function ExpansiveItem({
  content,
  children,
}: ExpansiveItemProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        {children}
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {content}
        </List>
      </Collapse>
    </>
  );
}
