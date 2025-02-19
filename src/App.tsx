import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ShopView from "./components/shop/ShopView";
import ProductDetails from "./components/shop/ProductDetails";
import CategoryView from "./components/shop/CategoryView";
import WishlistView from "./components/shop/WishlistView";
import OrdersView from "./components/shop/OrdersView";
import AccountView from "./components/shop/AccountView";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<ShopView />} />
        <Route path="/admin" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/category/:category" element={<CategoryView />} />
        <Route path="/wishlist" element={<WishlistView />} />
        <Route path="/orders" element={<OrdersView />} />
        <Route path="/account" element={<AccountView />}>
          <Route path="profile" element={<AccountView />} />
          <Route path="addresses" element={<AccountView />} />
          <Route path="payment" element={<AccountView />} />
          <Route path="notifications" element={<AccountView />} />
          <Route path="security" element={<AccountView />} />
        </Route>
      </Routes>
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
    </Suspense>
  );
}

export default App;
