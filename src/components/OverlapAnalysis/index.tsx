import React from 'react';
import { Sankey, Tooltip, ResponsiveContainer } from 'recharts';

const data = {
  nodes: [
    { name: "ICICI Prudential Bluechip Fund", fill: "#ff9800" },
    { name: "HDFC Top 100 Fund", fill: "#c2185b" },
    { name: "SBI Bluechip Fund", fill: "#2196f3" },
    { name: "Axis Bluechip Fund", fill: "#4caf50" },
    { name: "Mirae Asset Large Cap Fund", fill: "#ff5722" },

    { name: "Reliance Industries (RIL)", fill: "#008000" },
    { name: "HDFC Bank", fill: "#c4a000" },
    { name: "TCS", fill: "#00bcd4" },
    { name: "Infosys", fill: "#8a2be2" },
    { name: "ICICI Bank", fill: "#ff4081" },
    { name: "Kotak Mahindra Bank", fill: "#795548" },
    { name: "Bajaj Finance", fill: "#ffeb3b" },
    { name: "Larsen & Toubro", fill: "#03a9f4" },
    { name: "State Bank of India (SBI)", fill: "#9c27b0" },
  ],
  links: [
    { source: 0, target: 5, value: 25, stroke: "#FF5733" },
    { source: 0, target: 6, value: 22, stroke: "#33FF57" },
    { source: 0, target: 7, value: 20, stroke: "#3385FF" },
    { source: 0, target: 8, value: 18, stroke: "#FF33A6" },
    { source: 0, target: 9, value: 15, stroke: "#FFC300" },
    { source: 1, target: 6, value: 28, stroke: "#FF5733" },
    { source: 1, target: 9, value: 24, stroke: "#33FF57" },
    { source: 1, target: 5, value: 20, stroke: "#3385FF" },
    { source: 1, target: 10, value: 18, stroke: "#FF33A6" },
    { source: 1, target: 11, value: 10, stroke: "#FFC300" },
    { source: 2, target: 5, value: 27, stroke: "#FF5733" },
    { source: 2, target: 7, value: 23, stroke: "#33FF57" },
    { source: 2, target: 6, value: 21, stroke: "#3385FF" },
    { source: 2, target: 8, value: 17, stroke: "#FF33A6" },
    { source: 2, target: 12, value: 12, stroke: "#33FFF5" },
    { source: 3, target: 7, value: 26, stroke: "#FF5733" },
    { source: 3, target: 8, value: 24, stroke: "#33FF57" },
    { source: 3, target: 6, value: 22, stroke: "#3385FF" },
    { source: 3, target: 5, value: 18, stroke: "#FF33A6" },
    { source: 3, target: 13, value: 10, stroke: "#FFC300" },
    { source: 4, target: 5, value: 24, stroke: "#FF5733" },
    { source: 4, target: 6, value: 23, stroke: "#33FF57" },
    { source: 4, target: 7, value: 22, stroke: "#3385FF" },
    { source: 4, target: 8, value: 20, stroke: "#FF33A6" },
    { source: 4, target: 9, value: 11, stroke: "#33FFF5" },
  ],
};

const OverlapAnalysis = () => {
  return (
    <div className="w-full p-6 bg-[#1B1A1A] text-white rounded-lg">
      {/* Header */}
      <div className="flex gap-2 items-center">
        <h2 className="text-lg font-bold mb-4">Overlap Analysis</h2>
        <div className="mb-4">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#888888" strokeWidth="2" />
            <text x="12" y="16" textAnchor="middle" fill="#888888" fontSize="12" fontWeight="bold">i</text>
          </svg>
        </div>
      </div>
      <p className="text-sm mb-2 text-[#E7E7E7]">
        Comparing: <b>ICICI Prudential Bluechip Fund, </b>
        <b>HDFC Top 100 Fund, </b>
        <b>SBI Bluechip Fund, </b>
        <b>Axis Bluechip Fund</b> and {' '}
        <b>Mirae Asset Large Cap Fund</b>
      </p>

      {/* Legend */}
      <ul className="text-xs mb-4 flex flex-col gap-2">
        <li className="flex gap-1">
          <span className="text-[#FFEBA8]">•</span>
          <span>
            <b>X Stocks Overlap</b> across these funds.
          </span>
        </li>
        <li className="flex gap-1">
          <span className="text-[#FFEBA8]">•</span>
          <span>
            <b>Y% Average Overlap</b> in holdings.
          </span>
        </li>
      </ul>

      {/* Sankey Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <Sankey
          data={data}
          node={({ x, y, width, height, index }) => {
            const nodeColor = data.nodes[index]?.fill || "#FFBF38";
            const isLeftNode = index < 5; // First 4 nodes are funds (left side)
            
            return (
              <g>
                {/* Vertical color bar */}
                <rect
                  x={isLeftNode ? x - width/2 : x + width/2}
                  y={y-2}
                  width={8}
                  height={height+4}
                  fill={nodeColor}
                  rx={4}
                  ry={4}
                />
                
                {/* Fund box - only for left nodes */}
                {isLeftNode && (
                  <rect
                    x={x - 140}
                    y={y + height/2 - 25}
                    width={130}
                    height={50}
                    fill={nodeColor}
                    rx={6}
                    ry={6}
                  />
                )}
                
                {/* Text label */}
                <text
                  x={isLeftNode ? x - 75 : x + 16}
                  y={y + height/2 + 2}
                  fill="white"
                  fontSize={12}
                  fontWeight="bold"
                  textAnchor={isLeftNode ? "middle" : "start"}
                  dominantBaseline="middle"
                >
                  {isLeftNode 
                    ? data.nodes[index].name.length > 20 
                      ? data.nodes[index].name.substring(0, 20) + "..." 
                      : data.nodes[index].name
                    : data.nodes[index].name}
                </text>
              </g>
            );
          }}
          link={{
            stroke: "#333",
            strokeOpacity: 0.7,
            strokeWidth: 6,
            fill: "none"
          }}
          nodePadding={20}
          nodeWidth={4}
          margin={{ top: 20, right: 180, bottom: 20, left: 150 }}
        >
          <Tooltip />
        </Sankey>
      </ResponsiveContainer>
      
      {/* Circular markers */}
    </div>
  );
};

export default OverlapAnalysis;