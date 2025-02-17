import React from "react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Activity {
  id: string;
  type: "order" | "product" | "category";
  action: string;
  description: string;
  timestamp: string;
  status: "pending" | "completed" | "failed";
}

interface RecentActivityProps {
  activities?: Activity[];
}

const defaultActivities: Activity[] = [
  {
    id: "1",
    type: "order",
    action: "New Order",
    description: "Order #1234 received from John Doe",
    timestamp: "2024-03-20 14:30",
    status: "pending",
  },
  {
    id: "2",
    type: "product",
    action: "Product Update",
    description: "Vintage Denim Jacket stock updated",
    timestamp: "2024-03-20 13:15",
    status: "completed",
  },
  {
    id: "3",
    type: "category",
    action: "Category Added",
    description: 'New category "Summer Collection" created',
    timestamp: "2024-03-20 12:00",
    status: "completed",
  },
  {
    id: "4",
    type: "order",
    action: "Order Status",
    description: "Order #1230 marked as shipped",
    timestamp: "2024-03-20 11:45",
    status: "completed",
  },
  {
    id: "5",
    type: "product",
    action: "Product Added",
    description: 'New product "Retro Sweater" added',
    timestamp: "2024-03-20 10:30",
    status: "failed",
  },
];

const getStatusColor = (status: Activity["status"]) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "completed":
      return "bg-green-100 text-green-800";
    case "failed":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const RecentActivity = ({
  activities = defaultActivities,
}: RecentActivityProps) => {
  return (
    <Card className="p-6 bg-white">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <ScrollArea className="h-[300px] w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Timestamp</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell className="capitalize">{activity.type}</TableCell>
                <TableCell>{activity.action}</TableCell>
                <TableCell>{activity.description}</TableCell>
                <TableCell>{activity.timestamp}</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={`${getStatusColor(activity.status)} capitalize`}
                  >
                    {activity.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </Card>
  );
};

export default RecentActivity;
