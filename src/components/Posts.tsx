import { PostSchemaType } from "../services/posts";
import { PostItem } from "./PostItem";

type PostsProps = {
  pages: PostSchemaType[] | undefined;
  innerRef: React.Ref<HTMLAnchorElement>;
};

export const Posts: React.FC<PostsProps> = ({
  pages,
  innerRef,
}: PostsProps) => {
  return pages?.map((item, index: number) => {
    if (pages.length === index + 1)
      return <PostItem innerRef={innerRef} data={item} key={item.id} />;
    return <PostItem data={item} key={item.id} />;
  });
};
