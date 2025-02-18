import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, Trash2 } from "lucide-react";
import ShopLayout from "./ShopLayout";

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  inStock: boolean;
}

const WishlistView = () => {
  const [items, setItems] = useState<WishlistItem[]>([
    {
      id: "1",
      name: "Vintage Denim Jacket",
      price: 45.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2",
      inStock: true,
    },
    {
      id: "2",
      name: "High-Waist Yoga Leggings",
      price: 29.99,
      originalPrice: 39.99,
      image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8",
      inStock: false,
    },
  ]);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSelectAll = () => {
    if (selectedItems.length === items.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map((item) => item.id));
    }
  };

  const toggleSelectItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const removeItems = () => {
    setItems(items.filter((item) => !selectedItems.includes(item.id)));
    setSelectedItems([]);
  };

  return (
    <ShopLayout>
      <div className="container mx-auto py-8 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5" />
            <h1 className="text-2xl font-bold">My Wishlist</h1>
            <span className="text-sm text-muted-foreground">
              ({items.length} items)
            </span>
          </div>
          {selectedItems.length > 0 && (
            <Button
              variant="outline"
              onClick={removeItems}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Remove Selected
            </Button>
          )}
        </div>

        <Card className="divide-y">
          <div className="p-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={selectedItems.length === items.length}
                onCheckedChange={toggleSelectAll}
              />
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Select All
              </label>
            </div>
          </div>

          {items.map((item) => (
            <div key={item.id} className="p-4">
              <div className="flex gap-4">
                <Checkbox
                  checked={selectedItems.includes(item.id)}
                  onCheckedChange={() => toggleSelectItem(item.id)}
                />
                <div className="h-24 w-24 rounded-md overflow-hidden bg-secondary/20">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-lg font-bold">
                      ${item.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${item.originalPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="mt-2">
                    {item.inStock ? (
                      <Button size="sm">Add to Cart</Button>
                    ) : (
                      <span className="text-sm text-red-500">Out of Stock</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </ShopLayout>
  );
};

export default WishlistView;
