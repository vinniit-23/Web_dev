import { NavLink } from "react-router";

const Nav = () => {
  return (
    <nav className="flex justify-center items-center mt-10 gap-10">
      <NavLink
        to={"/"}
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
            fontWeight: isActive ? "bold" : "",
            fontSize: isActive ? "1.5rem" : "",
          };
        }}
      >
        Home
      </NavLink>
      <NavLink
        to={"/About"}
        className={({ isActive }) => {
          return isActive ? "text-red-400 font-bold text-xl" : " ";
        }}
      >
        About
      </NavLink>
      <NavLink to={"/User"}>
        {(e) => {
          return (
            <span
              className={[
                e.isActive ? "text-red-400 " : " ",
                e.isActive ? " font-bold" : " ",
                e.isActive ? "text-xl" : " ",
              ].join(" ")}
            >
              User
            </span>
          );
        }}
      </NavLink>
      <NavLink
        to={"/Product"}
        className={({ isActive }) => {
          return [
            isActive ? "text-red-400 " : " ",
            isActive ? " font-bold" : " ",
            isActive ? "text-xl" : " ",
          ].join(" ");
        }}
      >
        Product
      </NavLink>
    </nav>
  );
};

export default Nav;
