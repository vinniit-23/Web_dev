import React, { useState } from "react";
import Cards from "./Component/Cards";
import Form from "./Component/Form";


export default function App() {
  const [users, setUsers] = useState([])
  console.log(users);

  const addUser = (data) => { setUsers([...users, data]) }
  
  const removeUser = (id) => { setUsers(users.map((item,index)=> item.index!==id))}
  
  

  return (

    <div className="w-full h-screen bg-zinc-200 flex justify-center items-center">
      <div className=" mx-auto ">
        <Cards users={users} removeUser={removeUser} />
        <Form addUser={addUser} />
      </div>
    </div>
  );
}