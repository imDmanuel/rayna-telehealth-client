import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Please provide a valid email address")
    .min(1, "Email Address is required"),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "Please enter at least 8 characters"),
});

export const signupFormSchema = z
  .object({
    firstName: z
      .string({ required_error: "First name is required" })
      .min(1, "Please enter your first name"),
    lastName: z
      .string({ required_error: "Last name is required" })
      .min(1, "Please enter your last name"),
    email: z
      .string({ required_error: "Email is required" })
      .email("Please provide a valid email address")
      .min(1, "Email Address is required"),
    password: z
      .string({ required_error: "Password is required" })
      .min(8, "Please enter at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Error will be shown at confirmPassword field
  });

export const forgotPasswordFormSchema = z.object({
  email: z
    .string({ required_error: "Email of account is required" })
    .email("Please provide a valid email address"),
});

export const resetPasswordFormSchema = z
  .object({
    newPassword: z
      .string({ required_error: "Password is required" })
      .min(8, "Please enter at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Error will be shown at confirmPassword field
  });

export const otpFormSchema = z.object({
  otp: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
  email: z.string().email("Please provide a valid email address"),
});
