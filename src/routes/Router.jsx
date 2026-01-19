import Mainlayouts from "@/components/layout/Mainlayouts";
import Createpost from "@/pages/Createpost";
import NotFound from "@/pages/NotFound";
import Postdetails from "@/pages/Postdetails";
import Posts from "@/pages/Posts";
import React from "react";
import { createBrowserRouter } from "react-router-dom";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayouts />,
    children: [
      {
        index: true,
        element: <Posts />,
      },
      {
        path:"postdatils/:id",
        element:<Postdetails />
      },
      {
        path:"createpost",
        element:<Createpost />
      },
      {
        path:"*",
        element:<NotFound />
      }
    
    ],
  },
]);
export default AppRouter;
