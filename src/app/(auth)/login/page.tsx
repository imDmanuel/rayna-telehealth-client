"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Mail } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import Image from "next/image";
import GoogleIcon from "@/images/google-icon.svg";
import TwitterIcon from "@/images/twitter-icon.svg";
import { z } from "zod";
import { loginFormSchema } from "../apis/auth.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { login, resendSignupOtp } from "../apis/auth.apis";
import { getErrorReason, showApiError } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { LoginErrorReasons } from "../apis/auth.types";
import useAuthStore from "../apis/auth.store";

export default function LoginPage() {
  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();
  const authStore = useAuthStore();

  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    try {
      const loginResponse = await login(values);
      localStorage.setItem("accessToken", loginResponse.data.accessToken);
      router.push("/dashboard");
    } catch (e) {
      showApiError(e, "Error occurred while logging in");
      const reason = getErrorReason<LoginErrorReasons>(e);

      if (reason === "email-unverified") {
        authStore.setEmail(values.email);

        // Request for new OTP
        try {
          await resendSignupOtp({
            email: values.email,
          });
          router.push("/signup/verify-email");
        } catch (e) {
          showApiError(e, "Unable to request new OTP");
        }
      }
    }
  };

  return (
    <section>
      <div className="container max-w-md mx-auto mt-16 mb-28">
        {/* TITLE SECTION */}
        <div className="text-center">
          <h4 className="text-neutral-900">Log In</h4>
          <p className="text-neutral-500 text-paragraph-md mt-2">
            Enter your credentials to access your account
          </p>
        </div>
        {/* END TITLE SECTION */}

        {/* CREDENTIALS FORM */}
        <Form {...loginForm}>
          <form
            onSubmit={loginForm.handleSubmit(onSubmit)}
            className="space-y-6 mt-10"
          >
            {/* EMAIL INPUT FIELD */}
            <FormField
              control={loginForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>EMAIL ADDRESS</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Email Address"
                      {...field}
                      afterComponent={
                        <div className="size-[3.5rem] flex items-center justify-center">
                          <Mail className="text-neutral-500 h-5" />
                        </div>
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* END EMAIL INPUT FIELD */}

            {/* PASSWORD INPUT FIELD */}
            <FormField
              control={loginForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PASSWORD</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Enter Password"
                      type={passwordVisible ? "text" : "password"}
                      {...field}
                      afterComponent={
                        <Button
                          onClick={() => setPasswordVisible((state) => !state)}
                          variant={"ghost"}
                          size={"icon-lg"}
                          type="button"
                        >
                          {passwordVisible ? (
                            <EyeOff className="text-neutral-500 h-5" />
                          ) : (
                            <Eye className="text-neutral-500 h-5" />
                          )}
                        </Button>
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* END PASSWORD INPUT FIELD */}

            {/* REMEMBER AND FORGOT PASSWORD */}
            <div className="text-sm flex flex-wrap items-center gap-x-4 justify-between">
              <label className="flex items-center gap-x-2">
                <Checkbox />
                <span>Rembmber me for 30 days</span>
              </label>

              <Link
                href={"/forgot-password"}
                className="text-primary-600 font-medium text-right"
              >
                Forgot Password
              </Link>
            </div>
            {/* END REMEMBER AND FORGOT PASSWORD */}

            <Button
              className="w-full"
              disabled={loginForm.formState.isSubmitting}
            >
              Log into Account
            </Button>
          </form>
        </Form>
        {/* END CREDENTIALS FORM */}

        <div className="my-9 flex items-center relative">
          <hr className="border-neutral-300 w-full" />
          <p className="text-neutral-500 bg-white px-2 inline-block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Or
          </p>
        </div>

        {/* OAUTH LOGIN */}
        <div className="space-y-3">
          {/* GOOGLE LOGIN BUTTON */}
          <Button
            variant={"outline"}
            className="flex items-center gap-x-4 w-full"
          >
            <Image src={GoogleIcon} className="size-5" alt="" />
            <span>Continue with Google</span>
          </Button>
          {/* END GOOGLE LOGIN BUTTON */}
          {/* TWITTER BUTTON */}
          <Button
            variant={"outline"}
            className="flex items-center gap-x-4 w-full"
          >
            <Image src={TwitterIcon} className="size-5" alt="" />
            <span>Continue with Twitter</span>
          </Button>
          {/* END TWITTER BUTTON */}
        </div>
        {/* END OAUTH LOGIN */}

        {/* CREATE ACCOUNT LINK */}
        <p className="text-center mt-7 text-sm">
          Are you new here?{" "}
          <Link href={"/sign-up"} className="text-primary-600 font-medium">
            Create Account
          </Link>
        </p>
        {/* END CREATE ACCOUNT LINK */}
      </div>
    </section>
  );
}
