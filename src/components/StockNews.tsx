'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface StockNewsProps {
  ticker: string;
}

// Mock data for demonstration
const mockNewsData: { [key: string]: { title: string; source: string; time: string }[] } = {
  ORI: [
    { title: "Old Republic Reports Strong Quarterly Earnings", source: "Financial Times", time: "2h ago" },
    { title: "ORI Announces Dividend Increase Amidst Positive Outlook", source: "Bloomberg", time: "4h ago" },
    { title: "Analysts Upgrade Old Republic International (ORI) Stock Rating", source: "Reuters", time: "6h ago" },
    { title: "ORI Expands into New Insurance Market Segment", source: "MarketWatch", time: "8h ago" },
    { title: "Insurance Sector Sees Growth, ORI Leads the Pack", source: "The Wall Street Journal", time: "1d ago" },
    { title: "Old Republic CEO Discusses Future Strategy in Interview", source: "CNBC", time: "1d ago" },
    { title: "ORI Stock Hits 52-Week High After Positive News", source: "Yahoo Finance", time: "2d ago" },
  ],
  // Add other tickers if needed
};

const StockNews: React.FC<StockNewsProps> = ({ ticker }) => {
  const newsItems = mockNewsData[ticker] || [];

  return (
    <Card className="w-full mt-4">
      <CardHeader className="p-3">
        <CardTitle className="text-base">Recent News for {ticker}</CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <ul className="space-y-3">
          {newsItems.map((item, index) => (
            <React.Fragment key={index}>
              <li>
                <h4 className="text-sm font-medium hover:underline cursor-pointer">{item.title}</h4>
                <div className="text-xs text-muted-foreground flex justify-between mt-1">
                  <span>{item.source}</span>
                  <span>{item.time}</span>
                </div>
              </li>
              {index < newsItems.length - 1 && <Separator />}
            </React.Fragment>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default StockNews; 