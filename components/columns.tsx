"use client";

import { ColumnDef } from "@tanstack/react-table";

export type PaymentSchedules = {
  month: string;
  beginning_balance: number;
  principal: number;
  interest: number;
  total_payment: number;
  ending_balance: number;
};

export const Columns: ColumnDef<PaymentSchedules>[] = [
  {
    accessorKey: "month",
    header: "Month",
  },
  {
    accessorKey: "beginning_balance",
    header: "Beginning",
  },
  {
    accessorKey: "principal",
    header: "Principal",
  },
  {
    accessorKey: "interest",
    header: "Interest",
  },
  {
    accessorKey: "total_payment",
    header: "Total",
  },
  {
    accessorKey: "ending_balance",
    header: "Ending",
  },
];
