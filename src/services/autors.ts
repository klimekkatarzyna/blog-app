import axios from "axios";
import { z } from "zod";

const AutorSchema = z.object({
  email: z.string(),
  id: z.number(),
  name: z.string(),
  phone: z.string(),
  username: z.string(),
  website: z.string(),
});

const AutorsSchema = z.array(AutorSchema.optional());

export type AutorSchemaType = z.infer<typeof AutorSchema>;
export type AutorsSchemaType = z.infer<typeof AutorsSchema>;

export const fetchAutors = async (): Promise<AutorsSchemaType | undefined> => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/users`);

    return AutorsSchema.parse(response.data);
  } catch (error) {
    if (typeof error === "object") {
      if (error !== null && "message" in error) {
        console.error("Data is invalid", error?.message);
      }
    }
  }
};

export const fetchAutorById = async (
  userId: string | undefined
): Promise<AutorSchemaType | undefined> => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/users/${userId}`
    );

    return AutorSchema.parse(response.data);
  } catch (error) {
    if (typeof error === "object") {
      if (error !== null && "message" in error) {
        console.error("Data is invalid", error?.message);
      }
    }
  }
};
