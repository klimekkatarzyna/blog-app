import axios from "axios";
import { z } from "zod";

const PostSchema = z.object({
  body: z.string(),
  id: z.number(),
  title: z.string(),
  userId: z.number(),
});

const PostsSchema = z.array(PostSchema.optional());

export type PostsSchemaType = z.infer<typeof PostsSchema>;
export type PostSchemaType = z.infer<typeof PostSchema>;

export const fetchPosts = async (
  pageParam: number,
  userId?: string | null
): Promise<PostsSchemaType | undefined> => {
  const url = userId
    ? `${
        import.meta.env.VITE_API_URL
      }/posts?userId=${userId}&_page=${pageParam}`
    : `${import.meta.env.VITE_API_URL}/posts?_page=${pageParam}`;

  const response = await axios.get(url);

  return PostsSchema.parse(response.data);
};

export const fetchPostById = async (
  postId: string | undefined
): Promise<PostSchemaType | undefined> => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/posts?id=${postId}`
  );

  return PostSchema.parse(response.data[0]);
};
