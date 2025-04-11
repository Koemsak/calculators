import AdSenseAd from "@/components/AdSenseAd";
import Hero from "@/components/hero";
import { Separator } from "@/components/ui/separator";
import { CircleDollarSign, Diameter, PackageOpen, Radius } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 space-y-10">
      <AdSenseAd />
      <Hero />

      <div className="flex flex-col h-full space-y-8 max-w-5xl w-full text-sm lg:flex lg:flex-col">
        <h1 className="text-lg font-bold tracking-tight lg:text-4xl md:text-3xl sm:text-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
          Our Features
        </h1>
        <p className="opacity-50 text-[12px] lg:text-base">
          Pick a tool and try it out! Whether it&apos;s converting units, checking
          your BMI, calculating a tip, or planning a loan, we&apos;re here to make
          your day easier. Have feedback or a tool idea? Let us know—we&apos;re
          always improving!
        </p>
        <Separator className="my-2" />
      </div>

      <div className="mb-32 grid lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left gap-2">
        <Link
          href="/tip-calculator"
          className="group rounded-md shadow-sm px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2
            className={`mb-3 text-lg lg:text-2xl md:text-xl font-semibold flex items-center gap-4`}
          >
            <PackageOpen className="text-red-500" /> <span className="bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">Tip Calucator</span> 
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Easily calculate the perfect tip for your restaurant bill! Whether
            you&apos;re dining out or splitting the bill with friends, our Tip
            Calculator helps you determine the right amount to tip based on your
            bill and desired percentage.
          </p>
        </Link>

        <Link
          href="/unit-convertor"
          className="group rounded-md shadow-sm  px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`mb-3 text-lg lg:text-2xl md:text-xl font-semibold flex items-center gap-4`}
          >
            <Diameter className="text-cyan-500" /> <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">Unit Convertor</span> 
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
          className="group rounded-md shadow-sm px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`mb-3 text-lg lg:text-2xl md:text-xl font-semibold flex items-center gap-4`}
          >
            <Radius className="text-fuchsia-500" /> <span className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">BMI Calculator</span> 
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Curious about your Body Mass Index (BMI)? Use our BMI Calculator to
            find out! Just enter your height and weight, and we&apos;ll calculate
            your BMI instantly. Learn more about what your BMI means for your
            health.
          </p>
        </Link>

        <Link
          href="/loan-calculator"
          className="group rounded-md shadow-sm px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`mb-3 text-lg lg:text-2xl md:text-xl font-semibold flex items-center gap-4`}
          >
            <CircleDollarSign className="text-teal-500" /> <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">Loand Calculator</span> 
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Plan your finances with our Loan Calculator! Input your loan amount,
            interest rate, and term to calculate your monthly payments and total
            interest. Ideal for budgeting a car loan, mortgage, or personal
            loan.
          </p>
        </Link>
      </div>

      <div className="flex flex-col h-full space-y-8 max-w-5xl w-full text-sm lg:flex lg:flex-col">
        <h1 className="text-lg font-bold tracking-tight lg:text-4xl md:text-3xl sm:text-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
          Why Choose Our Calculator Tools?
        </h1>
        <Separator className="my-2" />
        <ul className="list-disc list-inside text-sm lg:text-base space-y-2">
          <li>
            <strong>Free & No Registration:</strong> Jump right in—no accounts
            or payments required.
          </li>
          <li>
            <strong>Accurate & Reliable:</strong> Built with precision to give
            you trustworthy results.
          </li>
          <li>
            <strong>User-Friendly Design:</strong> Simple inputs, clear
            outputs—designed for everyone.
          </li>
          <li>
            <strong>Updated for 2025:</strong> Fresh, modern tools tailored to
            today&apos;s needs.
          </li>
        </ul>
      </div>
    </main>
  );
}
