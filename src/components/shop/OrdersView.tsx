import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package2, Truck, CheckCircle2, Clock } from "lucide-react";
import ShopLayout from "./ShopLayout";

interface Order {
  id: string;
  date: string;
  total: number;
  status: "processing" | "shipped" | "delivered" | "cancelled";
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
  tracking?: {
    number: string;
    carrier: string;
    status: string;
    estimatedDelivery: string;
  };
}

const OrdersView = () => {
  const orders: Order[] = [
    {
      id: "#1234",
      date: "2024-03-20",
      total: 75.98,
      status: "processing",
      items: [
        {
          id: "1",
          name: "Vintage Denim Jacket",
          price: 45.99,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2",
        },
        {
          id: "2",
          name: "High-Waist Yoga Leggings",
          price: 29.99,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8",
        },
      ],
    },
    {
      id: "#1235",
      date: "2024-03-19",
      total: 89.99,
      status: "shipped",
      items: [
        {
          id: "3",
          name: "Vintage Pleated Midi Skirt",
          price: 89.99,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa",
        },
      ],
      tracking: {
        number: "1Z999AA1234567890",
        carrier: "UPS",
        status: "In Transit",
        estimatedDelivery: "2024-03-25",
      },
    },
  ];

  const getStatusIcon = (status: Order["status"]) => {
    switch (status) {
      case "processing":
        return <Clock className="w-5 h-5 text-blue-500" />;
      case "shipped":
        return <Truck className="w-5 h-5 text-purple-500" />;
      case "delivered":
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      default:
        return <Package2 className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusText = (status: Order["status"]) => {
    switch (status) {
      case "processing":
        return "Processing";
      case "shipped":
        return "Shipped";
      case "delivered":
        return "Delivered";
      default:
        return "Cancelled";
    }
  };

  return (
    <ShopLayout>
      <div className="container mx-auto py-8 space-y-6">
        <div className="flex items-center gap-2">
          <Package2 className="w-5 h-5" />
          <h1 className="text-2xl font-bold">My Orders</h1>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="shipped">Shipped</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4 mt-4">
            {orders.map((order) => (
              <Card key={order.id} className="p-6 space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Order {order.id}</span>
                      <span className="text-sm text-muted-foreground">
                        · {order.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(order.status)}
                      <span className="text-sm font-medium">
                        {getStatusText(order.status)}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline">View Details</Button>
                </div>

                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="h-20 w-20 rounded-md overflow-hidden bg-secondary/20">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Quantity: {item.quantity}
                        </p>
                        <p className="text-sm">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {order.tracking && (
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Truck className="w-4 h-4" />
                      <span className="font-medium">
                        {order.tracking.carrier}
                      </span>
                      <span className="text-muted-foreground">
                        · {order.tracking.number}
                      </span>
                    </div>
                    <p className="text-sm">
                      <span className="font-medium">Status:</span>{" "}
                      {order.tracking.status}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Estimated Delivery:</span>{" "}
                      {order.tracking.estimatedDelivery}
                    </p>
                  </div>
                )}

                <div className="border-t pt-4 flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Total (
                    {order.items.reduce((sum, item) => sum + item.quantity, 0)}{" "}
                    items)
                  </span>
                  <span className="text-lg font-bold">
                    ${order.total.toFixed(2)}
                  </span>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </ShopLayout>
  );
};

export default OrdersView;
