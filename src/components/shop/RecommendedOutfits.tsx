import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Sparkles } from "lucide-react";

interface Outfit {
  id: string;
  name: string;
  top: {
    name: string;
    image: string;
    price: number;
  };
  bottom: {
    name: string;
    image: string;
    price: number;
  };
  discount: number;
}

const RecommendedOutfits = () => {
  const outfits: Outfit[] = [
    {
      id: "1",
      name: "Casual Weekend",
      top: {
        name: "Vintage Denim Jacket",
        image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2",
        price: 45.99,
      },
      bottom: {
        name: "High-Waist Yoga Leggings",
        image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8",
        price: 29.99,
      },
      discount: 25,
    },
    // Add more recommended outfits
  ];

  return (
    <div className="py-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-primary/10 p-2 rounded-xl">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Recommended Outfits</h2>
          <p className="text-sm text-muted-foreground">
            Perfect matches with extra savings
          </p>
        </div>
      </div>

      <ScrollArea className="w-full">
        <div className="flex space-x-4 pb-4">
          {outfits.map((outfit) => (
            <Card
              key={outfit.id}
              className="flex-shrink-0 w-[400px] p-4 space-y-4"
            >
              <h3 className="font-semibold">{outfit.name}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="aspect-square rounded-lg overflow-hidden bg-secondary/20">
                    <img
                      src={outfit.top.image}
                      alt={outfit.top.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium truncate">
                    {outfit.top.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ${outfit.top.price}
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="aspect-square rounded-lg overflow-hidden bg-secondary/20">
                    <img
                      src={outfit.bottom.image}
                      alt={outfit.bottom.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium truncate">
                    {outfit.bottom.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ${outfit.bottom.price}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t">
                <div>
                  <p className="text-sm text-muted-foreground">Bundle Price</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-primary">
                      $
                      {(
                        (outfit.top.price + outfit.bottom.price) *
                        (1 - outfit.discount / 100)
                      ).toFixed(2)}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${(outfit.top.price + outfit.bottom.price).toFixed(2)}
                    </span>
                  </div>
                </div>
                <Button>Add Both to Cart</Button>
              </div>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default RecommendedOutfits;
