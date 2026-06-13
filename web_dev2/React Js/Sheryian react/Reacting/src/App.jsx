import React, { useRef } from "react";

function App() {
  const name = useRef(null);
  const email = useRef(null);


  const handleEvent = (event) => {
    event.preventDefault()
    console.log(name.current.value);
    console.log(email.current.value);
    
  }

  return (
    <div className=" m-10">
      <form action="" onSubmit={handleEvent}>
        <input
          ref={name}
          className="border-teal-300 border-2 px-4 py-3"
          type="name"
          placeholder="name"
        />
        <input
          ref={email}
          className="border-teal-300 border-2 px-4 py-3"
          type="email"
          placeholder="email"
        />
        <input className="border-teal-300 border-2 px-4 py-3" type="submit" />
      </form>
    </div>
  );
}

export default App;
