import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./root/Root.jsx";
import Home from "./pages/Home.jsx";
import AllCourse from "./pages/AllCourse/AllCourse.jsx";
import CourseDetails from "./pages/CourseDetails/CourseDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allcourse",
        loader: () => fetch("http://localhost:3000/courses"),
        Component: AllCourse,
      },
      {
        path: "/course-details/:id",
        Component: CourseDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
