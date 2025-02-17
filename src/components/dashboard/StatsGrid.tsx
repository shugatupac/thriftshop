import React from "react";
import { Card } from "@/components/ui/card";
import { Package2, ShoppingCart, Grid } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
  trendDirection?: "up" | "down";
}

const StatsCard = ({
  title = "Stat Title",
  value = "0",
  icon = <Package2 className="h-6 w-6" />,
  trend = "+0%",
  trendDirection = "up",
}: StatsCardProps) => {
  return (
    <Card className="p-6 bg-white">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
        <div className="p-3 bg-primary/10 rounded-full">{icon}</div>
      </div>
      <div className="mt-4">
        <span
          className={`text-sm font-medium ${trendDirection === "up" ? "text-green-600" : "text-red-600"}`}
        >
          {trend}
        </span>
        <span className="text-sm text-muted-foreground ml-1">
          from last month
        </span>
      </div>
    </Card>
  );
};

interface StatsGridProps {
  stats?: {
    products: number;
    orders: number;
    categories: number;
  };
}

const StatsGrid = ({
  stats = {
    products: 156,
    orders: 32,
    categories: 12,
  },
}: StatsGridProps) => {
  return (
    <div className="w-full bg-background p-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatsCard
          title="Total Products"
          value={stats.products.toString()}
          icon={<Package2 className="h-6 w-6" />}
          trend="+12%"
          trendDirection="up"
        />
        <StatsCard
          title="Pending Orders"
          value={stats.orders.toString()}
          icon={<ShoppingCart className="h-6 w-6" />}
          trend="-5%"
          trendDirection="down"
        />
        <StatsCard
          title="Active Categories"
          value={stats.categories.toString()}
          icon={<Grid className="h-6 w-6" />}
          trend="+3%"
          trendDirection="up"
        />
      </div>
    </div>
  );
};

export default StatsGrid;
