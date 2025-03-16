import React from "react";

const PortfolioComposition = () => {
  const sectorData = [
    { name: "Financial", money: 2157662, percentage: 38.36,stocks:['HDFC',"TCS","INFOSYS"]},
    { name: "IT", money: 2003910, percentage: 35.63,stocks:['HDFC',"TCS","INFOSYS"] },
    { name: "Energy/Conglomerate", money: 1303288, percentage: 23.17,stocks:['HDFC',"TCS","INFOSYS"] },
    { name: "Industrials", money: 159840, percentage: 2.84,stocks:['HDFC',"TCS","INFOSYS"] },
  ];

  const colors = ["#9BB0C7", "#ADB8CF", "#C6C4D8", "#DAD3E1", "#EBE2EA", "#F8F3F5"];

  // Splitting into two rows
  const firstRow = sectorData.slice(0, Math.ceil(sectorData.length / 2));
  const secondRow = sectorData.slice(Math.ceil(sectorData.length / 2));

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
                  <p className="text-[#2A313C] font-bold text-md">{sector.name}</p>
                  <p className="text-sm text-[#2A313C]">₹{sector.money.toLocaleString("en-IN")}</p>
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
