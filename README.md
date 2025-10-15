# Sales Dashboard

A modern, interactive sales dashboard built with Next.js 15, TypeScript, Tailwind CSS, and Recharts. Visualize and analyze sales data across different years with multiple chart types and filtering options.

## 🚀 Features

- **Multiple Chart Types**: Toggle between bar, line, and pie charts
- **Year Selection**: View sales data for 2022, 2023, and 2024
- **Threshold Filtering**: Filter data points based on sales amount
- **Responsive Design**: Works on desktop and mobile devices
- **Mock & API Data**: Toggle between mock data and API data source

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **State Management**: React Hooks
- **Build Tool**: Vite (via Next.js)

## 📦 Project Structure

```
src/
├── app/                    # App router pages
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard page
│   └── page.tsx           # Home page
├── components/
│   ├── atoms/            # Atomic design atoms
│   ├── molecules/        # Molecular components
│   └── organisms/        # Complex components
├── data/                 # Mock data and types
└── styles/               # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sales-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Using the Dashboard

1. **Navigate to Dashboard**: Click the "Open Dashboard" button on the home page
2. **Select Year**: Choose between 2022, 2023, or 2024 data
3. **Change Chart Type**: Toggle between bar, line, and pie charts
4. **Set Threshold**: Filter data points by minimum sales amount
5. **Toggle Data Source**: Switch between mock data and API data (when available)

## 📊 Data Structure

Sales data is structured as an object with years as keys and arrays of monthly sales data:

```typescript
type MonthlySales = {
  month: string;  // e.g. "Jan", "Feb", etc.
  sales: number;  // Sales amount
};

type YearlySales = Record<string, MonthlySales[]>;  // { "2024": [...], "2023": [...], ... }
```

## 🚀 Deployment

### Vercel

The easiest way to deploy this application is to use [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Next.js, including:

- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Railway](https://railway.app/)
- [Docker](https://www.docker.com/)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Recharts](https://recharts.org/) for the charting library
- [Tailwind CSS](https://tailwindcss.com/) for styling utilities
