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
  onAddToCombo?: (product: ProductCardProps["product"]) => void;
  isComboMode?: boolean;
  isSelected?: boolean;
}

const ProductCard = ({
  product,
  onAddToCart = (id) => {
    const cart = useCart.getState();
    cart.addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  },
  onAddToCombo,
  isComboMode = false,
  isSelected = false,
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100,
  );

  return (
    <Card
      className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-0 max-w-[240px] mx-auto w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="absolute top-2 left-2 z-10 space-y-1">
        {discount > 0 && (
          <Badge
            variant="destructive"
            className="px-2 py-0.5 text-xs font-semibold bg-red-500 hover:bg-red-600"
          >
            {discount}% OFF
          </Badge>
        )}
        <Badge
          variant="secondary"
          className="px-2 py-0.5 text-xs font-medium bg-white/90 backdrop-blur-sm"
        >
          {product.condition}
        </Badge>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className={`absolute top-2 right-2 z-10 rounded-full scale-90 ${isWishlisted ? "bg-red-50 text-red-500" : "bg-white/90 backdrop-blur-sm hover:bg-white"}`}
        onClick={(e) => {
          e.stopPropagation();
          setIsWishlisted(!isWishlisted);
        }}
      >
        <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
      </Button>

      <div className="aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-[180px] object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
      </div>

      <div className="p-3 space-y-2">
        <div className="space-y-1">
          <h3 className="font-medium text-sm truncate">{product.name}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {product.seller && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <div className="flex items-center gap-0.5">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span>{product.seller.rating}</span>
            </div>
            <span>·</span>
            <span>{product.seller.sales} sold</span>
          </div>
        )}

        {isComboMode ? (
          <Button
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCombo?.(product);
            }}
            variant={isSelected ? "default" : "outline"}
            className={`w-full gap-1 text-xs h-8 ${isSelected ? "bg-primary hover:bg-primary/90" : "hover:bg-primary/10"}`}
          >
            {isSelected ? "Selected" : "Select for Combo"}
          </Button>
        ) : (
          <Button
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product.id);
            }}
            className="w-full gap-1 text-xs h-8 bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary"
          >
            <ShoppingBag className="h-3 w-3" />
            Add to Cart
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;
