import OTPForm from "@/components/general/otp-form";
import React from "react";

export default function VerifySignupEmailPage() {
  return (
    <section>
      <div className="container max-w-md mx-auto mt-16 mb-28">
        {/* TITLE SECTION */}
        <div className="text-center mb-4">
          <h4 className="text-neutral-900">Verify Email</h4>
          <p className="text-neutral-500 text-paragraph-md mt-2">
            We sent an OTP to your email
          </p>
        </div>
        {/* END TITLE SECTION */}

        {/* OTP FORM */}
        <OTPForm />
        {/* END OTP FORM */}
      </div>
    </section>
  );
}
