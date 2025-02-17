import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import ProductsTable from "./ProductsTable";

interface ProductsViewProps {
  products?: Array<{
    id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    condition: string;
  }>;
}

const ProductsView = ({
  products = [
    {
      id: "1",
      name: "Vintage Denim Jacket",
      category: "Outerwear",
      price: 45.99,
      stock: 3,
      condition: "Good",
    },
    {
      id: "2",
      name: "Retro Band T-Shirt",
      category: "Tops",
      price: 25.99,
      stock: 5,
      condition: "Excellent",
    },
  ],
}: ProductsViewProps) => {
  return (
    <div className="flex-1 p-8 bg-gray-50 min-h-screen">
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Products</h1>
            <p className="text-muted-foreground mt-2">
              Manage your product inventory
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        </div>

        <Card className="p-6">
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-9" />
            </div>
            <Button variant="outline">Filter</Button>
          </div>

          <ProductsTable products={products} />
        </Card>
      </div>
    </div>
  );
};

export default ProductsView;
