"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
import { z } from "zod";
import { forgotPasswordFormSchema } from "../apis/auth.schemas";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ForgotPasswordPage() {
  const forgotPasswordForm = useForm<z.infer<typeof forgotPasswordFormSchema>>({
    resolver: zodResolver(forgotPasswordFormSchema),
  });

  const onSubmit = () => {};

  return (
    <section>
      <div className="container max-w-md mx-auto mt-16 mb-28">
        {/* TITLE SECTION */}
        <div className="text-center">
          <h4 className="text-neutral-900">Forgot Password</h4>
          <p className="text-neutral-500 text-paragraph-md mt-2">
            Enter your email address to reset your account password
          </p>
        </div>
        {/* END TITLE SECTION */}

        {/* CREDENTIALS FORM */}
        <Form {...forgotPasswordForm}>
          <form
            onSubmit={forgotPasswordForm.handleSubmit(onSubmit)}
            className="space-y-6 mt-10"
          >
            {/* EMAIL INPUT FIELD */}
            <FormField
              control={forgotPasswordForm.control}
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

            <Button className="w-full">Send password reset link</Button>
          </form>
        </Form>
        {/* END CREDENTIALS FORM */}

        {/* CREATE ACCOUNT LINK */}
        <p className="text-center mt-7 text-sm">
          Go back to{" "}
          <Link href={"/login"} className="text-primary-600 font-medium">
            Log in
          </Link>
        </p>
        {/* END CREATE ACCOUNT LINK */}
      </div>
    </section>
  );
}
