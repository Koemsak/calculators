"use client";

import React from "react";
import GaugeChart from "react-gauge-chart";

interface BMIChartProps {
  bmi: number;
}

const BMIChart: React.FC<BMIChartProps> = ({ bmi }: BMIChartProps) => {
  // Map BMI to gauge percentage (0 to 1 scale for react-gauge-chart)
  const bmiToGauge = (bmi: number) => {
    const maxBmi = 40;
    return Math.min(Math.max(bmi / maxBmi, 0), 1);
  };
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Body Mass Index</h2>
      <div className="mt-6">
        <GaugeChart
          id="bmi-gauge"
          nrOfLevels={5}
          colors={["#3B82F6", "#10B981", "#FBBF24", "#F97316", "#EF4444"]}
          arcWidth={0.3}
          percent={bmiToGauge(bmi)}
          textColor="#3B82F6"
          needleColor="#EF4444"
          needleBaseColor="#F97316"
          formatTextValue={() => `${bmi}`}
          arcsLength={[0.4625, 0.16, 0.1225, 0.1225, 0.125]}
          arcPadding={0.01}
        />
        <div className="flex justify-between text-sm mt-2">
          <p className="flex flex-col items-center">
            <span>Underweight</span>{" "}
            <span className="font-bold text-blue-500">(&lt;18.5)</span>
          </p>
          <p className="flex flex-col items-center">
            <span>Normal</span>{" "}
            <span className="font-bold text-green-500">(18.5-24.9)</span>
          </p>
          <p className="flex flex-col items-center">
            <span>Overweight</span>{" "}
            <span className="font-bold text-yellow-500">(25-29.9)</span>
          </p>
          <p className="flex flex-col items-center">
            <span>Obese</span>{" "}
            <span className="font-bold text-orange-500">(30-34.9)</span>
          </p>
          <p className="flex flex-col items-center">
            <span>Extremely Obese</span>{" "}
            <span className="font-bold text-red-500">(&gt;35)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BMIChart;
