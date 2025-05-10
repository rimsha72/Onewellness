import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { useState, useEffect } from "react";

// Adjusted data to fluctuate between 0 and 1200 with more curves
const data = [
  { name: "Jan", "Premium Users": 100 },
  { name: "Feb", "Premium Users": 600 },
  { name: "Mar", "Premium Users": 200 },
  { name: "Apr", "Premium Users": 900 },
  { name: "May", "Premium Users": 300 },
  { name: "Jun", "Premium Users": 1100 },
  { name: "Jul", "Premium Users": 400 },
  { name: "Aug", "Premium Users": 800 },
  { name: "Sep", "Premium Users": 200 },
  { name: "Oct", "Premium Users": 1000 },
  { name: "Nov", "Premium Users": 300 },
  { name: "Dec", "Premium Users": 700 },
];

export default function PremiumUserChart() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const CustomTooltip = ({ payload, label }) => {
    if (!payload || payload.length === 0) return null;

    const capitalizeFirstLetter = (text) => {
      return text.replace(/\b\w/g, char => char.toUpperCase());
    };

    return (
      <div className="bg-white p-4 rounded-lg shadow-lg w-[280px]">
        <p className="text-sm text-gray-700 font-semibold my-2">{capitalizeFirstLetter(label)}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-xs text-black-150 py-1 flex gap-2 items-center font-bold">
            <span className="flex gap-2 items-center font-normal text-gray-350">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.stroke }}></div>
              {capitalizeFirstLetter(entry.name)}:
            </span>{" "}
            {entry.value}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full h-[270px] lg:h-[300px] -ml-8">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="name"
            tick={{ fill: "#92929D", fontSize: "14", dy: 12 }}
            axisLine={false}
            tickLine={false}
            padding={{ left: isSmallScreen ? 10 : 50, right: 0 }}
          />
          <YAxis
            tick={{ fill: "#92929D", fontSize: "14" }}
            axisLine={false}
            tickLine={false}
            ticks={[0, 200, 400, 600, 800, 1000, 1200]}
            domain={[0, 1200]}
          />
          {data.map((entry, index) => (
            <ReferenceLine
              key={index}
              x={entry.name}
              stroke="#F1F1F5"
              strokeDasharray="3 3"
            />
          ))}
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="Premium Users" stroke="#42DA82" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}