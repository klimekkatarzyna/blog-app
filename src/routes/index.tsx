import { ComponentType, lazy, ReactElement, Suspense } from "react";
import { useRoutes } from "react-router-dom";

import { LoadingPage } from "../page/LoadingPage";
import { MainLayoutPage } from "../page/MainLayoutPage";
// import PostPage from "../page/PostPage";

const Loadable = (Component: ComponentType) => (): ReactElement =>
  (
    <Suspense fallback={<LoadingPage />}>
      <Component />
    </Suspense>
  );

export const PostsPage = Loadable(lazy(() => import("../page/PostsPage")));
export const PostPage = Loadable(lazy(() => import("../page/PostPage")));

export default function Router() {
  return useRoutes([
    {
      children: [
        { element: <PostsPage />, path: "/" },
        { element: <PostsPage />, path: "/userId/:userId" },
        { element: <PostsPage />, path: "/posts/userId/:userId" },
        { element: <PostPage />, path: "/post/:postId" },
        { element: <MainLayoutPage />, path: "/posts/userId/:userId" },
      ],
      element: <MainLayoutPage />,
    },
  ]);
}
