import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import PostListComponent, { postLoader } from "./components/PostList";
import PostListProvider from "./store/post-list-store";
import ErrorBoundary from "./components/ErrorBoundary";
import CreatePostWithContext from "./components/CreatePostWithContext";
import "./App.css";
import "./CreatePost.module.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PostListProvider>
        <App />
      </PostListProvider>
    ),
    children: [
      {
        path: "/",
        element: <PostListComponent />,
        loader: postLoader,
      },
      {
        path: "/create-post",
        element: <CreatePostWithContext />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
