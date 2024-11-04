import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";

let INFormat = new Intl.NumberFormat("en-IN");

export default function BasicTable({ data, cols, style }) {
  return (
    <div style={style}>
      <TableContainer component={Paper} className="BasicTable">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {cols.map((col) => (
                <TableCell align="center">
                  {col.label} {col.showCurrencyIcon ? "₹" : null}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow
                key={`${i}`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {Object.values(row).map((cell) => (
                  <TableCell scope="row" align="center">
                    {typeof cell === "number" ? INFormat.format(cell) : cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
