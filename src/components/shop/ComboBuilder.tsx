import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, X, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ComboBuilderProps {
  onClose?: () => void;
  onAddToCart?: (items: { top: Product; bottom: Product }) => void;
}

const ComboBuilder = ({ onClose, onAddToCart }: ComboBuilderProps) => {
  const [selectedTop, setSelectedTop] = useState<Product | null>(null);
  const [selectedBottom, setSelectedBottom] = useState<Product | null>(null);

  const calculateComboPrice = () => {
    if (!selectedTop || !selectedBottom) return 0;
    const totalPrice = selectedTop.price + selectedBottom.price;
    return totalPrice * 0.75; // 25% off
  };

  const handleAddToCart = () => {
    if (selectedTop && selectedBottom) {
      onAddToCart?.({ top: selectedTop, bottom: selectedBottom });
      onClose?.();
    }
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Create Combo</h2>
          <p className="text-sm text-muted-foreground">
            Get 25% off when you buy a top and bottom together
          </p>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{
              width: `${(selectedTop ? 50 : 0) + (selectedBottom ? 50 : 0)}%`,
            }}
          />
        </div>
        <span className="text-sm font-medium">
          {selectedTop && selectedBottom ? "Ready!" : "Select items"}
        </span>
      </div>

      <Card className="p-4 bg-primary/5 mb-4">
        <div className="flex items-start gap-2">
          <Info className="w-4 h-4 text-primary mt-1" />
          <div className="space-y-2 text-sm">
            <p className="text-primary font-medium">Combo Tips:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Choose items with complementary colors</li>
              <li>Match casual with casual, formal with formal</li>
              <li>Check size guides for the perfect fit</li>
            </ul>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-6">
        {/* Top Selection */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Select Top</h3>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Choose from shirts, jackets, or sweaters</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          {selectedTop ? (
            <Card className="p-4 border border-primary">
              <div className="flex gap-4">
                <div className="h-20 w-20 rounded-md overflow-hidden bg-secondary/20">
                  <img
                    src={selectedTop.image}
                    alt={selectedTop.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{selectedTop.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    ${selectedTop.price.toFixed(2)}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedTop(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ) : (
            <Card className="p-4 border border-dashed flex items-center justify-center h-32 bg-muted/50">
              <p className="text-sm text-muted-foreground">Select a top item</p>
            </Card>
          )}
        </div>

        {/* Bottom Selection */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Select Bottom</h3>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Choose from pants, skirts, or shorts</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          {selectedBottom ? (
            <Card className="p-4 border border-primary">
              <div className="flex gap-4">
                <div className="h-20 w-20 rounded-md overflow-hidden bg-secondary/20">
                  <img
                    src={selectedBottom.image}
                    alt={selectedBottom.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{selectedBottom.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    ${selectedBottom.price.toFixed(2)}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedBottom(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ) : (
            <Card className="p-4 border border-dashed flex items-center justify-center h-32 bg-muted/50">
              <p className="text-sm text-muted-foreground">
                Select a bottom item
              </p>
            </Card>
          )}
        </div>
      </div>

      <Separator />

      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-muted-foreground">Total Price</p>
          <div className="flex items-baseline gap-2">
            {selectedTop && selectedBottom && (
              <span className="text-sm text-muted-foreground line-through">
                ${(selectedTop.price + selectedBottom.price).toFixed(2)}
              </span>
            )}
            <span className="text-2xl font-bold text-primary">
              ${calculateComboPrice().toFixed(2)}
            </span>
          </div>
        </div>
        <Button
          className="gap-2"
          disabled={!selectedTop || !selectedBottom}
          onClick={handleAddToCart}
        >
          <ShoppingBag className="w-4 h-4" />
          Add Combo to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ComboBuilder;
