import { ComponentType, lazy, ReactElement, Suspense } from "react";
import { useRoutes } from "react-router-dom";

import { LoadingPage } from "../page/LoadingPage";
import { MainLayoutPage } from "../page/MainLayoutPage";

const Loadable = (Component: ComponentType) => (): ReactElement =>
  (
    <Suspense fallback={<LoadingPage />}>
      <Component />
    </Suspense>
  );

export const PostPage = Loadable(lazy(() => import("../page/PostPage")));

export default function Router() {
  return useRoutes([
    {
      children: [
        { element: <MainLayoutPage />, path: "/" },
        { element: <PostPage />, path: "/post/:id" },
      ],
      element: <MainLayoutPage />,
    },
  ]);
}
