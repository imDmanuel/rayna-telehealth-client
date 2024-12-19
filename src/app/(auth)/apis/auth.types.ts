import { z } from "zod";
import {
  loginFormSchema,
  otpFormSchema,
  signupFormSchema,
} from "./auth.schemas";
import { ApiRequestResponse } from "@/lib/types";

// LOGIN
export type LoginData = z.infer<typeof loginFormSchema>;
export type LoginResponse = ApiRequestResponse<{
  userId: string;
}> & { accessToken: string };
export type LoginErrorReasons =
  | "not-found"
  | "invalid-auth-method"
  | "wrong-password"
  | "email-unverified";
// END LOGIN

// SIGNUP
export type SignupData = Omit<
  z.infer<typeof signupFormSchema>,
  "confirmPassword"
>;
export type SignupResponse = ApiRequestResponse<object>;
export type SignupErrorReasons = "user-exists" | "generic-failure";
// END SIGNUP

// CONFIRM SIGNUP OTP
export type ConfirmSignupOtpData = z.infer<typeof otpFormSchema>;
export type ConfirmSignupOtpResponse = ApiRequestResponse<{ userId: string }>;
export type ConfirmSignupOtpErrorReasons = "invalid-otp" | "expired-otp";
// END CONFIRM SIGNUP

// RESEND SIGNUP OTP
export type ResendSignupOtpData = {
  email: string;
};
export type ResendSignupOtpResponse = ApiRequestResponse<{ userId: string }>;
// END RESEND SIGNUP OTP
