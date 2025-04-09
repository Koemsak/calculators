import { Separator } from "@/components/ui/separator";
import {
  CircleDollarSign,
  Diameter,
  PackageOpen,
  Radius,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 space-y-10">
      <div className="flex flex-col items-center justify-center h-full space-y-8 max-w-5xl w-full text-sm lg:flex lg:flex-col">
        <h1 className="text-lg font-bold tracking-tight lg:text-4xl md:text-3xl sm:text-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
          Welcome to Tool Calculator
        </h1>
        <Separator className="my-4" />
      </div>

      <div className="mb-32 grid lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left gap-2">
        <Link
          href="/tip-calculator"
          className="group rounded-lg border border-gray-100 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2
            className={`mb-3 text-lg lg:text-2xl md:text-xl font-semibold flex items-center gap-4`}
          >
            <PackageOpen /> Tip Calucator
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Easily calculate the perfect tip for your restaurant bill! Whether
            you're dining out or splitting the bill with friends, our Tip
            Calculator helps you determine the right amount to tip based on your
            bill and desired percentage.
          </p>
        </Link>

        <Link
          href="/unit-convertor"
          className="group rounded-lg border border-gray-100  px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`mb-3 text-lg lg:text-2xl md:text-xl font-semibold flex items-center gap-4`}
          >
            <Diameter /> Unit Convertor
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Convert units effortlessly with our Unit Converter! From length
            (inches to centimeters) to weight (pounds to kilograms) and more,
            this tool makes unit conversion a breeze. Perfect for students,
            travelers, and professionals.
          </p>
        </Link>

        <Link
          href="/bmi-calculator"
          className="group rounded-lg border border-gray-100 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`mb-3 text-lg lg:text-2xl md:text-xl font-semibold flex items-center gap-4`}
          >
            <Radius /> BMI Calculator
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Curious about your Body Mass Index (BMI)? Use our BMI Calculator to
            find out! Just enter your height and weight, and we’ll calculate
            your BMI instantly. Learn more about what your BMI means for your
            health.
          </p>
        </Link>

        <Link
          href="/loan-calculator"
          className="group rounded-lg border border-gray-100 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`mb-3 text-lg lg:text-2xl md:text-xl font-semibold flex items-center gap-4`}
          >
            <CircleDollarSign /> Loand Calculator
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Plan your finances with our Loan Calculator! Input your loan amount,
            interest rate, and term to calculate your monthly payments and total
            interest. Ideal for budgeting a car loan, mortgage, or personal
            loan.
          </p>
        </Link>
      </div>
    </main>
  );
}
