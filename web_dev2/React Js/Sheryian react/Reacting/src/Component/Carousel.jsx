import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

// import "./App.css";

function Carousel() {
  const [val, setVal] = useState(false);
  return (
    <div className="w-full h-screen flex justify-center items-center bg-zinc-200">
      <div className="relative w-90 h-48 rounded-md bg-zinc-500 flex overflow-hidden ">
        <img
          className={`transition-transform duration-700 ease-in-out ${val === false ? "-translate-x-0" : "-translate-x-full"}  shrink-0 w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1630164134885-7bfbe29e1155?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image 1"
        />
        <img
          className={`transition-transform duration-700 ease-in-out ${val === false ? "-translate-x-0" : "-translate-x-full"} shrink-0 w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1780049921469-4afa2c328d4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image 2"
        />
        <span
          onClick={() => setVal(() => !val)}
          className=" flex justify-center items-center rounded-full absolute left-1/2 top-3/4 bg-[#dadada8b] w-8 h-8 -translate-x-[50%] -translate-y-[50%]"
        >
          <FaLongArrowAltRight size="0.7rem" />
        </span>
      </div>
    </div>
  );
}

export default Carousel;
