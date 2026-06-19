import { Route, Routes } from "react-router";
import Home from "../Components/Home";
import About from "../Components/About";
import User from "../Components/User";
import UserDetails from "../Components/UserDetails";
import Notfound from "./Notfound";
import Product from "../Components/Product";
import ProductDetails from "../Components/ProductDetails";

const Routing = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/About"} element={<About />} />
      <Route path={"/User"} element={<User />} />
      <Route path={"/User/:name"} element={<UserDetails />} />

      <Route path={"/Product"} element={<Product />}>
        <Route path="/Product/Men" element={<ProductDetails />} />
        <Route path="/Product/Women" element={<ProductDetails />} />
      </Route>
      <Route path={"*"} element={<Notfound />} />
    </Routes>
  );
};

export default Routing;
