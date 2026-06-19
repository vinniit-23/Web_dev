import { Link } from "react-router";
const User = () => {
  return (
    <div className="w-1/2 mx-auto mt-10 flex flex-col">
      <h1 className="text-5xl font-semibold text-red-400 mb-5">User</h1>
      <Link to={"/User/john"}   className="mt-5 px-3 py-2 bg-red-300 hover:bg-red-400 w-1/4 ">John</Link>
      <Link to={"/User/vipul"}  className="mt-5 px-3 py-2 bg-red-300 hover:bg-red-400 w-1/4 ">Vipul</Link>
      <Link to={"/User/akash"} className="mt-5 px-3 py-2 bg-red-300 hover:bg-red-400 w-1/4 ">Akash</Link>
      <br />
      <hr />
    </div>
  );
};

export default User;
