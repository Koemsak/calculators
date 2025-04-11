"use client";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Label } from "@/components/ui/label";

import { Columns, PaymentSchedules } from "@/components/columns";
import { DataTable } from "@/components/data-table";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { interestRates, terms } from "@/constants";
import ListOfLoan from "@/components/list-of-loan";
import RadialChart from "@/components/radial-chart";
import { ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PaymentSchedule {
  month: string;
  beginning_balance: number;
  principal: number;
  interest: number;
  total_payment: number;
  ending_balance: number;
}
const Page = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [loanAmount, setLoanAmount] = useState(100);
  const [displayAmount, setDisplayAmount] = useState("100.00");

  const [selectedTerm, setSelectedTerm] = useState<"months" | "years">("months");
  const [term, setTerm] = useState(1);
  const [strTerm, setStrTerm] = useState("1 month");
  const [interestRate, setInterestRate] = useState(0.5);
  const [strInterestRate, setStrInterestRate] = useState("0.5%");

  // State for calculated values
  const [totalPrincipal, setTotalPrincipal] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [paymentSchedule, setPaymentSchedule] = useState<PaymentSchedules[]>([]);

  // Swap from select to manual input
  const [isSwapTerm, setIsSwapTerm] = useState(false);
  const [isSwapInterst, setIsSwapInterst] = useState(false);

  const calculateLoan = useCallback(() => {
    const monthlyRate =
      selectedTerm === "years" ? interestRate / 100 / 12 : interestRate / 100;
    const numberOfPayments = selectedTerm === "years" ? term * 12 : term;

    // Calculate monthly payment using the amortization formula
    const monthlyPayment =
      (loanAmount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -1 * numberOfPayments));

    let balance = loanAmount;
    let totalPrincipalPaid = 0;
    let totalInterestPaid = 0;
    const schedule: PaymentSchedule[] = [];

    for (let i = 1; i <= numberOfPayments; i++) {
      const interestForMonth = balance * monthlyRate;
      const principalForMonth = monthlyPayment - interestForMonth;
      const beginningBalance = balance;
      balance -= principalForMonth;

      totalPrincipalPaid += principalForMonth;
      totalInterestPaid += interestForMonth;

      schedule.push({
        month: `${i}`,
        beginning_balance: parseFloat(formatNumber(beginningBalance)),
        principal: parseFloat(formatNumber(principalForMonth)),
        interest: parseFloat(formatNumber(interestForMonth)),
        total_payment: parseFloat(formatNumber(monthlyPayment)),
        ending_balance: balance < 0 ? 0 : parseFloat(formatNumber(balance)),
      });
    }

    setTotalPrincipal(parseFloat(formatNumber(totalPrincipalPaid)));
    setTotalInterest(parseFloat(formatNumber(totalInterestPaid)));
    setTotalAmount(parseFloat(formatNumber(totalPrincipalPaid + totalInterestPaid)));
    setPaymentSchedule(schedule);
  }, [loanAmount, term, interestRate, selectedTerm]);

  const handleCurrencyChange = (value: string) => {
    setSelectedCurrency(value);
    if (value === "USD") {
      setLoanAmount(loanAmount / 4000);
      setDisplayAmount(formatNumber(loanAmount / 4000));
    } else {
      setLoanAmount(loanAmount * 4000);
      setDisplayAmount(formatNumber(loanAmount * 4000));
    }
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, "");
    if (value === "") {
      setLoanAmount(100);
      setDisplayAmount("");
    } else {
      const numericValue = parseFloat(value);
      if (!isNaN(numericValue)) {
        setLoanAmount(numericValue);
        setDisplayAmount(numericValue.toString());
      } else {
        setDisplayAmount(loanAmount.toString());
      }
    }
  };

  const handleBlur = () => {
    if (displayAmount === "") {
      setLoanAmount(selectedCurrency === "USD" ? 10 : 40000);
      setDisplayAmount(selectedCurrency === "USD" ? "10.00" : "40,000.00");
    } else {
      setDisplayAmount(formatNumber(loanAmount));
    }
  };

  const formatNumber = (value: number): string => {
    if (isNaN(value)) return "";
    return value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleChangeSelectedTerm = (value: string) => {
    const newTermType = value as "months" | "years";
    setSelectedTerm(newTermType);
    if (newTermType === "years") {
      setTerm(1);
      setInterestRate(6);
      setStrTerm("1 year");
      setStrInterestRate("6%");
    } else if (newTermType === "months") {
      setTerm(1);
      setInterestRate(0.5);
      setStrTerm("1 month");
      setStrInterestRate("0.5%")
    }
  };

  const handleChangeTermValue = (value: string) => {
    const term = parseInt(value);
    setTerm(term);
  };

  const handleChangeInterestRate = (value: string) => {
    const interestRate = parseFloat(value);
    setInterestRate(interestRate);
  };

  // Start swap change
  const handleTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setStrTerm(value);
      if (value) {
        setTerm(parseInt(value));
      }
    }
  };

  const handleTermBlur = () => {
    if (strTerm) {
      const num = parseInt(strTerm);
      if (selectedTerm === "years") {
        setStrTerm(`${num} ${num === 1 ? "year" : "years"}`);
      } else {
        setStrTerm(`${num} ${num === 1 ? "month" : "months"}`);
      }
    } else {
      setTerm(1);
      setStrTerm("1 month");
    }
  };

  const handleTermFocus = () => {
    if (strTerm.includes("month")) {
      setStrTerm(strTerm.replace(/ months?$/, ""));
    } else if (strTerm.includes("year")) {
      setStrTerm(strTerm.replace(/ years?$/, ""));
    }
  };

  const handleSwapTerm = () => {
    setIsSwapTerm(!isSwapTerm);
    const strTN = parseInt(strTerm, 10);
    if (isSwapTerm) {
      const selectedTerms = terms[selectedTerm];
      let foundMatch = false;
      for (const key in selectedTerms) {
        const values = selectedTerms[key as keyof typeof selectedTerms];
        const matchedValue = values.find((item) => item.value === strTN);
        if (matchedValue) {
          setTerm(matchedValue.value);
          foundMatch = true;
          break;
        }
      }
      if (!foundMatch) {
        const firstKey = Object.keys(
          selectedTerms
        )[0] as keyof typeof selectedTerms;
        setTerm(selectedTerms[firstKey][0].value);
      }
    } else {
      setTerm(strTN);
    }
  };
  // End swap change

  const handleInterestChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setStrInterestRate(value);
      if (value) {
        setInterestRate(parseFloat(value));
      }
    }
  };
  const handleInterestBlur = () => {
    if (strInterestRate) {
      const num = parseFloat(strInterestRate);
      setStrInterestRate(`${num}%`);
    } else {
      setInterestRate(0.5);
      setStrInterestRate("0.5%");
    }
  };
  const handleInterestFocus = () => {
    if (strInterestRate.includes("%")) {
      setStrInterestRate(strInterestRate.replace(/%$/, ""));
    }
  };
  const handleSwapInterestRate = () => {
    setIsSwapInterst(!isSwapInterst);
    const strIR = parseFloat(strInterestRate);
    if (isSwapInterst) {
      const selectedTerms = interestRates[selectedTerm];
      let foundMatch = false;

      for (const key in selectedTerms) {
        const values = selectedTerms[key as keyof typeof selectedTerms];
        const matchedValue = Array.isArray(values)
          ? values.find((item) => item.value === strIR)
          : undefined;
        if (matchedValue) {
          setInterestRate(matchedValue.value);
          foundMatch = true;
          break;
        }
      }

      if (!foundMatch) {
        const firstKey = Object.keys(
          selectedTerms
        )[0] as keyof typeof selectedTerms;
        if (Array.isArray(selectedTerms[firstKey])) {
          setInterestRate(selectedTerms[firstKey][1]?.value || 0);
        }
      }
    } else {
      setInterestRate(strIR);
    }
  };

  useEffect(() => {
    calculateLoan();
  }, [calculateLoan]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      rotateY: 90,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      rotateY: -90,
      transition: { duration: 0.2 },
    },
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8 space-y-10">
      <div className="flex flex-col items-center justify-center h-full space-y-8 max-w-5xl w-full text-sm lg:flex lg:flex-col">
        <h1 className="text-lg font-bold tracking-tight lg:text-4xl md:text-3xl sm:text-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
          Welcome to Loan Calculator
        </h1>
        <Separator className="my-4" />
      </div>

      <div className="max-w-5xl w-full mt-0">
        <h1 className="text-xl font-bold lg:text-3xl md:text-2xl sm:text-xl text-start mb-2">
          Loan Calculate
        </h1>
        <p className="opacity-50 text-[12px] lg:text-base">
          Whether you are looking to save for the future project or determine
          the amountof loan you can afford, these convenient calculators can
          help you make sense of your budget. Start by selecting one of
          the calculators to help determine your savings or loan options.
        </p>
      </div>

      <div className="mb-32 grid lg:max-w-5xl lg:w-full w-full lg:mb-0 lg:grid-cols-2 gap-4">
        <div className="p-4 space-y-4 shadow-md rounded-sm">
          <div className="w-100 space-y-1">
            <Label htmlFor="loanAmount">Loan Amount</Label>
            <div className="relative">
              <Input
                type="text"
                className="w-full pl-16 shadow-none ring-0 focus:ring-0 focus-visible:ring-0"
                id="loanAmount"
                placeholder={selectedCurrency === "USD" ? "10.00" : "40,000.00"}
                value={displayAmount}
                onChange={handleAmountChange}
                onBlur={handleBlur}
              />
              <Select onValueChange={handleCurrencyChange} defaultValue="USD">
                <SelectTrigger className="absolute left-0 top-0 h-full w-19 border-0 bg-transparent focus:ring-0 focus-visible:ring-0 rounded-r-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD" className="cursor-pointer">
                    USD
                  </SelectItem>
                  <SelectItem value="KHR" className="cursor-pointer">
                    KHR
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="w-100 space-y-1">
            <Label htmlFor="term" className="flex items-center">
              Term as
              <Select
                defaultValue="months"
                onValueChange={handleChangeSelectedTerm}
              >
                <SelectTrigger className="h-full w-28 border-0 bg-transparent focus:ring-0 focus-visible:ring-0 rounded-r-none shadow-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="months" className="cursor-pointer">
                    Months
                  </SelectItem>
                  <SelectItem value="years" className="cursor-pointer">
                    Years
                  </SelectItem>
                </SelectContent>
              </Select>
            </Label>
            <div className="flex items-center space-x-1">
              <AnimatePresence mode="wait" initial={false}>
                {isSwapTerm ? (
                  <motion.div
                    key="input"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{
                      width: "100%",
                    }}
                  >
                    <Input
                      type="text"
                      className="w-full shadow-none ring-0 focus:ring-0 focus-visible:ring-0"
                      placeholder="3 months or 1 year"
                      value={strTerm}
                      onChange={handleTermChange}
                      onBlur={handleTermBlur}
                      onFocus={handleTermFocus}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="select"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{
                      width: "100%",
                    }}
                  >
                    <Select
                      value={term.toString()}
                      onValueChange={handleChangeTermValue}
                    >
                      <SelectTrigger className="w-full shadow-none ring-0 focus:ring-0 focus-visible:ring-0">
                        <SelectValue placeholder="Choose a term" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(terms[selectedTerm]).map(
                          ([term, values]: [
                            string,
                            { label: string; value: number }[]
                          ]) => (
                            <SelectGroup key={term}>
                              <SelectLabel>{term}</SelectLabel>
                              {values.map((value) => (
                                <SelectItem
                                  key={value.value}
                                  value={value.value.toString()}
                                  className="cursor-pointer"
                                >
                                  {value.label}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  </motion.div>
                )}
              </AnimatePresence>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size={"icon"}
                      variant={"secondary"}
                      onClick={handleSwapTerm}
                    >
                      <ArrowLeftRight />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{!isSwapTerm ? "Input manually" : "Select from list"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="w-100 space-y-1">
            <Label htmlFor="interestrate" className="flex items-center">
              Interest rate%
            </Label>
            <div className="flex items-center space-x-1">
              <AnimatePresence mode="wait" initial={false}>
                {isSwapInterst ? (
                  <motion.div
                    key="input"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{
                      width: "100%",
                    }}
                  >
                    <Input
                      type="text"
                      className="w-full shadow-none ring-0 focus:ring-0 focus-visible:ring-0"
                      placeholder="0.5% or 6%"
                      value={strInterestRate}
                      onChange={handleInterestChange}
                      onBlur={handleInterestBlur}
                      onFocus={handleInterestFocus}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="select"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{
                      width: "100%",
                    }}
                  >
                    <Select
                      value={interestRate.toString()}
                      onValueChange={handleChangeInterestRate}
                    >
                      <SelectTrigger
                        className="w-full shadow-none ring-0 focus:ring-0 focus-visible:ring-0"
                        id="interestrate"
                      >
                        <SelectValue placeholder="Choose an interest rate%" />
                      </SelectTrigger>
                      <SelectContent>
                        {interestRates[selectedTerm].map((value) => (
                          <SelectItem
                            key={value.value}
                            value={value.value.toString()}
                            className="cursor-pointer"
                          >
                            {value.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </motion.div>
                )}
              </AnimatePresence>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size={"icon"}
                      variant={"secondary"}
                      onClick={handleSwapInterestRate}
                    >
                      <ArrowLeftRight />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{!isSwapTerm ? "Input manually" : "Select from list"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className="p-4 space-y-4 shadow-md rounded-sm">
          <RadialChart
            totalPrincipal={totalPrincipal}
            totalInterest={totalInterest}
            totalAmount={totalAmount}
            currency={selectedCurrency}
          />
        </div>
      </div>
      <div className="max-w-5xl w-full mt-0">
        <Separator className="my-4" />
        <h1 className="text-xl font-bold lg:text-3xl md:text-2xl sm:text-xl text-start mb-2">
          Payment Schedules
        </h1>
        {/* <ListOfLoan paymentSchedule={paymentSchedule} /> */}
        
        <DataTable columns={Columns} data={paymentSchedule} />

      </div>
    </main>
  );
};

export default Page;
