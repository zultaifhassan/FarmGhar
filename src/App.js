import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import About from "../src/pages/About/About";
import Service from "../src/pages/Services/Service";
import Blog from "../src/pages/Blog/Blog";
import Login from "../src/pages/Login/Login";
import Signup from "../src/pages/Signup/Signup";
import ForgetPassword from "./pages/Login/ForgetPassword";
import Layout from "./pages/sellerDashboard/Layout/Layout";
import Dashboard from "./pages/sellerDashboard/Dashboard/Dashboard";
import Product from "./components/ProductBox/Product";
import Products from "./pages/sellerDashboard/Products/Products";
import Orders from "./pages/sellerDashboard/Orders/Orders";
import CreateProduct from "./pages/sellerDashboard/CreateProduct/CreateProduct";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import UserOrders from "./pages/Orders/Orders";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
function App() {
  return (
    <div style={{ position: "relative" }}>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/orders" element={<UserOrders />} />
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route
          path="/seller"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="create-product" element={<CreateProduct />} />
        </Route>
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
