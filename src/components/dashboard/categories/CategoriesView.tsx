import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import CategoriesGrid from "./CategoriesGrid";

interface CategoriesViewProps {
  categories?: Array<{
    id: string;
    name: string;
    description: string;
    productCount: number;
  }>;
}

const CategoriesView = ({
  categories = [
    {
      id: "1",
      name: "Outerwear",
      description: "Jackets, coats, and other outer layers",
      productCount: 45,
    },
    {
      id: "2",
      name: "Tops",
      description: "T-shirts, blouses, and shirts",
      productCount: 78,
    },
  ],
}: CategoriesViewProps) => {
  return (
    <div className="flex-1 p-8 bg-gray-50 min-h-screen">
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Categories</h1>
            <p className="text-muted-foreground mt-2">
              Manage product categories
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Category
          </Button>
        </div>

        <Card className="p-6">
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search categories..." className="pl-9" />
            </div>
          </div>

          <CategoriesGrid categories={categories} />
        </Card>
      </div>
    </div>
  );
};

export default CategoriesView;
