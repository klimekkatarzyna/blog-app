import axios from "axios";
import { z } from "zod";

const PostSchema = z.object({
  body: z.string(),
  id: z.number(),
  title: z.string(),
  userId: z.number(),
});

export type PostSchemaType = z.infer<typeof PostSchema>;

export const fetchPosts = async (
  pageParam: number,
  userId?: string | null
): Promise<PostSchemaType[] | undefined> => {
  const url = userId
    ? `${
        import.meta.env.VITE_API_URL
      }/posts?userId=${userId}&_page=${pageParam}`
    : `${import.meta.env.VITE_API_URL}/posts?_page=${pageParam}`;

  try {
    const response = await axios.get(url);
    PostSchema.parse(response.data[0]);

    return response.data as PostSchemaType[];
  } catch (error) {
    if (typeof error === "object") {
      if (error !== null && "message" in error) {
        console.error("Form data is invalid", error?.message);
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
    PostSchema.parse(response.data[0]);

    return response.data[0] as PostSchemaType;
  } catch (error) {
    if (typeof error === "object") {
      if (error !== null && "message" in error) {
        console.error("Form data is invalid", error?.message);
      }
    }
  }
};
