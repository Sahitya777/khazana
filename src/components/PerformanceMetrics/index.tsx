"use client";
import ProfitIcon from "@/assets/icons/ProfitIcon";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const dataSets: any = {
  "1M": [
    { date: "7 Feb 2025", value: 500000 },
    { date: "12 Feb 2025", value: 505000 },
    { date: "17 Feb 2025", value: 502000 },
    { date: "22 Feb 2025", value: 510000 },
    { date: "27 Feb 2025", value: 520000 },
    { date: "28 Feb 2025", value: 550000 },
  ],
  "3M": [
    { date: "7 Jan 2025", value: 490000 },
    { date: "17 Jan 2025", value: 495000 },
    { date: "27 Jan 2025", value: 500000 },
    { date: "7 Feb 2025", value: 505000 },
    { date: "17 Feb 2025", value: 502000 },
    { date: "27 Feb 2025", value: 520000 },
    { date: "9 Mar 2025", value: 570000 },
  ],
  "6M": [
    { date: "7 Oct 2024", value: 450000 },
    { date: "7 Nov 2024", value: 460000 },
    { date: "7 Dec 2024", value: 470000 },
    { date: "7 Jan 2025", value: 490000 },
    { date: "7 Feb 2025", value: 500000 },
    { date: "9 Mar 2025", value: 570000 },
  ],
  "1Y": [
    { date: "7 Apr 2024", value: 400000 },
    { date: "7 Jul 2024", value: 420000 },
    { date: "7 Oct 2024", value: 450000 },
    { date: "7 Jan 2025", value: 490000 },
    { date: "9 Mar 2025", value: 570000 },
  ],
  MAX: [
    { date: "7 Apr 2022", value: 300000 },
    { date: "7 Apr 2023", value: 350000 },
    { date: "7 Apr 2024", value: 400000 },
    { date: "7 Jul 2024", value: 420000 },
    { date: "7 Oct 2024", value: 450000 },
    { date: "7 Jan 2025", value: 490000 },
    { date: "9 Mar 2025", value: 570000 },
  ],
};

const PerformanceMetrics = () => {
  const [timeStampSelected, setTimeStampSelected] = useState("1M");
  const timePeriods = ["1M", "3M", "6M", "1Y", "MAX"];

  return (
    <div className="w-full bg-[#1B1A1A] mt-8 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Performance Summary</h2>
      <div className="bg-[#262626] p-2 rounded-lg w-[160px] mb-8">
        <p className="text-lg font-semibold">₹5,50,000</p>
        <div className="flex w-full justify-between items-center mt-2">
          <div className="flex items-center gap-1">
            <ProfitIcon />
            <text className="text-[#6BBD6E]">₹50,000</text>
          </div>
          <div className="border-l-[2px] pl-2 text-[#6BBD6E] border-[#6BBD6E]">
            10%
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dataSets[timeStampSelected]}>
          <CartesianGrid
            strokeDasharray="4 4"
            stroke="#3D3D3D"
            horizontal={true}
            vertical={false}
          />
<XAxis
  tickLine={false}
  padding={{ left: 35, right: 35 }}
  interval={0}
  dataKey="date"
  stroke="#ccc"
  dy={8} 
/>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-[#262626] text-[#B0B0B0] px-3 py-2 rounded-md border border-[#0080FF]">
                    <p>{payload[0].payload.date}</p>
                    <p>Value: {payload[0].payload.value}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#0080FF"
            strokeWidth={2}
            dot={{ fill: "#00aaff", r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-2 mt-6">
        {timePeriods.map((period) => (
          <button
            key={period}
            className={`px-5 py-1 rounded-md text-sm cursor-pointer ${
              period === timeStampSelected
                ? "bg-[#0070DF] text-white"
                : "text-gray-300"
            }`}
            onClick={() => setTimeStampSelected(period)}
          >
            {period}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PerformanceMetrics;
