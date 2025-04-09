import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PaymentSchedule {
  month: string;
  beginning_balance: number;
  principal: number;
  interest: number;
  total_payment: number;
  ending_balance: number;
}

interface ScheduleTableProps {
  paymentSchedule: PaymentSchedule[];
}

const formatAmount = (num: Number) => {
  return num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
const ListOfLoan: React.FC<ScheduleTableProps> = ({ paymentSchedule }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparant bg-teal-200">
          <TableHead className="w-[100px] font-bold text-center">Month</TableHead>
          <TableHead className="font-bold">Beginning Balance</TableHead>
          <TableHead className="font-bold">Principle</TableHead>
          <TableHead className="font-bold">Interest</TableHead>
          <TableHead className="font-bold">Total Payment</TableHead>
          <TableHead className="text-right font-bold">Ending Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {paymentSchedule.map((sch, index) => (
          <TableRow
            key={index}
            className={index % 2 === 0 ? "" : "bg-rose-100/25"}
          >
            <TableCell className="font-medium text-center">{sch.month}</TableCell>
            <TableCell>{formatAmount(sch.beginning_balance)}</TableCell>
            <TableCell>{formatAmount(sch.principal)}</TableCell>
            <TableCell>{formatAmount(sch.interest)}</TableCell>
            <TableCell>{formatAmount(sch.total_payment)}</TableCell>
            <TableCell className="text-right">{formatAmount(sch.ending_balance)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell className="text-center">Total</TableCell>
          <TableCell>$2,500.00</TableCell>
          <TableCell>$2,500.00</TableCell>
          <TableCell>$2,500.00</TableCell>
          <TableCell>$2,500.00</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default ListOfLoan;
