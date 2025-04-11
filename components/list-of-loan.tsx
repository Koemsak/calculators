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
  const total = paymentSchedule.reduce(
    (acc, curr) => ({
      beginning_balance: acc.beginning_balance + curr.beginning_balance,
      principal: acc.principal + curr.principal,
      interest: acc.interest + curr.interest,
      total_payment: acc.total_payment + curr.total_payment,
      ending_balance: acc.ending_balance + curr.ending_balance,
    }),
    {
      beginning_balance: 0,
      principal: 0,
      interest: 0,
      total_payment: 0,
      ending_balance: 0,
    }
  );
  const totalPayment = paymentSchedule.reduce(
    (acc, curr) => acc + curr.total_payment,
    0
  );

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent bg-teal-200 sticky top-0 z-10">
            <TableHead className="w-[80px] sm:w-[100px] font-bold text-center text-xs sm:text-sm">
              Month
            </TableHead>
            <TableHead className="font-bold text-xs sm:text-sm min-w-[120px]">
              Beginning Balance
            </TableHead>
            <TableHead className="font-bold text-xs sm:text-sm hidden sm:table-cell min-w-[100px]">
              Principle
            </TableHead>
            <TableHead className="font-bold text-xs sm:text-sm hidden sm:table-cell min-w-[100px]">
              Interest
            </TableHead>
            <TableHead className="font-bold text-xs sm:text-sm min-w-[120px]">
              Total Payment
            </TableHead>
            <TableHead className="text-right font-bold text-xs sm:text-sm min-w-[120px]">
              Ending Balance
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paymentSchedule.map((sch, index) => (
            <TableRow
              key={index}
              className={index % 2 === 0 ? "" : "bg-rose-100/25"}
            >
              <TableCell className="font-medium text-center text-xs sm:text-sm">
                {sch.month}
              </TableCell>
              <TableCell className="text-xs sm:text-sm">
                {formatAmount(sch.beginning_balance)}
              </TableCell>
              <TableCell className="text-xs sm:text-sm hidden sm:table-cell">
                {formatAmount(sch.principal)}
              </TableCell>
              <TableCell className="text-xs sm:text-sm hidden sm:table-cell">
                {formatAmount(sch.interest)}
              </TableCell>
              <TableCell className="text-xs sm:text-sm">
                {formatAmount(sch.total_payment)}
              </TableCell>
              <TableCell className="text-right text-xs sm:text-sm">
                {formatAmount(sch.ending_balance)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className="text-start text-xs sm:text-sm" colSpan={2}>
              Total of paid payment:
            </TableCell>
            <TableCell className="text-end text-xs sm:text-sm" colSpan={4}>
              {formatAmount(totalPayment)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default ListOfLoan;
