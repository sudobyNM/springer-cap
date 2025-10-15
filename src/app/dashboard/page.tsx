"use client";
import React, { useEffect, useMemo, useState } from "react";
import { salesByYear, years as availableYears } from "@/data/sales";
import YearSelector from "@/components/molecules/YearSelector";
import ThresholdInput from "@/components/molecules/ThresholdInput";
import ChartTypeSwitcher, { ChartType } from "@/components/molecules/ChartTypeSwitcher";
import SalesChart from "@/components/organisms/SalesChart";
import Button from "@/components/atoms/Button";

export default function DashboardPage() {
  const [year, setYear] = useState<string | null>(null);
  const [threshold, setThreshold] = useState<number>(0);
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [useApi, setUseApi] = useState<boolean>(false);
  const [apiData, setApiData] = useState<typeof salesByYear | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Set initial state after component mounts
  useEffect(() => {
    setYear(availableYears[availableYears.length - 1]);
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (!useApi || !year) return;
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/sales");
        const json = await res.json();
        setApiData(json.data);
      } catch (e: any) {
        setError("Failed to fetch API data");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [useApi, year]);

  // Use a default year for initial render to prevent hydration mismatch
  const currentYear = year || availableYears[availableYears.length - 1];

  const data = useMemo(() => {
    const source = useApi && apiData ? apiData : salesByYear;
    return source[currentYear] ?? [];
  }, [currentYear, useApi, apiData]);

  // Show loading state until year is set
  if (year === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Sales Dashboard</h1>
        <div className="text-sm text-slate-500">Next.js 15 • TypeScript • Tailwind • Recharts</div>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <YearSelector years={availableYears} value={currentYear} onChange={setYear} />
        <ThresholdInput value={threshold} onChange={setThreshold} />
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-700">Data source:</span>
          <Button
            variant={!useApi ? "primary" : "secondary"}
            onClick={() => setUseApi(false)}
          >
            Mock
          </Button>
          <Button
            variant={useApi ? "primary" : "secondary"}
            onClick={() => setUseApi(true)}
            disabled={loading}
          >
            {loading ? "Loading..." : "API"}
          </Button>
          {error && <span className="text-xs text-red-600">{error}</span>}
        </div>
      </div>

      <div className="mb-4">
        <ChartTypeSwitcher value={chartType} onChange={setChartType} />
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <SalesChart data={data} chartType={chartType} threshold={threshold} />
      </div>
    </div>
  );
}
