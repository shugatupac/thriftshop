import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Timer, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FlashDeal {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  timeLeft: number; // in seconds
  soldCount: number;
  totalCount: number;
}

const FlashDeals = () => {
  const [deals, setDeals] = useState<FlashDeal[]>([
    {
      id: "1",
      name: "Designer Jeans",
      price: 29.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
      timeLeft: 3600 * 2, // 2 hours
      soldCount: 89,
      totalCount: 100,
    },
    {
      id: "2",
      name: "Premium Leggings",
      price: 19.99,
      originalPrice: 49.99,
      image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8",
      timeLeft: 3600 * 4, // 4 hours
      soldCount: 156,
      totalCount: 200,
    },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDeals(
        deals.map((deal) => ({
          ...deal,
          timeLeft: Math.max(0, deal.timeLeft - 1),
        })),
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [deals]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="py-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-red-500/10 p-2 rounded-xl">
          <Timer className="w-6 h-6 text-red-500" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Flash Deals</h2>
          <p className="text-sm text-muted-foreground">
            Don't miss out on these limited-time offers
          </p>
        </div>
      </div>

      <ScrollArea className="w-full">
        <div className="flex space-x-4 pb-4">
          {deals.map((deal) => (
            <Card
              key={deal.id}
              className="flex-shrink-0 w-[300px] overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white group relative"
            >
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white/90 backdrop-blur-sm hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1.5 rounded-full text-sm font-semibold">
                  {formatTime(deal.timeLeft)}
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div className="space-y-1">
                  <h3 className="font-medium text-base truncate">
                    {deal.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-red-500">
                      ${deal.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${deal.originalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-red-500 h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${(deal.soldCount / deal.totalCount) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-red-500 font-medium">
                      {deal.soldCount} sold
                    </span>
                    <span className="text-muted-foreground">
                      {deal.totalCount - deal.soldCount} left
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default FlashDeals;
