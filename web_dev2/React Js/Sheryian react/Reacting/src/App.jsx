import React from "react";
// import Carousel from "./Component/Carousel";
import Card3 from "./Component/Card3";

function App() {
  return (
    // <Carousel/>
    <div className="m-5">
      <Card3 name={'Know More'} color={"bg-blue-500"} />
      <Card3 name={"Download"} color={"bg-red-500"} />
    </div>
  );
}

export default App;
