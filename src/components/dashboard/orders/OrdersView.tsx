import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import OrdersTable from "./OrdersTable";

interface OrdersViewProps {
  orders?: Array<{
    id: string;
    customer: string;
    date: string;
    total: number;
    status: "pending" | "processing" | "shipped" | "delivered";
    items: number;
  }>;
}

const OrdersView = ({
  orders = [
    {
      id: "#1234",
      customer: "John Doe",
      date: "2024-03-20",
      total: 71.98,
      status: "pending",
      items: 2,
    },
    {
      id: "#1235",
      customer: "Jane Smith",
      date: "2024-03-19",
      total: 45.99,
      status: "shipped",
      items: 1,
    },
  ],
}: OrdersViewProps) => {
  return (
    <div className="flex-1 p-8 bg-gray-50 min-h-screen">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Orders</h1>
          <p className="text-muted-foreground mt-2">Manage customer orders</p>
        </div>

        <Card className="p-6">
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search orders..." className="pl-9" />
            </div>
            <Button variant="outline">Filter</Button>
          </div>

          <OrdersTable orders={orders} />
        </Card>
      </div>
    </div>
  );
};

export default OrdersView;
