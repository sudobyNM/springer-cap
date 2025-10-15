"use client";
import React from "react";

type Props = {
  years: string[];
  value: string;
  onChange: (year: string) => void;
};

const YearSelector: React.FC<Props> = ({ years, value, onChange }) => {
  return (
    <label className="flex items-center gap-2 text-sm text-slate-700">
      <span>Year:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-md border border-slate-300 bg-white px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </label>
  );
};

export default YearSelector;
