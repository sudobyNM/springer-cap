"use client";
import React from "react";
import Button from "@/components/atoms/Button";

export type ChartType = "bar" | "line" | "pie";

type Props = {
  value: ChartType;
  onChange: (v: ChartType) => void;
};

const ChartTypeSwitcher: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="flex gap-2">
      <Button
        variant={value === "bar" ? "primary" : "secondary"}
        onClick={() => onChange("bar")}
      >
        Bar
      </Button>
      <Button
        variant={value === "line" ? "primary" : "secondary"}
        onClick={() => onChange("line")}
      >
        Line
      </Button>
      <Button
        variant={value === "pie" ? "primary" : "secondary"}
        onClick={() => onChange("pie")}
      >
        Pie
      </Button>
    </div>
  );
};

export default ChartTypeSwitcher;
