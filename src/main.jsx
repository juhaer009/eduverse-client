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
import MyCourse from "./pages/MyCourse/MyCourse.jsx";
import MyCourseDetails from "./pages/MyCourseDetails/MyCourseDetails.jsx";
import UpdateCourse from "./pages/UpdateCourse/UpdateCourse.jsx";
import { HelmetProvider } from "react-helmet-async";
import Error from "./pages/Error/Error.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import About from "./pages/About/About.jsx";

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
        loader: () => fetch("https://eduverse-server-five.vercel.app/courses"),
        Component: AllCourse,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/course-details/:id",
        element: <CourseDetails></CourseDetails>,
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
      {
        path: "/mycourse",
        Component: MyCourse,
      },
      {
        path: "/mycourse-details/:id",
        Component: MyCourseDetails,
      },
      {
        path: "/update-course/:id",
        Component: UpdateCourse,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <AuthProvider>
    <ToastContainer />
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </AuthProvider>
  // </StrictMode>
);
