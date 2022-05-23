import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import IconDelete from "../Icons/Delete";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import {
  PaperStyled,
  TableCellStyled,
  TableContainerStyled,
} from "./Table.styled";

function StickyHeadTable({ rows }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [columns, setColumn] = useState([]);

  useEffect(() => {
    rows.length &&
      setColumn(
        Object.keys(rows[0]).map((key) => {
          return {
            id: key,
            label: key,
            minWidth: 100,
            align: "center",
          };
        })
      );
  }, []);

  const handleDelete = (id) => {
    console.log(id);
  };
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <PaperStyled>
      <TableContainerStyled>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCellStyled
                  // cellwidth={100}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCellStyled>
              ))}
              <TableCellStyled align={"center"}>Delete</TableCellStyled>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        // prettier-ignore
                        <TableCellStyled key={column.id} align={column.align}>
                            {column.id === 'img_url'
                              ? <img width="45" height="45" src={value} />
                              : value.length > 30 ? `${value.slice(0, 30)}...` : value}
                        </TableCellStyled>
                      );
                    })}
                    <TableCellStyled
                      key={row.id}
                      align={"center"}
                      onClick={() => handleDelete(row.id)}
                    >
                      <Button variant="text">
                        <IconDelete />
                      </Button>
                    </TableCellStyled>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainerStyled>
      <TablePagination
        rowsPerPageOptions={[10, 20, 100]}
        component="div"
        count={rows?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </PaperStyled>
  );
}

export default React.memo(StickyHeadTable);
