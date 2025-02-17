import React, { useState } from "react";
import Sidebar from "./dashboard/Sidebar";
import MainContent from "./dashboard/MainContent";
import ProductsView from "./dashboard/products/ProductsView";
import OrdersView from "./dashboard/orders/OrdersView";
import CategoriesView from "./dashboard/categories/CategoriesView";
import SettingsView from "./dashboard/settings/SettingsView";

interface HomeProps {
  initialStats?: {
    products: number;
    orders: number;
    categories: number;
  };
}

const Home = ({
  initialStats = {
    products: 156,
    orders: 32,
    categories: 12,
  },
}: HomeProps) => {
  const [activeNavItem, setActiveNavItem] = useState("dashboard");

  const handleNavigation = (item: string) => {
    setActiveNavItem(item);
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeItem={activeNavItem} onNavigate={handleNavigation} />
      {activeNavItem === "dashboard" && <MainContent stats={initialStats} />}
      {activeNavItem === "products" && <ProductsView />}
      {activeNavItem === "orders" && <OrdersView />}
      {activeNavItem === "categories" && <CategoriesView />}
      {activeNavItem === "settings" && <SettingsView />}
    </div>
  );
};

export default Home;
