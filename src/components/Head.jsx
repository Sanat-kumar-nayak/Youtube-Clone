import React, { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { finalSearchStore, toggleSideBar } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { dataContext } from "../utils/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();

  // const { value } = useContext(dataContext);
  // console.log(value);

  // const searchCache = useSelector((store) => store.cache);

  useEffect(() => {
    const id = setTimeout(() => {
      // if (searchCache[searchQuery]) {
      //   setSuggestions(searchCache[searchQuery]);
      // } else {
      // getSuggestions();
      // }
      getSuggestions();
    }, 200);

    return () => {
      clearTimeout(id);
    };
  }, [searchQuery]);

  const getSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();

    setSuggestions(json[1]);

    // dispatch(
    //   cacheResults({
    //     [searchQuery]: [json[1]],
    //   })
    // );
  };

  return (
    <div className="sticky top-0  bg-gray-50">
      <div className="flex justify-between p-4 shadow-md">
        <div className="flex items-center justify-center  ">
          <GiHamburgerMenu
            className="h-6 w-6 cursor-pointer "
            onClick={() => {
              dispatch(toggleSideBar());
            }}
          />

          <div>
            <img
              className="w-40 h-8 mx-4"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>

        <div
          onFocus={() => {
            setShowSuggestions(true);
          }}
        >
          <div className="border-2 border-gray-500 flex items-center w-[45vw] h-9 justify-between mt-2 px-5 rounded-4xl">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="text-base outline-none w-[100%]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <IoIosSearch />
          </div>
          <div className="relative">
            {showSuggestions && searchQuery.length > 0 && (
              <div className="fixed  w-[45vw] rounded-lg">
                {suggestions.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-4 justify-start bg-white py-2.5 px-5  font-semibold hover:bg-gray-300 rounded-lg"
                    onClick={() => {
                      setSearchQuery(s);
                      setShowSuggestions(false);
                      dispatch(finalSearchStore(s));
                      navigate(
                        "/results?search_query=" + s.split(" ").join("+")
                      );
                    }}
                  >
                    <IoIosSearch />

                    <p>{s}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex  w-[10vw] justify-between items-center px-7">
          <IoNotificationsOutline className="h-9 w-9 " />
          <FaRegCircleUser className="h-9 w-9" />
        </div>
      </div>
    </div>
  );
};

export default Head;
