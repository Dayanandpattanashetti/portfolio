import React from "react";
import "./card.css";
const Card = ({ name, url }) => {
  return (
    <div className="h-[150px] w-[150px] md:h-[240px] md:w-[240px] e-card playing ">
      <div className="wave -ml-[80%] -mt-[100%] w-[540px] h-[700px] md:w-[800px] md:h-[1000px] md:-ml-[50%] md:-mt-[70%] "></div>
      <div className="wave -ml-[80%] -mt-[100%] w-[540px] h-[700px] md:w-[800px] md:h-[1000px] md:-ml-[50%] md:-mt-[70%] "></div>
      <div className="wave -ml-[80%] -mt-[100%] w-[540px] h-[700px] md:w-[800px] md:h-[1000px] md:-ml-[50%] md:-mt-[70%] "></div>

      <div className="infotop flex flex-col">
        <img className="h-[50px] w-auto md:h-[100px]" src={url} alt="" />
        <div className="name">{name}</div>
      </div>
    </div>
  );
};

export default Card;