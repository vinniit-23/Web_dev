import React from "react";

 function Card3({ value, index, handleEventButton }) {
  const { name, profession, url, friend } = value;

  return (
    <div className="w-48 bg-zinc-100 rounded overflow-hidden m-4 ">
      <div className="w-full h-40  bg-sky-200 ">
              <img className="w-full h-full object-cover object-[center_top]"
                  src={url} alt="" />
        
      </div>
      <div className=" w-full p-3 ">
        <h2 className="text-2xl font-semibold ">{name}</h2>
        <h3 className="text-md text-zinc-500 ">{profession}</h3>
        <button
          onClick={() =>  handleEventButton(index)
          }
          className={`rounded px-3 my-1 font-semibold text-white py-2 text-xs ${friend?"bg-green-600":"bg-blue-600"}`}
        >
          {friend ? "Friends" : "Add Friend"}
        </button>
      </div>
    </div>
  );
}

export default Card3;