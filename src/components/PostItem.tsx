import { Link } from "react-router-dom";

import { PostSchemaType } from "../services/posts";
import { PostDetails } from "./PostDetails";
import React, { FC } from "react";

type PostItemProps = {
  data: PostSchemaType | undefined;
  innerRef?: React.Ref<HTMLAnchorElement>;
};

export const PostItem: FC<PostItemProps> = ({
  data,
  innerRef,
}: PostItemProps) => (
  <Link
    to={`/post/${data?.id}`}
    data-testid="post-item"
    className="group"
    ref={innerRef}
  >
    <PostDetails data={data}>
      <p className="mt-5 inline-flex items-center gap-x-1 uppercase text-blue-500 group-hover:text-blue-400 font-medium text-xs">
        Read more
        <svg
          className="flex-shrink-0 size-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </p>
    </PostDetails>
  </Link>
);
