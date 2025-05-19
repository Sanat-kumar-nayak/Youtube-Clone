import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="shadow-md p-2 w-[19rem]">
      <img src={thumbnails.medium.url} alt="" className="rounded-lg w-[100%]" />
      <div className="">
        <p className="font-bold py-1">{title}</p>
        <p>{channelTitle}</p>
        <p>{statistics.viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
