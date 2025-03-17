import axios from "axios";
import React, { useEffect, useState } from "react";

const PortfolioComposition = () => {
  const [sectorData,setSectorData] = useState([
    { sector: "Financial", amount: 2157662, percentage: 38.36},
    { sector: "IT", amount: 2003910, percentage: 35.63},
    { sector: "Energy/Conglomerate", amount: 1303288, percentage: 23.17},
    { sector: "Industrials", amount: 159840, percentage: 2.84},
  ]);

  const colors = ["#9BB0C7", "#ADB8CF", "#C6C4D8", "#DAD3E1", "#EBE2EA", "#F8F3F5"];

  // Splitting into two rows
  const firstRow = sectorData.slice(0, Math.ceil(sectorData.length / 2));
  const secondRow = sectorData.slice(Math.ceil(sectorData.length / 2));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/auth/portfolio_composition');
        if (res?.data?.sector_allocation) {
          const sortedData = res.data.sector_allocation.sort((a:any, b:any) => b.percentage - a.percentage);
          setSectorData(sortedData);
        }
      } catch (error) {
        console.error('Error while fetching data for metrics:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="bg-[#1B1A1A] p-4 rounded-lg w-full mt-8 mx-auto">
      <h2 className="text-white text-lg font-semibold mb-4">Sector Allocation</h2>
      <div className="flex flex-col gap-4">
        {[firstRow, secondRow].map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2 w-full">
            {row.map((sector, index) => (
              <div
                key={index}
                className="p-4 rounded-xl flex flex-col justify-between cursor-pointer"
                style={{
                    height:'180px',
                  backgroundColor: colors[(rowIndex * firstRow.length + index) % colors.length],
                  flexGrow: sector.percentage, // Dynamically scales based on percentage
                }}
              >
                <div>
                  <p className="text-[#2A313C] font-bold text-md">{sector.sector}</p>
                  <p className="text-sm text-[#2A313C]">₹{sector.amount.toLocaleString("en-IN")}</p>
                </div>
                <p className="text-[24px] font-bold text-[#2A313C]">{sector.percentage}%</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioComposition;
