import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "@/Utils/hooks/appHooks";
import { useState } from "react";
import { signupRequest } from "../redux/authSlice";
import { Button } from "@/Components/ui/button";

const Signup = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // validation schema
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values: any) => {
    dispatch(signupRequest(values));
  };

  return (
    <div className="flex flex-1 flex-col justify-center px-6 py-2 lg:px-8 items-center bg-gray-100 min-h-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/">
            <h1 className="font-semibold text-2xl text-center mb-4">
              Gurkha Geeks ✓
            </h1>
          </Link>
        </div>
        <h2 className="text-center font-medium leading-9 tracking-tight text-gray-900 font-david-libre p-4">
          <span className="text-orange-500">Create</span> Your New&nbsp;
          <span className="text-orange-500">Account</span>
        </h2>
      </div>

      <div className="min-h-full md:bg-white md:rounded-lg md:p-10 md:shadow-md md:border md:border-gray-100 md:max-w-lg w-full sm:max-w-sm">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-5">
              <div className="md:flex space-x-3 ">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First Name
                  </label>
                  <div className="mt-2">
                    <Field
                      id="firstName"
                      name="first_name"
                      type="text"
                      placeholder="Your First Name"
                      className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                    />
                    <ErrorMessage
                      name="first_name"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last Name
                  </label>
                  <div className="mt-2">
                    <Field
                      id="lastName"
                      name="last_name"
                      type="text"
                      placeholder="Your Last Name..."
                      className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                    />
                    <ErrorMessage
                      name="last_name"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  📩 Email address
                </label>
                <div className="mt-2">
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email..."
                    className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    🔐 New Password
                  </label>
                </div>
                <div className="mt-2">
                  <Field
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your new password..."
                    className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    🔐 Confirm Password
                  </label>
                </div>
                <div className="mt-2">
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm your password..."
                    className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2 pl-2">
                <input
                  type="checkbox"
                  id="show_pwd"
                  checked={showPassword}
                  onChange={() => setShowPassword((prev) => !prev)}
                  className="w-4 h-4"
                />
                <label htmlFor="show_pwd" className="text-sm">
                  Show password
                </label>
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full"
                >
                  Sign Up
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <p className="mt-6 text-center text-md text-gray-500">
        Already have an account?{" "}
        <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          <Link to="/login">Login</Link>
        </span>
      </p>
    </div>
  );
};

export default Signup;
