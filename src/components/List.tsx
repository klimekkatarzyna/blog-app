import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";

import { fetchPosts } from "../services/posts";
import { useInView } from "react-intersection-observer";
import { Spinner } from "./icons/Spinner";
import { Posts } from "./Posts";
import { ErrorPage } from "../page/ErrorPage";

export const List: React.FC = () => {
  const { ref, inView } = useInView();

  const { userId } = useParams();

  const { data, error, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["posts", userId],
      queryFn: ({ pageParam }) => fetchPosts(pageParam, userId),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = lastPage?.length ? allPages.length + 1 : undefined;
        return nextPage;
      },
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div
      className="max-w-[60rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
      id="top"
    >
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Blog posts
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.pages.map((pages, index) => (
          <Posts key={index} pages={pages} innerRef={ref} />
        ))}
      </div>
      {isFetchingNextPage && hasNextPage && (
        <span className="my-2 flex items-center justify-center">
          <Spinner />
        </span>
      )}
    </div>
  );
};
