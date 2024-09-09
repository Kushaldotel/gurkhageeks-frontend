import AppButton from "@/Components/Button";
import { Mail } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const VerificationPage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <main className="w-screen h-screen flex">
      <section className="mx-auto mt-12 text-center">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-green-100 p-3 w-12 h-12 flex items-center justify-center rounded-full">
            <Mail size={24} className="text-green-600" />
          </div>
        </div>
        <h1 className="font-semibold text-xl">Please verify your email</h1>
        <p className="mt-4">You&apos;re almost there! We sent an email to</p>
        <strong>email@gmail.com</strong>
        <p className="max-w-[460px] py-8">
          Just click on the link in that email to complete your signup. if you
          don't see it, you may need to <strong>check your spam </strong>folder.
        </p>

        <p className="mb-4">Still can't find the email? no problem.</p>
        <div className="flex items-center justify-center flex-col sm:flex-row gap-4">
          <AppButton label="Resend Verification Email" />
          <AppButton
            label="Return to site"
            variant="outline"
            onClick={()=> navigate('/')}
          />
        </div>
      </section>
    </main>
  );
};

export default VerificationPage;
