const { z } = require("zod");

// creating object Schema
const signUpSchema = z.object({
  username: z
    .string({ required_error: "Name is required." })
    .min(3, { message: "Name must be at least 3 characters." })
    .max(20, { message: "Name is too long." })
    .transform((val) => val.trim()),

  email: z
    .string({ required_error: "Email is required." })
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: "Invalid email address.",
    })
    .min(3, { message: "Email must be at least 3 characters." })
    .max(50, { message: "Email is too long." }) // increased to 50 for realistic emails
    .transform((val) => val.trim().toLowerCase()),

  phone: z
    .string({ required_error: "Phone number is required." })
    .min(10, { message: "Phone number must be at least 10 digits." })
    .max(20, { message: "Phone number is too long." })
    .transform((val) => val.trim()),

  password: z
    .string({ required_error: "Password is required." })
    .min(6, { message: "Password must be at least 6 characters." })
    .max(1024, { message: "Password can't be greater than 1024 characters." })
    .transform((val) => val.trim()),
});

module.exports = signUpSchema;
