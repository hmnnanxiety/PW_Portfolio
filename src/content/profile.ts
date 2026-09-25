import { z } from "zod";

const profileSchema = z.strictObject({
  name: z.string().min(1),
  brand: z.string().min(1),
  email: z.email().nullable(),
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
  email: null,
  github: null,
  linkedin: null,
  instagram: null,
  resume: null,
});
