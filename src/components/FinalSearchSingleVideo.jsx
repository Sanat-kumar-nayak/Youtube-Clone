import React from "react";

const FinalSearchSingleVideo = ({ data }) => {
  const { snippet } = data;
  console.log(data);

  return (
    <div className="flex gap-5 ">
      <div className="flex">
        <img
          className="rounded-lg"
          src={snippet.thumbnails.medium.url}
          alt=""
        />
      </div>
      <div className="p-3">
        <h1 className="font-semibold text-lg">{snippet.title}</h1>
        <p className="">{snippet.description}</p>
      </div>
    </div>
  );
};

export default FinalSearchSingleVideo;
