import ProductCard from "./ProductCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface Product {
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
}

interface ProductGridProps {
  products?: Product[];
  onAddToCart?: (productId: string) => void;
  isComboMode?: boolean;
  selectedTop?: Product | null;
  selectedBottom?: Product | null;
  onProductSelect?: (product: Product) => void;
}

const ProductGrid = ({
  products = [
    {
      id: "1",
      name: "Vintage Denim Jacket",
      price: 45.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2",
      condition: "Thrifted - Good",
      category: "Outerwear",
      seller: {
        rating: 4.8,
        sales: 1234,
      },
    },
    {
      id: "2",
      name: "High-Waist Yoga Leggings",
      price: 29.99,
      originalPrice: 39.99,
      image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8",
      condition: "New",
      category: "Bottoms",
      seller: {
        rating: 4.9,
        sales: 3456,
      },
    },
    // More products...
  ],
  onAddToCart = () => {},
  isComboMode = false,
  selectedTop = null,
  selectedBottom = null,
  onProductSelect = () => {},
}: ProductGridProps) => {
  const quickFilters = [
    { label: "Size XS-S", value: "small" },
    { label: "Size M-L", value: "medium" },
    { label: "Size XL+", value: "large" },
    { label: "Under $30", value: "budget" },
    { label: "New Arrivals", value: "new" },
  ];

  return (
    <div className="space-y-4">
      <ScrollArea className="w-full">
        <div className="flex gap-2 pb-4">
          {quickFilters.map((filter) => (
            <Button
              key={filter.value}
              variant="outline"
              size="sm"
              className="flex-shrink-0"
            >
              {filter.label}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            isComboMode={isComboMode}
            onAddToCombo={onProductSelect}
            isSelected={
              product.id === selectedTop?.id ||
              product.id === selectedBottom?.id
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
