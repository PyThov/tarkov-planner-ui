import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Tasks } from "../models/tasks";
import {
  TABLE_COLUMNS,
  TABLE_DEFAULT_LIMIT,
  TABLE_STRINGS,
} from "../utils/constants";
import {
  Button,
  Divider,
  Link,
  TablePagination,
  Typography,
} from "@mui/material";
import SearchField from "./SearchField";

interface TasksTableProps {
  data: Tasks | undefined;
  setOffset: (a: number) => void;
  setLimit: (a: number) => void;
  setSearchTerm: (a: string) => void;
}
export const TasksTable = ({
  data,
  setOffset,
  setLimit,
  setSearchTerm,
}: TasksTableProps) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(TABLE_DEFAULT_LIMIT);
  const rows = data?.tasks || [];

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
    setOffset(newPage * rowsPerPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newNumRows = parseInt(event.target.value, 10);
    setRowsPerPage(newNumRows);
    setPage(0);
    setLimit(newNumRows);
  };

  return (
    <Paper sx={{ width: "100%", maxHeight: "100%" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "primary.dark" }}>
              <TableCell>
                <Typography>{TABLE_COLUMNS[0]}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{TABLE_COLUMNS[1]}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{TABLE_COLUMNS[2]}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{TABLE_COLUMNS[3]}</Typography>
              </TableCell>
              <TableCell>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <SearchField
                    placeholder={TABLE_STRINGS.searchPlaceholder}
                    setSearchTerm={setSearchTerm}
                  />
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                hover
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Button
                    size="small"
                    variant="contained"
                    href={`/task_plan/${row.id}`}
                  >
                    {TABLE_STRINGS.plan}
                  </Button>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <Link href={row.wikiLink} target="_blank" color="secondary">
                    {row.name}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={row.map?.wiki} target="_blank" color="secondary">
                    {row.map?.name}
                  </Link>
                </TableCell>
                <TableCell>{row.minPlayerLevel}</TableCell>
                <TableCell>
                  {row.kappaRequired ? (
                    <Typography color="success.light">Yes</Typography>
                  ) : (
                    <Typography color="error.light">No</Typography>
                  )}
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={data?.total || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
