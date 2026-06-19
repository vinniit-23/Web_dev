import { NavLink, Outlet } from "react-router";
const Product = () => {
  return (
    <div className=" w-1/2 mx-auto mt-10">
      <h1 className="text-5xl font-semibold text-red-400">Products</h1>
      <div className="mt-10 flex justify-center items-center gap-8 text-2xl font-semibold hover:text-zinc-900">
        <NavLink
          to={"/Product/Men"}
          className={({ isActive }) => {
            return [isActive ? "text-red-400" : " "].join(" ");
          }}
        >
          Men
        </NavLink>
        <NavLink
          to={"/Product/Women"}
          className={({ isActive }) => {
            return [isActive ? "text-red-400" : " "].join(" ");
          }}
        >
          Women
        </NavLink>
      </div>
      <br />
      <hr />
      <Outlet />
    </div>
  );
};

export default Product;
