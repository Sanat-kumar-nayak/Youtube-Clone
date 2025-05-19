import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_API_KEY } from "../utils/constants";
import FinalSearchSingleVideo from "./FinalSearchSingleVideo";
import { Link } from "react-router-dom";
import { openMenu } from "../utils/appSlice";

const FinalSearchVideos = () => {
  const [resultVideos, setResultVideos] = useState([]);
  const searchString = useSelector((store) => store.app.searchString);
  //   setFinalSearch(searchString.split(" ").join("%20"));
  const dispatch = useDispatch();

  const getSearchStringVideos = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +
        searchString.split(" ").join("%20") +
        "&key=" +
        YOUTUBE_API_KEY
    );
    const json = await data.json();
    // console.log(json.items[0]);

    setResultVideos(json.items);
  };

  console.log(resultVideos);
  useEffect(() => {
    dispatch(openMenu());
    getSearchStringVideos();
  }, [searchString]);
  return (
    <div className="flex flex-col gap-5">
      {resultVideos &&
        resultVideos.map((v) => (
          <Link key={v} to={"/watch?v=" + v.id.videoId}>
            <FinalSearchSingleVideo data={v} />
          </Link>
        ))}
    </div>
  );
};

export default FinalSearchVideos;
