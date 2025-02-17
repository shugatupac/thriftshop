import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice: number;
    image: string;
    condition: string;
    category: string;
    seller?: {
      rating: number;
      sales: number;
    };
  };
  onAddToCart?: (productId: string) => void;
}

const ProductCard = ({ product, onAddToCart = () => {} }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden bg-secondary/20">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start gap-2">
          <div className="flex-1">
            <h3 className="font-semibold truncate">{product.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg font-bold">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            {product.seller && (
              <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{product.seller.rating}</span>
                </div>
                <span>·</span>
                <span>{product.seller.sales} sold</span>
              </div>
            )}
          </div>
          <Badge variant="secondary">{product.condition}</Badge>
        </div>
        <Button
          size="sm"
          onClick={() => onAddToCart(product.id)}
          className="w-full"
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
