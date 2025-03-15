"use client";
import ProfitIcon from "@/assets/icons/ProfitIcon";
import { useState } from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { date: "7 Feb 2025", value: 500000 },
  { date: "12 Feb 2025", value: 505000 },
  { date: "17 Feb 2025", value: 502000 },
  { date: "22 Feb 2025", value: 510000 },
  { date: "27 Feb 2025", value: 520000 },
  { date: "28 Feb 2025", value: 550000 }, // Marked Point
  { date: "4 Mar 2025", value: 540000 },
  { date: "9 Mar 2025", value: 570000 },
];

const PerformanceMetrics = () => {
    const [timeStampSelected, settimeStampSelected] = useState<string>("1M")
    const timePeriods=["1M", "3M", "6M", "1Y", "MAX"]
  return (
    <div className="w-full bg-[#1B1A1A] mt-8 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Performance Summary</h2>
      <div className="bg-[#262626] p-2 rounded-lg w-[160px] mb-8">
        <p className="text-lg font-semibold">₹5,50,000</p>
        <div className="flex w-full justify-between items-center mt-2">
            <div className="flex items-center gap-1">
                <ProfitIcon/>
                <text className="text-[#6BBD6E]">
                ₹50,000
                </text>
            </div>
            <div className="border-l-[2px] pl-2 text-[#6BBD6E] border-[#6BBD6E]">
                10%
            </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart  data={data}>
        <CartesianGrid strokeDasharray="4 4" stroke="#3D3D3D" horizontal={true} vertical={false} />
          <XAxis tickLine={false} padding={{ left: 35, right: 35 }} interval={0} dataKey="date" stroke="#ccc" />
          <Tooltip contentStyle={{ background: "#262626", color: "#B0B0B0",borderRadius:'6px',border:"1px solid #0080FF" }} />
          <Line type="monotone" dataKey="value" stroke="#0080FF" strokeWidth={2} dot={{ fill: "#00aaff", r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-2 mt-6">
        {timePeriods.map((period) => (
          <button key={period} className={period===timeStampSelected? "px-5 py-1 bg-[#0070DF] text-white rounded-md text-sm cursor-pointer":"px-5 py-1text-white rounded-md text-sm cursor-pointer"} onClick={()=>{
            settimeStampSelected(period)
          }}>
            {period}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PerformanceMetrics;
