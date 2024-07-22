import React, { PropsWithChildren } from "react";

import { PostSchemaType } from "../services/posts";

type PostDetailsProps = {
  data: PostSchemaType | undefined;
};

export const PostDetails: React.FC<PropsWithChildren<PostDetailsProps>> = ({
  data,
  children,
}: PropsWithChildren<PostDetailsProps>) => (
  <>
    <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
      <img
        className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
        src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
        alt="Image Description"
      />
    </div>

    <div className="mt-7">
      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 capitalize">
        {data?.title}
      </h3>
      <p className="mt-3 text-gray-800">{data?.body}</p>
      {children}
    </div>
  </>
);
