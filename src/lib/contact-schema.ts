import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Name must be 100 characters or fewer."),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(5000, "Message must be 5,000 characters or fewer."),
});

export type ContactInput = z.infer<typeof contactSchema>;
