import { useState } from "react";
import ShopLayout from "./ShopLayout";
import ProductGrid from "./ProductGrid";
import FlashDeals from "./FlashDeals";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const categories = [
  "All",
  "New Arrivals",
  "Thrifted",
  "Outerwear",
  "Tops",
  "Bottoms",
  "Dresses",
  "Activewear",
  "Accessories",
];

const ShopView = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <ShopLayout>
      <div className="space-y-6">
        <FlashDeals />

        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-2 pb-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="flex-shrink-0"
              >
                {category}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <ProductGrid />
      </div>
    </ShopLayout>
  );
};

export default ShopView;
