import { Navigate, createBrowserRouter } from "react-router-dom";
import { MAIN_PATH } from "src/constant";
import NetflixLoginPage from "src/pages/Login";

import MainLayout from "src/layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: MAIN_PATH.root,
        element: <NetflixLoginPage/>,
      },
      {
        path: MAIN_PATH.browse,
        lazy: () => import("src/pages/HomePage"),
      },
      {
        path: MAIN_PATH.genreExplore,
        children: [
          {
            path: ":genreId",
            lazy: () => import("src/pages/GenreExplore"),
          },
        ],
      },
      {
        path: `watch/:watchId`,
        lazy: () => import("src/pages/WatchPage"),
      },
    ],
  },
]);

export default router;
