import React from "react";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import FinalSearchVideos from "./components/finalSearchVideos";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Head /> <Body />
        </>
      ),
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/results",
          element: <FinalSearchVideos />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div className="">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;
