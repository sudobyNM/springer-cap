export type MonthlySales = {
  month: string;
  sales: number;
};

export type YearlySales = Record<string, MonthlySales[]>;

// Mock sales data for 2022, 2023, 2024
// Values are synthetic but within a realistic range for demonstration purposes.
export const salesByYear: YearlySales = {
  "2022": [
    { month: "Jan", sales: 18200 },
    { month: "Feb", sales: 19550 },
    { month: "Mar", sales: 21010 },
    { month: "Apr", sales: 20040 },
    { month: "May", sales: 22330 },
    { month: "Jun", sales: 21480 },
    { month: "Jul", sales: 22890 },
    { month: "Aug", sales: 21970 },
    { month: "Sep", sales: 23110 },
    { month: "Oct", sales: 24030 },
    { month: "Nov", sales: 24820 },
    { month: "Dec", sales: 25950 }
  ],
  "2023": [
    { month: "Jan", sales: 20500 },
    { month: "Feb", sales: 21420 },
    { month: "Mar", sales: 22600 },
    { month: "Apr", sales: 21950 },
    { month: "May", sales: 23580 },
    { month: "Jun", sales: 22990 },
    { month: "Jul", sales: 24110 },
    { month: "Aug", sales: 23850 },
    { month: "Sep", sales: 24740 },
    { month: "Oct", sales: 25520 },
    { month: "Nov", sales: 26360 },
    { month: "Dec", sales: 27510 }
  ],
  "2024": [
    { month: "Jan", sales: 22300 },
    { month: "Feb", sales: 23240 },
    { month: "Mar", sales: 24590 },
    { month: "Apr", sales: 23980 },
    { month: "May", sales: 25460 },
    { month: "Jun", sales: 24990 },
    { month: "Jul", sales: 26130 },
    { month: "Aug", sales: 25870 },
    { month: "Sep", sales: 26790 },
    { month: "Oct", sales: 27650 },
    { month: "Nov", sales: 28520 },
    { month: "Dec", sales: 29840 }
  ]
};

export const years = Object.keys(salesByYear);
