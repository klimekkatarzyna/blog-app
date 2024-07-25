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

const AutorsSchema = z.array(AutorSchema);

export type AutorSchemaType = z.infer<typeof AutorSchema>;
export type AutorsSchemaType = z.infer<typeof AutorsSchema>;

export const fetchAutors = async (): Promise<AutorsSchemaType | undefined> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/users`);

  return AutorsSchema.parse(response.data);
};

export const fetchAutorById = async (
  userId: string | undefined
): Promise<AutorSchemaType | undefined> => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/users/${userId}`
  );

  return AutorSchema.parse(response.data);
};
