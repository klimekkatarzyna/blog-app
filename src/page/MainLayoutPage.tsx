import { useQuery } from "@tanstack/react-query";

import { Header } from "../components/Header";
import { List } from "../components/List";
import { LoadingPage } from "./LoadingPage";
import { getPosts } from "../services/posts";
import { Button } from "../components/Button";

export const MainLayoutPage: React.FC = () => {
  const { error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center text-slate-900">
        Something went wrong
      </div>
    );
  }

  return (
    <div className="relative">
      <Header />
      <List />
      <Button />
    </div>
  );
};
