import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "news",
    "Cars",
    "cricket",
    "Web Series",
    "Thriller",
    "Software Engineering",
    "India-Pakistan",
    "Horror",
    "Mock Drill",
    "Presentation",
  ];
  return (
    <div className="flex gap-3  h-10 ">
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
