import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notes from "./Notes";
import Home from "./Home";
import NotesApi from "./NotesApi";
import App from "../App";
import Dashboard from "./Dashboard";

const RootNavigator = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
            path:'/',
            element: <Home />,
        },
        {
            path: "/notes",
            element: <Notes />,
          },
          {
            path: "/notes-api",
            element: <NotesApi />,
          },
      ]
    },
 
  ]);
  return <RouterProvider router={appRouter} />;
};

export default RootNavigator;
