import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { fetchPostById } from "../services/posts";
import { PostDetails } from "./PostDetails";
import { ErrorPage } from "../page/ErrorPage";

export const Post: React.FC = () => {
  const { postId } = useParams();

  const { data, error } = useQuery({
    queryKey: ["posts", postId],
    queryFn: () => fetchPostById(postId),
    enabled: !!postId,
  });

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div
      className="max-w-[60rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
      id="top"
    >
      <PostDetails data={data} />
    </div>
  );
};
