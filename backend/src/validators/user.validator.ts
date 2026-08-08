import { z } from "zod";

export const updateUserSchema = z.object({
  name: z.string().trim().min(1).max(255).optional(),
  currency: z.enum(["USD", "INR", "EUR", "GBP", "JPY"]).optional(),
});

export type UpdateUserType = z.infer<typeof updateUserSchema>;
