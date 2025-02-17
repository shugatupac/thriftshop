import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ProductCard from "./ProductCard";

interface RelatedProductsProps {
  products?: Array<{
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
  }>;
}

const RelatedProducts = ({
  products = [
    {
      id: "1",
      name: "Vintage Denim Jacket",
      price: 45.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2",
      condition: "Good",
      category: "Outerwear",
      seller: {
        rating: 4.8,
        sales: 1234,
      },
    },
    // Add more products...
  ],
}: RelatedProductsProps) => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
      <ScrollArea className="w-full">
        <div className="flex space-x-4 pb-4">
          {products.map((product) => (
            <div key={product.id} className="w-[280px] flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default RelatedProducts;
