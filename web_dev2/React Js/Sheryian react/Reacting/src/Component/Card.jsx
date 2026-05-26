import React from "react";

const data = [
  {
    url: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Headphones",
    description: "A pair of stylish headphones",
    instock: true,
  },
  {
    url: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Apple SmartPhone",
    description: "New Apple SmartPhone with advanced features",
    instock: false,
  },
  {
    url: "https://images.unsplash.com/photo-1658124975408-490b400810a8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Macbook Pro",
    description:
      "A modern era new generation apple macbook pro with powerful performance",
    instock: true,
  },
];

let ProductInCart = 0;

const AddToCart = () => {
  ProductInCart++;
  alert(`Product is added to cart ${ProductInCart}`);
}

function Card() {
  return (
    <div className=" w-full h-screen bg-zinc-300 flex gap-8 justify-center items-center">
      {data.map((elem, index) => (
        <div
          key={index}
          className=" w-52   bg-zinc-100 rounded-md overflow-hidden"
        >
          <div>
            <img
              className="w-full h-32 object-cover"
              src={elem.url}
              alt="card image"
            />
          </div>
          <div className="w-full px-3 py-2">
            <h3 className="font-semibold text-xl ">{elem.title}</h3>
            <p className="text-xs text-zinc-500 mt-2">{elem.description}</p>
          </div>
          <div className="flex gap-2 m-3">
            <button
              className={`rounded  ${elem.instock ? "bg-blue-600 hover:bg-blue-500" : "bg-red-600 hover:bg-red-500"} hover:text-zinc-100 text-xs text-zinc-200 mt-3 px-3 font-semibold py-1 `}
            >
              {elem.instock ? "In Stock" : "Out Of Stock"}
            </button>
            <button
             onClick={AddToCart}
              className={`rounded  bg-slate-900 hover:bg-slate-800 hover:text-zinc-100 text-xs text-zinc-200 mt-3 px-3 font-semibold py-1 `}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;