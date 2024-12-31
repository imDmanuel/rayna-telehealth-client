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
import { Eye, EyeOff, Mail, UserIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import GoogleIcon from "@/images/google-icon.svg";
import TwitterIcon from "@/images/twitter-icon.svg";
import { z } from "zod";
import { signupFormSchema } from "../apis/auth.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { signup } from "../apis/auth.apis";
import { showApiError } from "@/lib/utils";
import { toast } from "sonner";

export default function SignupPage() {
  const signupForm = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const onSubmit = async ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    confirmPassword,
    ...values
  }: z.infer<typeof signupFormSchema>) => {
    try {
      const response = await signup(values);
      toast.success(response.data.message);
      // TODO: Redirect to confirm email page
    } catch (e) {
      showApiError(e, "Error while signing up user");
    }
  };

  return (
    <section>
      <div className="container max-w-md mx-auto mt-16 mb-28">
        {/* TITLE SECTION */}
        <div className="text-center">
          <h4 className="text-neutral-900">Sign Up</h4>
          <p className="text-neutral-500 text-paragraph-md mt-2">
            Fill in your details to create your account
          </p>
        </div>
        {/* END TITLE SECTION */}

        {/* CREDENTIALS FORM */}
        <Form {...signupForm}>
          <form
            onSubmit={signupForm.handleSubmit(onSubmit)}
            className="space-y-6 mt-10"
          >
            {/* FIRST NAME INPUT FIELD */}
            <FormField
              control={signupForm.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>FIRST NAME</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="First Name"
                      {...field}
                      afterComponent={
                        <div className="size-[3.5rem] flex items-center justify-center">
                          <UserIcon className="text-neutral-500 h-5" />
                        </div>
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* END FIRST NAME INPUT FIELD */}

            {/* LAST NAME INPUT FIELD */}
            <FormField
              control={signupForm.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LAST NAME</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      {...field}
                      afterComponent={
                        <div className="size-[3.5rem] flex items-center justify-center">
                          <UserIcon className="text-neutral-500 h-5" />
                        </div>
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* END LAST NAME INPUT FIELD */}

            {/* EMAIL INPUT FIELD */}
            <FormField
              control={signupForm.control}
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
              control={signupForm.control}
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

            {/* CONFIRM PASSWORD INPUT FIELD */}
            <FormField
              control={signupForm.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CONFIRM PASSWORD</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Confirm Password"
                      type={confirmPasswordVisible ? "text" : "password"}
                      {...field}
                      afterComponent={
                        <Button
                          onClick={() =>
                            setConfirmPasswordVisible((state) => !state)
                          }
                          variant={"ghost"}
                          size={"icon-lg"}
                          type="button"
                        >
                          {confirmPasswordVisible ? (
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
            {/* END CONFIRM PASSWORD INPUT FIELD */}

            <Button
              className="w-full"
              disabled={signupForm.formState.isSubmitting}
            >
              Create your account
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

        {/* OAUTH SIGNUP */}
        <div className="space-y-3">
          {/* GOOGLE SIGNUP BUTTON */}
          <Button
            variant={"outline"}
            className="flex items-center gap-x-4 w-full"
          >
            <Image src={GoogleIcon} className="size-5" alt="" />
            <span>Sign up with Google</span>
          </Button>
          {/* END GOOGLE SIGNUP BUTTON */}
          {/* TWITTER BUTTON */}
          <Button
            variant={"outline"}
            className="flex items-center gap-x-4 w-full"
          >
            <Image src={TwitterIcon} className="size-5" alt="" />
            <span>Sign up with Twitter</span>
          </Button>
          {/* END TWITTER BUTTON */}
        </div>
        {/* END OAUTH SIGNUP */}

        {/* LOGIN LINK */}
        <p className="text-center mt-7 text-sm">
          Already have an account?{" "}
          <Link href={"/login"} className="text-primary-600 font-medium">
            Log in
          </Link>
        </p>
        {/* END LOGIN LINK */}
      </div>
    </section>
  );
}
