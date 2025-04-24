'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StockSummaryProps {
  ticker: string;
  // In a real app, you might fetch this data
  name?: string;
  lastPrice?: number;
  percentChange?: number;
}

// Mock data for demonstration
const mockStockData: { [key: string]: Omit<StockSummaryProps, 'ticker'> } = {
  ORI: {
    name: "Old Republic International",
    lastPrice: 28.50,
    percentChange: 1.25,
  },
  // Add other tickers if needed
};

const StockSummary: React.FC<StockSummaryProps> = ({ ticker }) => {
  const data = mockStockData[ticker] || {
    name: "N/A",
    lastPrice: 0,
    percentChange: 0,
  };

  const changeColor = data.percentChange && data.percentChange >= 0 ? 'text-green-600' : 'text-red-600';

  return (
    <Card className="w-full text-sm">
      <CardHeader className="p-3">
        <CardTitle className="text-base flex justify-between items-baseline">
          <span>{data.name} ({ticker})</span>
          <span className="text-lg font-bold">${data.lastPrice?.toFixed(2)}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-0 flex justify-end">
        <span className={`${changeColor} font-medium`}>
          {data.percentChange && data.percentChange >= 0 ? '+' : ''}
          {data.percentChange?.toFixed(2)}%
        </span>
      </CardContent>
    </Card>
  );
};

export default StockSummary; 