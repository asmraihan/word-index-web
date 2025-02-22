import * as z from "zod";


const RoleEnum = z.enum(["Admin", "Manager"]);

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  location: z.string(),
  confirmPassword: z.string(),
  role: RoleEnum,
});