"use client";

import React, { useEffect, useRef, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Equal, PackageOpen } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { unitConvertors } from "@/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { unitCalculator } from "@/utils/unit-calculator";

const page = () => {
  const [expression, setExpression] = useState("");
  const [expressionVal1, setExpressionVal1] = useState("");
  const [expressionVal2, setExpressionVal2] = useState("");
  const [scaleUnitOne, setScaleUnitOne] = useState("");
  const [scaleUnitTwo, setScaleUnitTwo] = useState("");
  const [unitValue, setUnitValue] = useState(0);
  const [unitResult, setUnitResult] = useState(0);
  const subCategories = unitConvertors.find(
    (category) => category.value === expression
  );
  const subs = subCategories ? subCategories.subs : [];

  const [formular, setFormula] = useState("");
  const [explanation, setExplanation] = useState("");

  const handleUnitValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUnitValue(parseFloat(value));
  };

  const handleExpressionChange = (value: string) => {
    setExpression(value);
    setExpressionVal1("");
    setExpressionVal2("");
    setScaleUnitOne("");
    setScaleUnitTwo("");
    setUnitResult(0);
    setUnitValue(0);

    setFormula("");
    setExplanation("");
  };

  const handleFirstUnitChange = (value: string) => {
    const jsonValue = JSON.parse(value);
    setExpressionVal1(jsonValue.value);
    setScaleUnitOne(jsonValue.scale);
  };

  const handleSecondUnitChange = (value: string) => {
    const jsonValue = JSON.parse(value);
    setExpressionVal2(jsonValue.value);
    setScaleUnitTwo(jsonValue.scale);
  };

  useEffect(() => {
    const result = unitCalculator(
      expression,
      expressionVal1,
      expressionVal2,
      unitValue
    );
    setUnitResult(result?.result ?? 0);
    setFormula(result?.formula ?? "");
    setExplanation(result?.explanation ?? "");
  }, [expression, expressionVal1, expressionVal2, unitValue]);

  const formatNumber = (value: number) => {
    if (isNaN(value)) return "";

    if (value >= 0.01) {
      return value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    } else {
      // Find how many decimal places until we get a non-zero digit
      const str = value.toString();
      const decimalPart = str.split(".")[1] || "";
      let significantDigits = 0;

      for (let i = 0; i < decimalPart.length; i++) {
        if (decimalPart[i] !== "0") {
          significantDigits = i + 1;
          break;
        }
      }

      return value.toLocaleString("en-US", {
        minimumFractionDigits: significantDigits,
        maximumFractionDigits: significantDigits,
      });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8 space-y-10">
      <div className="flex flex-col items-center justify-center h-full space-y-8 px-4 max-w-5xl w-full text-sm lg:flex lg:flex-col">
        <h1 className="text-lg font-bold tracking-tight lg:text-4xl md:text-3xl sm:text-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
          Welcome to Unit Convertor Tool
        </h1>
        <Separator className="my-4" />
      </div>

      <div className="max-w-5xl w-full mt-0">
        <h1 className="text-xl font-bold lg:text-3xl md:text-2xl sm:text-xl text-start mb-2">
          Unit Convertors
        </h1>
        <p className="opacity-50 text-[12px] lg:text-base">
          Convert units effortlessly with our Unit Converter! From length
          (inches to centimeters) to weight (pounds to kilograms) and more, this
          tool makes unit conversion a breeze. Perfect for students, travelers,
          and professionals.
        </p>
      </div>

      <div className="max-w-5xl w-full mt-0 p-2 space-y-3 lg:p-5 md:p-4 sm:p-3 shadow-md rounded-lg">
        <div className="w-full space-y-1.5">
          <Label htmlFor="expression" className="ml-1">
            Expression to Convert
          </Label>
          <Select onValueChange={handleExpressionChange}>
            <SelectTrigger
              id="expression"
              className="w-full text-end shadow-sm border-none ring-0 focus:ring-0 focus-visible:ring-0 bg-secondary text-secondary-foreground"
            >
              <SelectValue placeholder="Select an expression" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {unitConvertors.map((value, ind) => (
                  <SelectItem
                    key={ind}
                    value={value.value}
                    className="cursor-pointer"
                  >
                    <span className="flex items-center space-x-2">
                      <value.icon size={14} className={`text-blue-500 mr-2`} />{" "}
                      {value.label}
                    </span>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {expression != "" ? (
          <div>
            <div className="w-full flex items-end gap-2">
              <div className="w-full space-y-1.5">
                <Label htmlFor="expression" className="ml-1">
                  From
                </Label>
                <Select onValueChange={handleFirstUnitChange}>
                  <SelectTrigger
                    id="expression"
                    className="w-full text-end shadow-sm border-none ring-0 focus:ring-0 focus-visible:ring-0 bg-secondary text-secondary-foreground"
                  >
                    <SelectValue placeholder="Select a unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {subs.map((value, ind) => (
                        <SelectItem
                          key={ind}
                          value={JSON.stringify(value)}
                          className="cursor-pointer"
                        >
                          {value.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full space-y-1.5">
                <Label htmlFor="expression" className="ml-1">
                  To
                </Label>
                <Select onValueChange={handleSecondUnitChange}>
                  <SelectTrigger
                    id="expression"
                    className="w-full text-end shadow-sm border-none ring-0 focus:ring-0 focus-visible:ring-0 bg-secondary text-secondary-foreground"
                  >
                    <SelectValue placeholder="Select a unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {subs.map((value, ind) => (
                        <SelectItem
                          key={ind}
                          value={JSON.stringify(value)}
                          className="cursor-pointer"
                        >
                          {value.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {expressionVal1 != "" && expressionVal2 != "" && (
              <div className="w-full flex flex-col lg:flex-row md:flex-row sm:flex-col justify-center items-center gap-2 mt-2">
                <div className="w-full space-y-1.5">
                  <div className="relative">
                    <Input
                      type="number"
                      className="w-full shadow-none ring-0 focus:ring-0 focus-visible:ring-0"
                      placeholder="Enter conversion number"
                      onChange={handleUnitValueChange}
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500 text-sm">
                      {scaleUnitOne}
                    </span>
                  </div>
                </div>
                <div className="space-y-1 m-auto">
                  <Button
                    size={"icon"}
                    variant={"secondary"}
                    className="cursor-default"
                  >
                    <Equal />
                  </Button>
                </div>
                <div className="w-full space-y-1.5">
                  <div className="relative">
                    <Input
                      type="text"
                      className="w-full shadow-none ring-0 focus:ring-0 focus-visible:ring-0 bg-secondary border-none"
                      value={formatNumber(unitResult)}
                      readOnly
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500 text-sm">
                      {scaleUnitTwo}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full space-y-3 py-10 text-center">
            <PackageOpen
              strokeWidth={0.5}
              className="mx-auto text-muted-foreground animate-pulse size-24"
            />
            <Label className="text-muted-foreground text-xl font-light text-center animate-pulse">
              No expression selected
            </Label>
          </div>
        )}
      </div>

      {unitValue != 0 && (
        <div className="max-w-5xl w-full mt-0 p-2 space-y-3 lg:p-5 md:p-4 sm:p-3 shadow-md rounded-lg">
          <div className="formula">
            <span className="font-bold">Formula:</span> {formular}
          </div>
          <Separator className="my-2" />
          <div className="formula">
            <span className="font-bold">Explanation:</span>
            <ul>
              {explanation.split(";").map((item, index) => (
                <li key={index} className="list-disc list-inside">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </main>
  );
};

export default page;
