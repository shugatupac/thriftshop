import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, SlidersHorizontal } from "lucide-react";
import ShopLayout from "./ShopLayout";
import ProductGrid from "./ProductGrid";

const CategoryView = () => {
  const { category } = useParams();

  return (
    <ShopLayout>
      <div className="container mx-auto py-8 space-y-6">
        <div className="flex items-baseline justify-between">
          <h1 className="text-3xl font-bold capitalize">{category}</h1>
          <p className="text-sm text-muted-foreground">24 products</p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <Card className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button variant="ghost" size="sm">
                  Clear all
                </Button>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Price Range</Label>
                  <div className="space-y-4">
                    <Slider
                      defaultValue={[0, 100]}
                      max={200}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex gap-4">
                      <Input type="number" placeholder="Min" />
                      <Input type="number" placeholder="Max" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Condition</Label>
                  <div className="space-y-2">
                    {["New", "Like New", "Good", "Fair"].map((condition) => (
                      <div
                        key={condition}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox id={condition} />
                        <label
                          htmlFor={condition}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {condition}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Size</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                      <Button
                        key={size}
                        variant="outline"
                        className="w-full"
                        size="sm"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Colors</Label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "bg-black",
                      "bg-white border",
                      "bg-red-500",
                      "bg-blue-500",
                      "bg-green-500",
                      "bg-yellow-500",
                      "bg-purple-500",
                      "bg-pink-500",
                    ].map((color) => (
                      <button
                        key={color}
                        className={`w-6 h-6 rounded-full ${color}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Products Grid */}
          <div className="col-span-3 space-y-6">
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search in category..." className="pl-9" />
                </div>
                <Button variant="outline">
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Sort
                </Button>
              </div>
            </Card>

            <ProductGrid />
          </div>
        </div>
      </div>
    </ShopLayout>
  );
};

export default CategoryView;
