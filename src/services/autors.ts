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

export type AutorSchemaType = z.infer<typeof AutorSchema>;

export const fetchAutors = async (): Promise<AutorSchemaType[] | undefined> => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
    AutorSchema.parse(response.data[0]);

    return response.data as AutorSchemaType[];
  } catch (error) {
    console.error("Form data is invalid", error);
  }
};

export const fetchAutorById = async (
  userId: string | undefined
): Promise<AutorSchemaType[] | undefined> => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/users/${userId}`
    );
    AutorSchema.parse(response.data[0]);

    return response.data as AutorSchemaType[];
  } catch (error) {
    console.error("Form data is invalid", error);
  }
};
