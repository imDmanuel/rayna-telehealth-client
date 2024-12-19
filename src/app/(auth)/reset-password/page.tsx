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
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { z } from "zod";
import { resetPasswordFormSchema } from "../apis/auth.schemas";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ResetPasswordPage() {
  const resetPasswordForm = useForm<z.infer<typeof resetPasswordFormSchema>>({
    resolver: zodResolver(resetPasswordFormSchema),
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const onSubmit = () => {};

  return (
    <section>
      <div className="container max-w-md mx-auto mt-16 mb-28">
        {/* TITLE SECTION */}
        <div className="text-center">
          <h4 className="text-neutral-900">Reset Password</h4>
          <p className="text-neutral-500 text-paragraph-md mt-2">
            Please enter a new password for your account
          </p>
        </div>
        {/* END TITLE SECTION */}

        {/* CREDENTIALS FORM */}
        <Form {...resetPasswordForm}>
          <form
            onSubmit={resetPasswordForm.handleSubmit(onSubmit)}
            className="space-y-6 mt-10"
          >
            {/* PASSWORD INPUT FIELD */}
            <FormField
              control={resetPasswordForm.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NEW PASSWORD</FormLabel>

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
              control={resetPasswordForm.control}
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

            <Button className="w-full">Reset Password</Button>
          </form>
        </Form>
        {/* END CREDENTIALS FORM */}

        {/* LOGIN LINK */}
        <p className="text-center mt-7 text-sm">
          Go back to?{" "}
          <Link href={"/login"} className="text-primary-600 font-medium">
            Log in
          </Link>
        </p>
        {/* END LOGIN LINK */}
      </div>
    </section>
  );
}
