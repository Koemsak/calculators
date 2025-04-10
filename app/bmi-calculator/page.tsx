"use client";

import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import BMIChart from "@/components/bmi-chart";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { getBmiAdvice } from "@/constants/get-bmi-advice";
import { Loader } from "lucide-react";

const page = () => {
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState<"Male" | "Female">("Male");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [loading, setLoading] = useState(false);
  const [bmiTextColor, setBmiTextColor] = useState("");

  const getTextColor = (bmi: number) => {
    if (bmi < 18.5) return "blue-500";
    if (bmi < 25) return "green-500";
    if (bmi < 30) return "yellow-500";
    if (bmi < 35) return "orange-500";
    return "red-500";
  };

  const { category, message, advice } = getBmiAdvice({ bmi, age, gender });
  const bmiText = `Your BMI is ${bmi.toFixed(2)} (${category})`;

  const handleChangeGender = (value: string) => {
    const gender = value as "Male" | "Female";
    setGender(gender);
  };

  const calculateBMI = () => {
    setLoading(true);
    if (age <= 0) {
      toast.error("Please enter a valid age.");
      setLoading(false);
      return;
    }
    if (height <= 0) {
      toast.error("Please enter a valid height.");
      setLoading(false);
      return;
    }
    if (weight <= 0) {
      toast.error("Please enter a valid weight.");
      setLoading(false);
      return;
    }
    if (height > 300) {
      toast.error("Height cannot be more than 300 cm.");
      setLoading(false);
      return;
    }
    if (weight > 500) {
      toast.error("Weight cannot be more than 500 kg.");
      setLoading(false);
      return;
    }
    if (age > 120) {
      toast.error("Age cannot be more than 120 years.");
      setLoading(false);
      return;
    }
    if (weight < 20) {
      toast.error("Weight cannot be less than 20 kg.");
      setLoading(false);
      return;
    }
    if (height < 50) {
      toast.error("Height cannot be less than 50 cm.");
      setLoading(false);
      return;
    }

    const heightInMeters = height / 100;
    const calculatedBmi = weight / (heightInMeters * heightInMeters);
    setBmi(parseFloat(calculatedBmi.toFixed(2)));
    setBmiTextColor(getTextColor(calculatedBmi));
    toast.success(`Your BMI is ${calculatedBmi.toFixed(2)}`);


    setLoading(false);
  };
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      calculateBMI();
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8 space-y-10">
      <div className="flex flex-col items-center justify-center h-full space-y-8 max-w-5xl w-full text-sm lg:flex lg:flex-col">
        <h1 className="text-lg font-bold tracking-tight lg:text-4xl md:text-3xl sm:text-2xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
          Welcome to BMI Calculator
        </h1>
        <Separator className="my-4" />
      </div>

      <Toaster />

      <div className="max-w-5xl w-full mt-0">
        <h1 className="text-xl font-bold lg:text-3xl md:text-2xl sm:text-xl text-start mb-2">
          BMI Calculate
        </h1>
        <p className="opacity-50 text-[12px] lg:text-base">
          Curious about your Body Mass Index (BMI)? Use our BMI Calculator to
          find out! Just enter your height and weight, and we’ll calculate your
          BMI instantly. Learn more about what your BMI means for your health.
        </p>
      </div>

      <div className="max-w-5xl w-full mt-0 grid lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 gap-4">
        <div className="p-4 space-y-2 shadow-md rounded-sm">
          <div className="w-100 space-y-1">
            <Label htmlFor="age">Age</Label>
            <Input
              type="text"
              className="w-full shadow-none ring-0 focus:ring-0 focus-visible:ring-0"
              placeholder="Enter your age"
              id="age"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
            />
          </div>

          <div className="w-100 space-y-1">
            <Label htmlFor="gender">Gender</Label>
            <Select defaultValue="Male" onValueChange={handleChangeGender}>
              <SelectTrigger
                id="gender"
                className="w-full shadow-none ring-0 focus:ring-0 focus-visible:ring-0"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male" className="cursor-pointer">
                  Male
                </SelectItem>
                <SelectItem value="Female" className="cursor-pointer">
                  Female
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-100 space-y-1">
            <Label htmlFor="height">Height (cm)</Label>
            <div className="relative">
              <Input
                type="number"
                className="w-full shadow-none ring-0 focus:ring-0 focus-visible:ring-0"
                placeholder="Enter your height"
                id="height"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                cm
              </span>
            </div>
          </div>

          <div className="w-100 space-y-1">
            <Label htmlFor="height">Weight (Kg)</Label>
            <div className="relative">
              <Input
                type="number"
                className="w-full shadow-none ring-0 focus:ring-0 focus-visible:ring-0"
                placeholder="Enter your weight"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                Kg
              </span>
            </div>
          </div>

          <div className="w-100 space-y-1">
            <Button
              className="w-full bg-gradient-to-r from-slate-400 via-slate-600 to-slate-800 mt-2 rounded-full"
              onClick={calculateBMI}
              onKeyPress={handleKeyPress}
              type="button"
              disabled={loading}
            >
              {
                loading ? (
                  <Loader className="animate-spin" />
                ) : (
                  <span className="text-white">Calculate BMI</span>
                )
              }
            </Button>
          </div>
        </div>
        <div className="p-4 space-y-4 shadow-md rounded-sm">
          <BMIChart bmi={bmi} />
        </div>
      </div>

      {bmi > 0 && (
        <div className={`max-w-5xl w-full mt-0 shadow-md shadow-${bmiTextColor}/25 bg-${bmiTextColor}/25 p-4 rounded-md space-y-2`}>
          <h3 className={`text-xl font-bold text-${bmiTextColor}`}>{bmiText}</h3>
          <p>{message}</p>
          <ul className="list-disc list-inside">
            {advice.map((tip, index) => (
              <li key={index} className="text-sm space-y-1">
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default page;
