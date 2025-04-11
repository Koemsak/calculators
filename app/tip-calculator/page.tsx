"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { tips } from "@/constants";
import { DollarSign, UserRound, UsersRound } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const Page = () => {
  const [billAmount, setBillAmount] = useState(10);
  const [strBillAmount, setStrBillAmount] = useState("10.00");

  const [tipPercent, setTipPercent] = useState(5);
  const [strTipPercent, setStrTipPercent] = useState("5%");

  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [tipAmount, setTipAmount] = useState(0.0);
  const [totalAmount, setTotalAmount] = useState(0.0);
  const [totalTipAmount, setTotalTipAmount] = useState(0.0);
  const [totalAllTipAmount, setTotalAllTipAmount] = useState(0.0);

  const calculateTip = useCallback(() => {
    setTimeout(() => {
      const tipAmount = (billAmount * tipPercent) / 100;
      const totalAmount = billAmount + tipAmount;
      setTipAmount(tipAmount / numberOfPeople);
      setTotalAmount(totalAmount / numberOfPeople);
      setTotalTipAmount(tipAmount);
      setTotalAllTipAmount(totalAmount);
    }, 500);
  }, [billAmount, numberOfPeople, tipPercent]);

  // Start Bill Amount
  const handleBillAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, "");
    if (value === "") {
      setBillAmount(10);
      setStrBillAmount("");
    } else {
      const numericValue = parseFloat(value);
      if (!isNaN(numericValue)) {
        setBillAmount(numericValue);
        setStrBillAmount(numericValue.toString());
      } else {
        setStrBillAmount(billAmount.toString());
      }
    }
  };

  const handleBillAmountBlur = () => {
    if (strBillAmount === "") {
      setBillAmount(10);
      setStrBillAmount("10.00");
    } else {
      setStrBillAmount(formatNumber(billAmount));
    }
  };

  const handleBillAmountFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };
  // End Bill Amount

  // Start Tip Percent
  const handleTipPercentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setStrTipPercent(value);
    }
  };

  const handleTipPercentBlur = () => {
    if (strTipPercent === "") {
      setTipPercent(5);
      setStrTipPercent("5%");
    } else {
      const tipPercent = parseInt(strTipPercent.replace("%", ""));
      setTipPercent(tipPercent);
      setStrTipPercent(tipPercent.toString() + "%");
    }
  };

  const handleButtonClick = (value: string) => {
    const numericValue = value.replace(/[^0-9.]/g, "");
    const tip = parseInt(numericValue);
    setTipPercent(tip);
    setStrTipPercent(value + "%");
  };
  // End Tip Percent

  // Start People change
  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    const newPeople =
      numericValue === ""
        ? 1
        : Math.min(Math.max(parseInt(numericValue, 10), 1), 1000);
    setNumberOfPeople(newPeople);
  };
  const handlePeopleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };
  // End People change

  const handleReset = () => {
    setBillAmount(10);
    setStrBillAmount("10.00");
    setTipPercent(5);
    setStrTipPercent("5%");
    setNumberOfPeople(1);
  };

  const formatNumber = (value: number): string => {
    if (isNaN(value)) return "";
    return value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  useEffect(() => {
    calculateTip();
  }, [calculateTip]);

  const getCountUpConfig = (num: number) => {
    if (num >= 1_000_000_000) {
      return { end: num / 1_000_000_000, decimals: 1, suffix: "B" };
    } else if (num >= 1_000_000) {
      return { end: num / 1_000_000, decimals: 1, suffix: "M" };
    } else if (num >= 1_000) {
      return { end: num / 1_000, decimals: 1, suffix: "K" };
    } else {
      return { end: num, decimals: 2, suffix: "" };
    }
  };

  const tipCountUp = getCountUpConfig(tipAmount);
  const totalAmountCountUp = getCountUpConfig(totalAmount);
  const totalTipCountUp = getCountUpConfig(totalTipAmount);
  const totalAllAmountCountUp = getCountUpConfig(totalAllTipAmount);

  return (
    <main className="flex min-h-screen flex-col items-center p-8 space-y-10">
      <div className="flex flex-col items-center justify-center h-full space-y-8 px-4 max-w-5xl w-full text-sm lg:flex lg:flex-col">
        <h1 className="text-lg font-bold tracking-tight lg:text-4xl md:text-3xl sm:text-2xl bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
          Welcome to Tip Calculator Tool
        </h1>
        <Separator className="my-4" />
      </div>

      <div className="max-w-5xl w-full mt-0">
        <h1 className="text-xl font-bold lg:text-3xl md:text-2xl sm:text-xl text-start mb-2">
          Tip Calculate
        </h1>
        <p className="opacity-50 text-[12px] lg:text-base">
          Easily calculate the perfect tip for your restaurant bill! Whether
          you&apos;re dining out or splitting the bill with friends, our Tip
          Calculator helps you determine the right amount to tip based on your
          bill and desired percentage.
        </p>
      </div>

      <div className="mb-32 grid lg:max-w-5xl lg:w-full w-full lg:mb-0 lg:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="w-100 space-y-1">
            <Label htmlFor="bill-amount">Bill Amount</Label>
            <div className="relative">
              <Input
                type="text"
                className="w-full text-end shadow-sm border-none ring-0 focus:ring-0 focus-visible:ring-0 bg-secondary text-secondary-foreground"
                id="bill-amount"
                placeholder="Enter Bill Amount"
                value={strBillAmount}
                onBlur={handleBillAmountBlur}
                onChange={handleBillAmountChange}
                onFocus={handleBillAmountFocus}
              />
              <div className="absolute left-0 top-0 h-full w-10 flex items-center justify-center pointer-events-none">
                <span className="text-muted-foreground">
                  <DollarSign size={15} />
                </span>
              </div>
            </div>
          </div>
          <div className="w-100 space-y-1">
            <Label htmlFor="tip">Select Tip %</Label>
            <RadioGroup defaultValue="option-one">
              <div className="grid grid-cols-3 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-5 gap-2">
                {tips.map((tip, index) => (
                  <div key={index}>
                    <RadioGroupItem
                      value={tip.value.toString()}
                      id={tip.value.toString()}
                      className="hidden"
                      checked={tip.value === tipPercent}
                    />
                    <Label htmlFor={tip.value.toString()}>
                      <Button
                        variant="secondary"
                        className={`w-full ${
                          tip.value === tipPercent
                            ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                            : ""
                        }`}
                        onClick={() => handleButtonClick(tip.value.toString())}
                      >
                        {tip.label}
                      </Button>
                    </Label>
                  </div>
                ))}
                <div className="custom-input">
                  <Input
                    type="text"
                    className="w-full shadow-sm border-none ring-0 focus:ring-0 focus-visible:ring-0 text-center"
                    value={strTipPercent}
                    onChange={handleTipPercentChange}
                    onBlur={handleTipPercentBlur}
                  />
                </div>
              </div>
            </RadioGroup>
          </div>
          <div className="w-100 space-y-1">
            <Label htmlFor="numberOfPeople">Number of people</Label>
            <div className="relative">
              <Input
                type="text"
                className="w-full text-end shadow-sm border-none ring-0 focus:ring-0 focus-visible:ring-0 bg-secondary text-secondary-foreground"
                id="numberOfPeople"
                value={numberOfPeople}
                onChange={handlePeopleChange}
                onFocus={handlePeopleFocus}
              />
              <div className="absolute left-0 top-0 h-full w-10 flex items-center justify-center pointer-events-none">
                <span className="text-muted-foreground">
                  {numberOfPeople <= 1 ? (
                    <UserRound size={15} />
                  ) : (
                    <UsersRound size={15} />
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-4 block lg:hidden md:block sm:block" />

        <div className="flex flex-col justify-between rounded-sm shadow-none px-4">
          <div className="result-container space-y-2">
            <div className="flex justify-between">
              <div>
                <Label>Tip Amount</Label>
                <p className="text-sm text-muted-foreground">/ person</p>
              </div>
              <div className="text-xl lg:text-2xl md:text-2xl sm:text-2xl font-semibold">
                <CountUp
                  start={0}
                  end={tipCountUp.end}
                  decimals={tipCountUp.decimals}
                  duration={2}
                  prefix="$"
                  suffix={tipCountUp.suffix}
                  useEasing={true}
                  redraw={true}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <Label>Total</Label>
                <p className="text-sm text-muted-foreground">/ person</p>
              </div>
              <div className="text-xl lg:text-2xl md:text-2xl sm:text-2xl font-semibold">
                <CountUp
                  start={0}
                  end={totalAmountCountUp.end}
                  decimals={totalAmountCountUp.decimals}
                  duration={2}
                  prefix="$"
                  suffix={totalAmountCountUp.suffix}
                  useEasing={true}
                  redraw={true}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <Label>Total</Label>
                <p className="text-sm text-muted-foreground">Tip Amount</p>
              </div>
              <div className="text-xl lg:text-2xl md:text-2xl sm:text-2xl font-semibold">
                <CountUp
                  start={0}
                  end={totalTipCountUp.end}
                  decimals={totalTipCountUp.decimals}
                  duration={2}
                  prefix="$"
                  suffix={totalTipCountUp.suffix}
                  useEasing={true}
                  redraw={true}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <Label>Total</Label>
                <p className="text-sm text-muted-foreground">All amount</p>
              </div>
              <div className="text-xl lg:text-2xl md:text-2xl sm:text-2xl font-semibold">
                <CountUp
                  start={0}
                  end={totalAllAmountCountUp.end}
                  decimals={totalAllAmountCountUp.decimals}
                  duration={2}
                  prefix="$"
                  suffix={totalAllAmountCountUp.suffix}
                  useEasing={true}
                  redraw={true}
                />
              </div>
            </div>
          </div>
          <Button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white mt-5"
            onClick={handleReset}
          >
            Reset
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Page;
