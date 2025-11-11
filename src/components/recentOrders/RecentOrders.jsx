import React from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Chip, Typography
} from "@mui/material";

const orders = [
  { id: "#92509", name: "Joyce Freeman", date: "1401/04/05", amount: "$831.00", status: "در انتظار", statusColor: "warning" },
  { id: "#91631", name: "Brittany Hale", date: "1401/03/28", amount: "$142.00", status: "پرداخت شده", statusColor: "success" },
  { id: "#90963", name: "Luke Cook", date: "1401/03/21", amount: "$322.00", status: "پرداخت شده", statusColor: "success" },
  { id: "#89332", name: "Eileen Horton", date: "1401/03/12", amount: "$597.00", status: "در انتظار", statusColor: "warning" },
  { id: "#89107", name: "Frederick Adams", date: "1401/01/22", amount: "$270.00", status: "شکست خورده", statusColor: "error" },
  { id: "#89021", name: "Lee Wheeler", date: "1401/01/24", amount: "$110.00", status: "پرداخت شده", statusColor: "success" },
];

export default function OrdersTable() {
  return (
    <TableContainer component={Paper} sx={{ direction: "rtl", borderRadius: "15px", overflow: "hidden" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right"><Typography fontWeight="bold">مبلغ</Typography></TableCell>
            <TableCell align="right"><Typography fontWeight="bold">نام مشتری</Typography></TableCell>
            <TableCell align="right"><Typography fontWeight="bold">تاریخ</Typography></TableCell>
            <TableCell align="right"><Typography fontWeight="bold">وضعیت</Typography></TableCell>
            <TableCell align="right"><Typography fontWeight="bold">شماره سفارش</Typography></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {orders.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">
                <Chip
                  label={row.status}
                  sx={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    color: row.statusColor === "success" ? "#4caf50" :
                           row.statusColor === "warning" ? "#ff9800" :
                           row.statusColor === "error" ? "#f44336" : "#757575",
                    background: "transparent",
                    border: "none !important",
                    "& .MuiChip-label": {
                      padding: "0 10px"
                    }
                  }}
                />
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
