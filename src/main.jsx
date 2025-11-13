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
import LogIn from "./pages/LogIn/LogIn.jsx";
import Register from "./pages/Register/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import PrivateRoute from "./Provider/PrivateRoute.jsx";
import { ToastContainer } from "react-toastify";
import AddCourse from "./pages/AddCourse/AddCourse.jsx";

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
        element: (
          <PrivateRoute>
            <CourseDetails></CourseDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: LogIn,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/addcourse",
        Component: AddCourse,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
