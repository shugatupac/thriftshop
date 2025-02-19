import { useState } from "react";
import ShopLayout from "./ShopLayout";
import ProductGrid from "./ProductGrid";
import FlashDeals from "./FlashDeals";
import RecommendedOutfits from "./RecommendedOutfits";
import ComboBuilder from "./ComboBuilder";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sparkles } from "lucide-react";

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
  const [isComboMode, setIsComboMode] = useState(false);
  const [selectedTop, setSelectedTop] = useState(null);
  const [selectedBottom, setSelectedBottom] = useState(null);

  const handleProductSelect = (product) => {
    if (product.category.toLowerCase().includes("top")) {
      setSelectedTop(product);
    } else if (product.category.toLowerCase().includes("bottom")) {
      setSelectedBottom(product);
    }
  };

  return (
    <ShopLayout>
      <div className="space-y-6">
        <FlashDeals />
        <RecommendedOutfits />

        <div className="flex items-center justify-between mb-6">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-2 pb-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className="flex-shrink-0"
                >
                  {category}
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="ml-4 gap-2"
                onClick={() => setIsComboMode(true)}
              >
                <Sparkles className="w-4 h-4" />
                Create Combo
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[500px] sm:w-[540px]">
              <ComboBuilder
                onClose={() => {
                  setIsComboMode(false);
                  setSelectedTop(null);
                  setSelectedBottom(null);
                }}
                onAddToCart={(combo) => {
                  console.log("Adding combo to cart:", combo);
                  setIsComboMode(false);
                  setSelectedTop(null);
                  setSelectedBottom(null);
                }}
              />
            </SheetContent>
          </Sheet>
        </div>

        <ProductGrid
          isComboMode={isComboMode}
          selectedTop={selectedTop}
          selectedBottom={selectedBottom}
          onProductSelect={handleProductSelect}
        />
      </div>
    </ShopLayout>
  );
};

export default ShopView;
