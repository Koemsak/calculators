"use client";

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface RadialChartProps {
  totalPrincipal: number;
  totalInterest: number;
  totalAmount: number;
  currency: string;
}

const chartConfig = {
  principle: {
    label: "Principle Amount",
    color: "hsl(var(--chart-2))",
  },
  interest: {
    label: "Interest Amount",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const RadialChart: React.FC<RadialChartProps> = ({
  totalPrincipal,
  totalInterest,
  totalAmount,
  currency,
}) => {
  const chartData = [{ principle: totalPrincipal, interest: totalInterest }];
  const formatLargeNumber = (num: number): string => {
    if (num >= 1_000_000_000) {
      return `${(num / 1_000_000_000).toFixed(1)}B`;
    } else if (num >= 1_000_000) {
      return `${(num / 1_000_000).toFixed(1)}M`;
    } else if (num >= 1_000) {
      return `${(num / 1_000).toFixed(1)}K`;
    } else {
      return num.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
  };

  const formatNumber = (num: number): string => {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };
  const getFontSizeClass = (num: number): string => {
    if (num >= 1_000_000_000) return "text-xl";
    if (num >= 1_000_000) return "text-2xl";
    return "text-3xl";
  };

  const getCurrencySign = (currency: string) => {
    return currency === "USD" ? "$" : "៛";
  }
  return (
    <div className="flex flex-col items-center">
      <ChartContainer config={chartConfig} className="h-[130px] w-[250px]">
        <RadialBarChart
          data={chartData}
          startAngle={180}
          endAngle={0}
          innerRadius={80}
          outerRadius={130}
          cx="50%"
          cy="80%"
        >
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) - 35}
                        className="fill-muted-foreground"
                      >
                        Total Payment
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy || 0}
                        className={`fill-foreground font-bold breakdown-text ${getFontSizeClass(
                          totalAmount
                        )}`}
                      >
                        {getCurrencySign(currency)}{formatLargeNumber(totalAmount)}
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
          <RadialBar
            dataKey="principle"
            stackId="a"
            cornerRadius={5}
            fill="var(--color-principle)"
            className="stroke-transparent stroke-2"
          />
          <RadialBar
            dataKey="interest"
            stackId="a"
            cornerRadius={5}
            fill="var(--color-interest)"
            className="stroke-transparent stroke-2"
          />
        </RadialBarChart>
      </ChartContainer>
      <div className="w-full max-w-md">
        <h3 className="text-lg font-semibold mb-2">Payment Details</h3>
        <div className="grid grid-cols-2 gap-2 text-sm breakdown-text">
          <span className="text-muted-foreground">Principal Amount:</span>
          <span className="text-right">{getCurrencySign(currency)} {formatNumber(totalPrincipal)}</span>

          <span className="text-muted-foreground">Interest Amount:</span>
          <span className="text-right">{getCurrencySign(currency)} {formatNumber(totalInterest)}</span>

          <span className="font-semibold">Total Amount to Pay:</span>
          <span className="text-right font-semibold">
            {getCurrencySign(currency)} {formatNumber(totalAmount)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RadialChart;