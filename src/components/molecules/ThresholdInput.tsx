"use client";
import React from "react";

type Props = {
  value: number;
  onChange: (v: number) => void;
};

const ThresholdInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <label className="flex items-center gap-2 text-sm text-slate-700">
      <span>Sales threshold:</span>
      <input
        type="number"
        value={value}
        min={0}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-32 rounded-md border border-slate-300 bg-white px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
        placeholder="e.g. 25000"
      />
    </label>
  );
};

export default ThresholdInput;
