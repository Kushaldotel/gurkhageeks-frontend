import AppButton from "@/Components/Button";
import { useAppDispatch, useAppSelector } from "@/Utils/hooks/appHooks";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { verificationRequest } from "../redux/authSlice";
import { authSelector } from "../redux/selector";

const EmailVerification: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { uidb, token } = useParams();
  const { loading } = useAppSelector(authSelector);

  useEffect(() => {
    handleVerification;
  }, [uidb, token]);
  const handleVerification = () => {
    const values = { uidb, token };
    dispatch(verificationRequest({ values, navigate }));
  };
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      {loading ? (
        "Verifying email..."
      ) : (
        <section className="flex flex-col gap-4">
          <h1>Verification Successful!</h1>
          <AppButton label="Return to site" onClick={()=> navigate('/')} />
        </section>
      )}
    </div>
  );
};

export default EmailVerification;
