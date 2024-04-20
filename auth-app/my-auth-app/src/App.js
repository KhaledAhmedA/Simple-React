import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProduct from "./components/NewProduct";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import AdminDetails from "./components/AdminDetails";
import Profile from "./components/Profile";
import { ContextProvider } from "./components/Auth";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";




function App() {
  return (
    <Router>
      <ContextProvider>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProduct />} />
          </Route>

          <Route path="/users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<AdminDetails />} />
          </Route>

          <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />

          <Route path="/login" element={<Login />} />

          <Route path="*" element={<h1>Page Not Found</h1>} />



        </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;
