import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  condition: string;
  category: string;
}

interface ProductGridProps {
  products?: Product[];
  onAddToCart?: (productId: string) => void;
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
    {
      id: "3",
      name: "Vintage Pleated Midi Skirt",
      price: 34.99,
      originalPrice: 65.99,
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa",
      condition: "Thrifted - Excellent",
      category: "Bottoms",
      seller: {
        rating: 4.7,
        sales: 892,
      },
    },
    {
      id: "4",
      name: "Compression Workout Leggings",
      price: 24.99,
      originalPrice: 49.99,
      image: "https://images.unsplash.com/photo-1548663574-4e0b2b2418b6",
      condition: "New",
      category: "Bottoms",
      seller: {
        rating: 4.6,
        sales: 2145,
      },
    },
    {
      id: "5",
      name: "Floral Summer Skirt",
      price: 28.99,
      originalPrice: 55.99,
      image: "https://images.unsplash.com/photo-1577900232427-18219b9166a0",
      condition: "Thrifted - Very Good",
      category: "Bottoms",
      seller: {
        rating: 4.5,
        sales: 567,
      },
    },
    {
      id: "6",
      name: "Retro Band T-Shirt",
      price: 25.99,
      originalPrice: 35.99,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
      condition: "Thrifted - Good",
      category: "Tops",
      seller: {
        rating: 4.4,
        sales: 789,
      },
    },
    {
      id: "7",
      name: "Tennis Skirt with Shorts",
      price: 32.99,
      originalPrice: 45.99,
      image: "https://images.unsplash.com/photo-1592595896616-c37162298647",
      condition: "New",
      category: "Bottoms",
      seller: {
        rating: 4.9,
        sales: 1567,
      },
    },
    {
      id: "8",
      name: "Patterned Yoga Leggings",
      price: 27.99,
      originalPrice: 42.99,
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26",
      condition: "New",
      category: "Bottoms",
      seller: {
        rating: 4.7,
        sales: 2890,
      },
    },
  ],
  onAddToCart = () => {},
}: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
