import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./routes/homePage/homePage.jsx";
import CreatePage from "./routes/createPage/createPage.jsx";
import PostPage from "./routes/postPage/postPage.jsx";
import AuthPage from "./routes/authPage/authPage.jsx";
import SearchPage from "./routes/searchPage/searchPage.jsx";
import ProfilePage from "./routes/profilePage/profilePage.jsx";
import MainLayout from "./routes/layout/mainLayout.jsx";
import { ImageKitProvider } from "@imagekit/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/create",
        element: <CreatePage />,
      },
      {
        path: "/pin/:id",
        element: <PostPage />,
      },

      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/:username",
        element: <ProfilePage />,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthPage />,
  },
]);

const URL = import.meta.env.VITE_URL_IK_ENDPOINT;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ImageKitProvider urlEndpoint={URL}>
        <RouterProvider router={router}></RouterProvider>
      </ImageKitProvider>
    </QueryClientProvider>
  </StrictMode>
);
