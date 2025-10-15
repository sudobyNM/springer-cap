"use client";
import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import type { MonthlySales } from "@/data/sales";
import type { ChartType } from "@/components/molecules/ChartTypeSwitcher";

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
  "#f97316",
  "#10b981",
  "#3b82f6",
  "#e11d48",
  "#22c55e",
  "#a855f7",
];

export type SalesChartProps = {
  data: MonthlySales[];
  chartType: ChartType;
  threshold?: number;
};

const SalesChart: React.FC<SalesChartProps> = ({ data = [], chartType, threshold }) => {
  const filtered = useMemo(() => {
    if (!data || !Array.isArray(data)) return [];
    if (!threshold || Number.isNaN(threshold)) return data;
    return data.filter((d) => d.sales >= threshold);
  }, [data, threshold]);

  // Show loading state if no data
  if (!filtered.length) {
    return (
      <div className="w-full h-[380px] flex items-center justify-center">
        <div className="text-slate-400">No data available</div>
      </div>
    );
  }

  const renderChart = () => {
    switch (chartType) {
      case "line":
        return (
          <LineChart data={filtered} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#16a34a" strokeWidth={2} dot={false} name="Sales" />
          </LineChart>
        );
      case "pie":
        return (
          <PieChart>
            <Tooltip />
            <Legend />
            <Pie
              data={filtered}
              dataKey="sales"
              nameKey="month"
              cx="50%"
              cy="50%"
              outerRadius={130}
              label
            >
              {filtered.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        );
      default:
        return (
          <BarChart data={filtered} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#2563eb" name="Sales" />
          </BarChart>
        );
    }
  };

  return (
    <div className="w-full h-[380px]">
      <ResponsiveContainer width="100%" height="100%">
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
