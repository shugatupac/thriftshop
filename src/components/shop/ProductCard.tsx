import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100,
  );

  return (
    <Card
      className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="absolute top-4 left-4 z-10 space-y-2">
        {discount > 0 && (
          <Badge
            variant="destructive"
            className="px-2 py-1 text-xs font-semibold bg-red-500 hover:bg-red-600"
          >
            {discount}% OFF
          </Badge>
        )}
        <Badge
          variant="secondary"
          className="px-2 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm"
        >
          {product.condition}
        </Badge>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className={`absolute top-4 right-4 z-10 rounded-full ${isWishlisted ? "bg-red-50 text-red-500" : "bg-white/90 backdrop-blur-sm hover:bg-white"}`}
        onClick={(e) => {
          e.stopPropagation();
          setIsWishlisted(!isWishlisted);
        }}
      >
        <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
      </Button>

      <div className="aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
      </div>

      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="font-medium text-base truncate">{product.name}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {product.seller && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{product.seller.rating}</span>
            </div>
            <span>·</span>
            <span>{product.seller.sales} sold</span>
          </div>
        )}

        <Button
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product.id);
          }}
          className="w-full gap-2 bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
