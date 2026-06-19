import React from "react";
import Card from "./Card";

function Cards({ users, removeUser }) {
  return (
    <div className="w-full flex gap-4 h-auto overflow-auto  justify-center">
      {users.map((user, index) => {
          return (
            <Card
              user={user}
              index={index}
              key={index}
              removeUser={removeUser}
            />
          );
      })}

     </div>
  );
}

export default Cards;
