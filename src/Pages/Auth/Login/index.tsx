import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

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
    console.log("Form data", values);
    // Handle login logic here
  };

  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Handle Google Sign-In here...
  };

  return (
    <motion.div
      className="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8 bg-gray-100"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link to="/">
          <h1 className="font-semibold text-2xl text-center mb-4">
            Gurkha Geeks ✓
          </h1>
        </Link>
      </div>

      <div className="min-h-full md:bg-white border border-gray-300 md:rounded-lg md:p-10 md:shadow-md md:border md:border-gray-100 md:max-w-lg w-full sm:max-w-sm">
        <div className="sm:mx-auto sm:w-full">
          <Formik
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-5">
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
                      autoComplete="email"
                      placeholder="Enter your gmail..."
                      className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      🔐 Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <Field
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password.."
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="flex justify-between py-2">
                    <div className="flex items-center space-x-2 pl-2">
                      <input
                        className="w-4 h-4"
                        type="checkbox"
                        id="show_pwd"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                      />
                      <label htmlFor="show_pwd" className="text-sm">Show password</label>
                    </div>
                    <div className="text-sm mt-2">
                      <Link
                        to="/ForgotPass"
                        className="font-semibold text-red-500"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full justify-center rounded-sm bg-gray-700 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {isSubmitting ? "Signing in..." : "Sign in"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          <div className=" flex justify-cente items-center">
            <hr className="w-full border-gray-300" />
            <span className="w-full px-2 my-4">Or continue with</span>
            <hr className="w-full border-gray-300" />
          </div>

          <div>
            <button
              className="flex flex-1 border border-gray-400 space-x-2 py-2 px-4 rounded-xl items-center justify-center w-full"
              onClick={handleGoogleSignIn}
            >
              <img src="/img/Google150.png" alt="" className="h-6 w-6" />
              <p className="font-semibold">Sign In with Google</p>
            </button>
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-md text-gray-500">
        New Member?&nbsp;
        <Link
          to="/signup"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Register
        </Link>
      </p>
    </motion.div>
  );
};

export default Login;
