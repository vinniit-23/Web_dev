import React from "react";

export default function Card3({name,color}) {
    return <>
        <button className={`${color} px-3 py-2 rounded text-sm`}>{name}</button>
    </>  
}