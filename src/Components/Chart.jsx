import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ ratings }) => {
  if (!ratings) return null;

  const reversedData = [...ratings].reverse();

  return (
    <div className=" shadow-md p-4 mt-6">
      <h2 className="text-xl font-semibold text-[#632EE3] mb-4">
        Ratings 
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={reversedData}
          layout="vertical"
          // margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Bar dataKey="count" fill="#FF8811"  />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
