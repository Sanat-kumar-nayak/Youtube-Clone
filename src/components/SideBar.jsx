import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { PiVideoLight } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GrHistory } from "react-icons/gr";
import { MdPlaylistPlay } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { RiGraduationCapLine } from "react-icons/ri";
import { CiStopwatch } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";

const SideBar = () => {
  const isSideBarOpen = useSelector((store) => store.app.isSideBarOpen);

  return (
    <div>
      <div>
        {isSideBarOpen ? (
          <div className={`w-[13vw] `}>
            <div className="flex flex-col font-semibold px-1">
              <Link to="/">
                <div className="flex  items-center gap-5 py-2 px-4 rounded-xl hover:bg-gray-400 delay-75">
                  <IoHomeOutline />
                  <span>Home</span>
                </div>
              </Link>

              <div className="flex  items-center gap-5 py-2 px-4 rounded-xl hover:bg-gray-400 delay-75">
                <SiYoutubeshorts />
                <span>Shorts</span>
              </div>
              <div className="flex items-center gap-5 py-2 px-4 rounded-xl hover:bg-gray-400 delay-75">
                <PiVideoLight />
                <span>Subscriptions</span>
              </div>
            </div>
            <hr className="mx-2 my-3" />
            <button className=" font-semibold px-5 py-2 text-lg rounded-xl hover:bg-gray-400 delay-75 ">
              You >
            </button>
            <div className="flex flex-col  font-semibold px-1">
              <div className="flex items-center gap-5 py-2 px-4 rounded-xl hover:bg-gray-400 delay-75">
                <GrHistory />
                <span>History</span>
              </div>
              <div className="flex items-center gap-5 py-2 px-4 rounded-xl hover:bg-gray-400 delay-75">
                <MdPlaylistPlay />
                <span>Playlist</span>
              </div>
              <div className="flex items-center gap-5 py-2 px-4 rounded-xl hover:bg-gray-400 delay-75">
                <BiSolidVideos />
                <span>Your Videos</span>
              </div>
              <div className="flex items-center gap-5 py-2 px-4 rounded-xl hover:bg-gray-400 delay-75">
                <RiGraduationCapLine />
                <span>Your courses</span>
              </div>
              <div className="flex items-center gap-5 py-2 px-4 rounded-xl hover:bg-gray-400 delay-75">
                <CiStopwatch />
                <span>Watch Later</span>
              </div>
              <div className="flex items-center gap-5 py-2 px-4 rounded-xl hover:bg-gray-400 delay-75">
                <AiOutlineLike />
                <span>Liked Videos</span>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SideBar;
