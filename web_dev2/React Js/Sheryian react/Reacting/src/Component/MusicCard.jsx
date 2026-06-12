import React from "react";

export default function MusicCard({ value, index, handleEvent }) {
  const { name, artist, image, favourite } = value;

  return (
    <div className=" relative flex w-60 pb-10 rounded-md p-4 mt-10 gap-4 bg-white ">
      <div className="w-20 h-20 bg-amber-600 rounded-md overflow-hidden">
        <img src="" alt="" />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <h4 className="text-md ">{artist}</h4>
        <button
          onClick={() => handleEvent(index)}
          className={` absolute bottom-0 left-1/2  translate-y-[50%] -translate-x-[50%] px-4 py-3 whitespace-nowrap text-sm ${favourite === true ? "bg-teal-600" : "bg-amber-600"} text-white rounded-full leading-3.5`}
        >
          {favourite === true ? "Favourites" : "Add To Favourites"}
        </button>
      </div>
    </div>
  );
}