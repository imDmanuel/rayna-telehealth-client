"use client";

import { REGEXP_ONLY_DIGITS } from "input-otp";
import React from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { otpFormSchema } from "@/app/(auth)/apis/auth.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useAuthStore from "@/app/(auth)/apis/auth.store";
import { confirmSignupOtp, resendSignupOtp } from "@/app/(auth)/apis/auth.apis";
import { showApiError } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { toast } from "sonner";

export default function OTPForm() {
  const authStore = useAuthStore();
  const form = useForm<z.infer<typeof otpFormSchema>>({
    resolver: zodResolver(otpFormSchema),
    defaultValues: {
      email: authStore.email || "",
    },
  });
  const router = useRouter();

  if (!authStore.email) {
    router.push("/login");
    return;
  }

  const onSubmit = async (values: z.infer<typeof otpFormSchema>) => {
    try {
      const response = await confirmSignupOtp(values);
      toast.success(response.data.message);
      router.push("/login");
    } catch (e) {
      showApiError(e, "Something went wrong.");
    }
  };

  const handleResend = async () => {
    if (!authStore.email) {
      router.push("/login");
      return;
    }
    try {
      const response = await resendSignupOtp({ email: authStore.email });
      toast.success(response.data.message || "New OTP sent!");
      router.push("/signup/verify-email");
    } catch (e) {
      showApiError(e, "Unable to resend OTP");
    }
  };

  return (
    <div className="mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <input type="hidden" value={authStore.email} />
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>One-Time Password</FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                    </InputOTPGroup>
                    <InputOTPGroup>
                      <InputOTPSlot index={1} />
                    </InputOTPGroup>
                    <InputOTPGroup>
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                    <InputOTPGroup>
                      <InputOTPSlot index={4} />
                    </InputOTPGroup>
                    <InputOTPGroup>
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription>
                  Please enter the one-time password sent to your email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <p className="text-sm">
            Didn't receive code?{" "}
            <button className="text-secondary-500" onClick={handleResend}>
              Send Again
            </button>
          </p>

          <Button type="submit" className="w-full">
            Verify Email
          </Button>
        </form>
      </Form>
    </div>
  );
}
