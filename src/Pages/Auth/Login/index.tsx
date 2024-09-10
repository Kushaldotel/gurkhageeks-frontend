import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AppButton from "@/Components/Button";
import { useAppDispatch, useAppSelector } from "@/Utils/hooks/appHooks";
import { authSelector } from "../redux/selector";
import { loginRequest } from "../redux/authSlice";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Checkbox } from "@/Components/ui/checkbox";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { loading } = useAppSelector(authSelector);
  const navigate = useNavigate();

  // initial state
  const initialState = { email: "", password: "" };

  // Validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values: { email: string; password: string }) => {
    dispatch(loginRequest({ credentials: values, navigate }));
  };

  const handleGoogleSignIn = async () => {
    // Handle Google Sign-In logic here...
  };

  return (
    <div className="flex flex-1 flex-col px-6 py-2 lg:px-8 min-h-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-10 mb-5">
        <Link to="/">
          <h1 className="font-semibold text-2xl text-center mb-4">
            Gurkha Geeks ✓
          </h1>
        </Link>
      </div>
      <Card className="max-w-[460px] mx-auto w-full">
        <CardHeader>
          <CardTitle>Login Account</CardTitle>
        </CardHeader>
        <Formik
          initialValues={initialState}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({ values, setFieldValue, handleBlur }) => {
            return (
              <Form>
                <CardContent className="space-y-2">
                  <div className="w-full pb-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      name="email"
                      value={values?.email}
                      onChange={(e) => {
                        setFieldValue("email", e.target.value);
                      }}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>

                  <div className="w-full pb-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create your password"
                      name="password"
                      value={values?.password}
                      onChange={(e) => {
                        setFieldValue("password", e.target.value);
                      }}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <div className="flex items-center gap-2 pt-4">
                    <Checkbox
                      id="showOrgPassword"
                      onCheckedChange={() => setShowPassword((prev) => !prev)}
                    />
                    <Label
                      htmlFor="showOrgPassword"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Show Password
                    </Label>
                  </div>
                </CardContent>
                <CardFooter>
                  <AppButton
                    label="Login"
                    className="w-full"
                    type="submit"
                    loading={loading}
                  />
                </CardFooter>
              </Form>
            );
          }}
        </Formik>
      </Card>
      <p className="mt-6 text-center text-md text-gray-500">
        New Member ?&nbsp;
        <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 underline">
          <Link to="/signup">Register</Link>
        </span>
      </p>
    </div>
  );
};

export default Login;
