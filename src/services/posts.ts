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

  try {
    const response = await axios.get(url);

    return PostsSchema.parse(response.data);
  } catch (error) {
    if (typeof error === "object") {
      if (error !== null && "message" in error) {
        console.error("Data is invalid", error?.message);
      }
    }
  }
};

export const fetchPostById = async (
  postId: string | undefined
): Promise<PostSchemaType | undefined> => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/posts?id=${postId}`
    );

    return PostSchema.parse(response.data[0]);
  } catch (error) {
    if (typeof error === "object") {
      if (error !== null && "message" in error) {
        console.error("Data is invalid", error?.message);
      }
    }
  }
};
