import React from "react";

const workcard = ({ item }) => {
  return (
    <div className="bg-yellow-200 rounded-lg  shadow-[15px_8px_10px_2px_rgba(0,0,0,0.3)] hover:scale-104 duration-300 " >
      <div>
        <img  src={item.img} alt="" />
      </div>
      <div >
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    </div>
  );
};

export default workcard;
