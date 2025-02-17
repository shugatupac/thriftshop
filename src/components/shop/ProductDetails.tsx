import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Truck, Shield, Heart } from "lucide-react";

interface ProductDetailsProps {
  product?: {
    id: string;
    name: string;
    price: number;
    originalPrice: number;
    images: string[];
    condition: string;
    category: string;
    description: string;
    shipping: {
      free: boolean;
      estimatedDays: string;
    };
    seller: {
      name: string;
      rating: number;
      sales: number;
    };
    reviews: Array<{
      id: string;
      user: string;
      rating: number;
      comment: string;
      date: string;
      images?: string[];
    }>;
  };
  onAddToCart?: () => void;
}

const ProductDetails = ({
  product = {
    id: "1",
    name: "Vintage Denim Jacket",
    price: 45.99,
    originalPrice: 89.99,
    images: [
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2",
      "https://images.unsplash.com/photo-1588099768531-a72d4a198538",
    ],
    condition: "Good",
    category: "Outerwear",
    description: "Classic vintage denim jacket with authentic distressing...",
    shipping: {
      free: true,
      estimatedDays: "7-14",
    },
    seller: {
      name: "Vintage Treasures",
      rating: 4.8,
      sales: 1234,
    },
    reviews: [
      {
        id: "1",
        user: "John D.",
        rating: 5,
        comment: "Great quality, exactly as described!",
        date: "2024-03-15",
        images: [
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
        ],
      },
    ],
  },
  onAddToCart = () => {},
}: ProductDetailsProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const sizes = ["XS", "S", "M", "L", "XL"];
  const sizeGuide = {
    XS: { chest: "32-34", waist: "24-26", hips: "34-36" },
    S: { chest: "34-36", waist: "26-28", hips: "36-38" },
    M: { chest: "36-38", waist: "28-30", hips: "38-40" },
    L: { chest: "38-40", waist: "30-32", hips: "40-42" },
    XL: { chest: "40-42", waist: "32-34", hips: "42-44" },
  };

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100,
  );

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <Card className="overflow-hidden aspect-square">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </Card>
          <div className="flex gap-2 overflow-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${selectedImage === index ? "border-primary" : "border-transparent"}`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">{product.seller.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {product.seller.sales} sold
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-lg text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
              <Badge variant="destructive">{discount}% OFF</Badge>
            </div>
            {product.shipping.free && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="w-4 h-4" />
                <span>
                  Free Shipping · Estimated delivery:{" "}
                  {product.shipping.estimatedDays} days
                </span>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Size</Label>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    className="w-12"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
              {selectedSize && (
                <div className="text-sm text-muted-foreground mt-2">
                  <p>Chest: {sizeGuide[selectedSize].chest}"</p>
                  <p>Waist: {sizeGuide[selectedSize].waist}"</p>
                  <p>Hips: {sizeGuide[selectedSize].hips}"</p>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
              <Button
                className="flex-1"
                onClick={onAddToCart}
                disabled={!selectedSize}
              >
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={isWishlisted ? "bg-red-50" : ""}
              >
                <Heart
                  className={`w-4 h-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`}
                />
              </Button>
            </div>
          </div>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${product.seller.name}`}
                alt={product.seller.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{product.seller.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{product.seller.rating} Rating</span>
                  <span>·</span>
                  <span>{product.seller.sales} Sales</span>
                </div>
              </div>
            </div>
          </Card>

          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <Card className="p-4">
                <p className="text-sm">{product.description}</p>
              </Card>
            </TabsContent>
            <TabsContent value="shipping" className="mt-4">
              <Card className="p-4 space-y-4">
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Free Shipping</h4>
                    <p className="text-sm text-muted-foreground">
                      Estimated delivery: {product.shipping.estimatedDays} days
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Buyer Protection</h4>
                    <p className="text-sm text-muted-foreground">
                      Get full refund if the item is not as described
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
              <Card className="divide-y">
                {product.reviews.map((review) => (
                  <div key={review.id} className="p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.user}`}
                        alt={review.user}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="font-medium">{review.user}</span>
                      <span className="text-sm text-muted-foreground">
                        · {review.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm">{review.comment}</p>
                    {review.images && (
                      <div className="flex gap-2 mt-2">
                        {review.images.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt="Review"
                            className="w-16 h-16 rounded-md object-cover"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
