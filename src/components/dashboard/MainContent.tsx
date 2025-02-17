import React from "react";
import StatsGrid from "./StatsGrid";
import QuickActions from "./QuickActions";
import RecentActivity from "./RecentActivity";

interface MainContentProps {
  stats?: {
    products: number;
    orders: number;
    categories: number;
  };
}

const MainContent = ({
  stats = {
    products: 156,
    orders: 32,
    categories: 12,
  },
}: MainContentProps) => {
  return (
    <div className="flex-1 p-8 bg-gray-50 min-h-screen">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <p className="text-muted-foreground mt-2">
            Welcome back! Here's what's happening with your store today.
          </p>
        </div>

        <StatsGrid stats={stats} />

        <QuickActions />

        <RecentActivity />
      </div>
    </div>
  );
};

export default MainContent;
