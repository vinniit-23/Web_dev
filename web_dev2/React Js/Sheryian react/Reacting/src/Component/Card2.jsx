import React from "react";

const data = [
  {
    url: "",
    title: "",
    description: "",
    InStock: true,
  },
  {
    url: "",
    title: "",
    description: "",
    InStock: true,
  },
  {
    url: "",
    title: "",
    description: "",
    InStock: true,
  },
  {
    url: "",
    title: "",
    description: "",
    InStock: true,
  },
];

let Stock = 0;

const eventButtonPressed = () => {
    Stock + 1;
    alert(`added to the cart ${Stock}`);
}

function Card2() {
    return <div>
        {    
            data.map(
                (elem, index) => {
                    <div key={index}>
                      <div>
                        <img className="" src={elem.url} alt="" />{" "}
                      </div>
                      <div className="">
                            <h2 className="">{ elem.title}</h2>
                            <p className="">{elem.description}</p>
                            <button onClick={eventButtonPressed} className="">{ elem.InStock?"Instock":"Out Of Stock"}</button>
                            <button className="">Add to Cart</button>
                      </div>
                    </div>;
                }
        )
        }
    </div>
 }

export default Card2;