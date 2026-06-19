import { useLoaderData, useLocation, useNavigate } from "react-router";

const ProductDetails = () => {
  const navigate = useNavigate();

  const gobackbtn = () => {
    navigate("/Product");
  };

  const location = useLocation();
  
  const Category = location.pathname.split("/").pop();
  console.log(location);

  return (
    <div className="mt-10">
      <h1 className="text-2xl text-zinc-700 font-semibold"> {Category} Category Page </h1>
      <p className="mt-10 text-xl text-zinc-500">Shop for {Category}</p>
      <button
        onClick={gobackbtn}
        className="px-4 py-2 mt-10 bg-zinc-700 text-white hover:bg-zinc-800 font-semibold"
      >
        Go Back
      </button>
    </div>
  );
};

export default ProductDetails;
