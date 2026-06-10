import React, { useState } from "react";
// import Carousel from "./Component/Carousel";
import Card3 from "./Component/Card3";

function App() {
  const rawData = [
  
    {name:"John",profession:"Artist",url:"",friend:false},
    {name:"Jacob",profession:"Lawyer",url:"",friend:false},
    {name:"Sam",profession:"Researcher",url:"",friend:false},
    {name:"Mark",profession:"Coder",url:"",friend:false},
    { name: "Peter", profession: "Investor", url: "", friend: false },
    
  ]

  const [data, setData] = useState(rawData);
  const handleEventButton = (Elemindex) => {
    return setData((prev) => {
      prev.map((item, index) => {
        if (index===Elemindex) {
          return {...item,friend:!item.friend}
        }
        return item;
     })
   })

  }

  return (
    // <Carousel/>
    <div className=" bg-zinc-400">
      {data.map((item, index) => {
        <Card3  index={index} value={item}  key={index} handleEventButton={handleEventButton} />
      })}
      </div>
  );
}

export default App;
