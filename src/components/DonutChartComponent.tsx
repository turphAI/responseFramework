"use client"; // Need client component for recharts interactivity

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Sample data for stock sectors
const data = [
  { name: 'Technology', value: 400 },
  { name: 'Healthcare', value: 300 },
  { name: 'Financials', value: 300 },
  { name: 'Energy', value: 200 },
  { name: 'Industrials', value: 278 },
  { name: 'Utilities', value: 189 },
];

// Define colors for the segments
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF1943'];

export default function DonutChartComponent() {
  return (
    // ResponsiveContainer makes the chart adapt to its parent size
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          cx="50%" // Center X
          cy="50%" // Center Y
          innerRadius={60} // Creates the donut hole
          outerRadius={80} // Size of the outer ring
          fill="#8884d8" // Default fill (overridden by Cells)
          paddingAngle={5} // Space between segments
          dataKey="value" // Key in data object for segment value
          labelLine={false} // Optional: Hide label lines if crowded
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip /> {/* Shows details on hover */}
        <Legend /> {/* Added Legend component */}
      </PieChart>
    </ResponsiveContainer>
  );
} 