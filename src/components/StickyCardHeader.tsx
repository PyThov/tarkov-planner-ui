import { ReactNode } from "react";
import { Paper } from "@mui/material";

interface StickyCardHeaderProps {
    children: ReactNode
}
export default function StickyCardHeader({children}: StickyCardHeaderProps ){
    return (
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
            height: "132px",
            })}
      >
        {children}
      </Paper>
    )
}