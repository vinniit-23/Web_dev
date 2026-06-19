import React from "react";

function Card({ user, index, removeUser }) {
  return (
    <div className="flex flex-col p-4 w-52 h-full bg-zinc-100 rounded-lg justify-center items-center">
      <div className="image w-[4vw] h-[4vw] bg-zinc-300 overflow-hidden rounded-full ">
        <img className="w-full h-full object-cover" src={user.image} alt="" />
      </div>
      <h2 className="text-xl mt-1 font-semibold text-center leading-none ">
        {user.name}
      </h2>
      <h4 className="opacity-50 mt-1 font-semibold text-center text-md">
        {user.email}
       </h4>
      <p className="text-sm mt-2 text-center leading-none tracking-tight font-semibold">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
        incidunt.
      </p>
      <button
        className="bg-red-600 mt-2 hover:bg-red-500 text-white font-semibold rounded-md  px-3 py-2"
        onClick={() => removeUser(index)}
      >
        Remove It
      </button>
    </div>
  );
}

export default Card;
