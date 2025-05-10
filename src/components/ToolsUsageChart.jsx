import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { useState, useEffect } from "react";

// Cap values at 300
const data = [
  { name: "Jan", AIBOT: 222, ProblemSolving: 95, Community: 167 },
  { name: "Feb", AIBOT: 233, ProblemSolving: 122, Community: 122 },
  { name: "Mar", AIBOT: 227, ProblemSolving: 167, Community: 0 },
  { name: "Apr", AIBOT: 300, ProblemSolving: 222, Community: 150 }, // Capped AIBOT at 300 (was 333)
  { name: "May", AIBOT: 278, ProblemSolving: 133, Community: 172 },
  { name: "Jun", AIBOT: 300, ProblemSolving: 250, Community: 161 }, // Capped AIBOT at 300 (was 322)
  { name: "Jul", AIBOT: 300, ProblemSolving: 239, Community: 150 }, // Capped AIBOT at 300 (was 339)
  { name: "Aug", AIBOT: 278, ProblemSolving: 167, Community: 211 },
  { name: "Oct", AIBOT: 300, ProblemSolving: 194, Community: 178 }, // Capped AIBOT at 300 (was 306)
  { name: "Nov", AIBOT: 233, ProblemSolving: 150, Community: 122 },
  { name: "Dec", AIBOT: 278, ProblemSolving: 122, Community: 167 },
];

export default function ToolsUsageChart() {
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
            ticks={[0, 50, 100, 150, 200, 250, 300]} // Removed 350
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
          <Line type="monotone" dataKey="AIBOT" stroke="#42DA82" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="ProblemSolving" stroke="#009499" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="Community" stroke="#F05D3D" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}