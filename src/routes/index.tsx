import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

import { LoadingPage } from "../page/LoadingPage";
import { MainLayout } from "../page/MainLayout";

export const PostsList = lazy(() => import("../components/PostsList"));
export const Post = lazy(() => import("../components/Post"));

export default function Router() {
  const routes = useRoutes([
    {
      children: [
        { element: <PostsList />, path: "/" },
        { element: <PostsList />, path: "/posts/user/:userId" },
        { element: <Post />, path: "/post/:postId" },
      ],
      element: <MainLayout />,
    },
  ]);
  return <Suspense fallback={<LoadingPage />}>{routes}</Suspense>;
}
