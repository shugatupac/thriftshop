import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Plus, ShoppingBag, Package, FolderPlus } from "lucide-react";

interface QuickActionProps {
  actions?: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
    onClick: () => void;
  }>;
}

const QuickActions = ({
  actions = [
    {
      title: "Add New Product",
      description: "List a new item in your inventory",
      icon: <Plus className="h-6 w-6" />,
      onClick: () => console.log("Add product clicked"),
    },
    {
      title: "Process Orders",
      description: "View and manage pending orders",
      icon: <ShoppingBag className="h-6 w-6" />,
      onClick: () => console.log("Process orders clicked"),
    },
    {
      title: "Manage Inventory",
      description: "Update stock levels and product details",
      icon: <Package className="h-6 w-6" />,
      onClick: () => console.log("Manage inventory clicked"),
    },
    {
      title: "Add Category",
      description: "Create a new product category",
      icon: <FolderPlus className="h-6 w-6" />,
      onClick: () => console.log("Add category clicked"),
    },
  ],
}: QuickActionProps) => {
  return (
    <div className="w-full p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {action.icon}
                </div>
                <CardTitle className="text-lg">{action.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                {action.description}
              </CardDescription>
              <Button
                className="w-full"
                variant="outline"
                onClick={action.onClick}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
