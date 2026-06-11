import React, { useState } from "react";
// import Carousel from "./Component/Carousel";
import Card3 from "./Component/Card3";

function App() {
  const rawData = [
    {
      name: "John",
      profession: "Artist",
      url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
      friend: false,
    },
    {
      name: "Jacob",
      profession: "Lawyer",
      url: " https://images.unsplash.com/photo-1641260774125-04d527b376a5?q=80&w=1010&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friend: false,
    },
    {
      name: "Sam",
      profession: "Researcher",
      url: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friend: false,
    },
    {
      name: "Mark",
      profession: "Coder",
      url: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friend: false,
    },
    {
      name: "Peter",
      profession: "Investor",
      url: "https://images.unsplash.com/photo-1656338997878-279d71d48f6e?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friend: false,
    },
  ];

  const [data, setData] = useState(rawData);
  const handleEventButton = (Elemindex) => {
    return setData((prev) => {
     return prev.map((item, index) => {
        if (index === Elemindex) {
          return { ...item, friend: !item.friend }
        }
        return item;
      })
    })

  }

  return (
    // <Carousel/>
    <div className="flex h-screen w-full justify-center items-center gap-4 bg-zinc-200">
      {data.map((item, index) => 
         <Card3 index={index} value={item} key={index} handleEventButton={handleEventButton} />
      
      )}
      </div>
  );
}

export default App;
