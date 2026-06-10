import React from "react";

export default function Card3({ value, index, handleEventButton }) {
  const { name, profession, url, friend } = value;

  return (
    <div className="w-44 h-54 rounded overflow-hidden m-4">
      <div className="w-full h-32 bg-sky-500 object-cover">
              <img
                  className=""
                  src={url} alt="" />
      </div>
      <div>
        <h2 className="text-2xl ">{name}</h2>
        <h3 className="text-xl ">{profession}</h3>
        <button
          onClick={() => {
            handleEventButton(index);
          }}
          className={`rounded px-3 py-2 text-xs ${friend?"bg-red-600":"bg-blue-600"}`}
        >
          {friend ? "Remove Friend" : "Add Friend"}
        </button>
      </div>
    </div>
  );
}
