import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Timer } from "lucide-react";

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
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="py-6">
      <div className="flex items-center gap-2 mb-4">
        <Timer className="w-5 h-5 text-red-500" />
        <h2 className="text-xl font-bold">Flash Deals</h2>
      </div>
      <ScrollArea className="w-full">
        <div className="flex space-x-4 pb-4">
          {deals.map((deal) => (
            <Card
              key={deal.id}
              className="flex-shrink-0 w-[300px] overflow-hidden"
            >
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-[200px] object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  {formatTime(deal.timeLeft)}
                </div>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold truncate">{deal.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-red-500">
                    ${deal.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    ${deal.originalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-red-500 h-2.5 rounded-full"
                    style={{
                      width: `${(deal.soldCount / deal.totalCount) * 100}%`,
                    }}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  {deal.soldCount} sold out of {deal.totalCount}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default FlashDeals;
