import { z } from "zod";

const profileSchema = z.strictObject({
  name: z.string().min(1),
  brand: z.string().min(1),
  email: z.email().nullable(),
  schoolEmail: z.email().nullable(),
  github: z.url({ protocol: /^https$/ }).nullable(),
  linkedin: z.url({ protocol: /^https$/ }).nullable(),
  instagram: z.url({ protocol: /^https$/ }).nullable(),
  resume: z
    .string()
    .regex(/^\/[^/].*\.pdf$/)
    .nullable(),
});
export const profile = profileSchema.parse({
  name: "Dimas Satria Widjatmiko",
  brand: "dimeees",
  email: "dimessw28@gmail.com",
  schoolEmail: "dimassatriawidjatmiko@mail.ugm.ac.id",
  github: "https://github.com/hmnnanxiety",
  linkedin: "https://www.linkedin.com/in/dimas-satria-widjatmiko-90aa01323/",
  instagram: "https://www.instagram.com/dimees.e/",
  resume: null,
});
