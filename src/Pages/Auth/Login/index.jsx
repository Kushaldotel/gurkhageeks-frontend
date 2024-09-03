import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Auth/AuthContext";
import Toast from "../../../Components/Toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { login, error, showToast } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      className="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8 bg-gray-100"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
    >
      <Toast
        message={error}
        isVisible={showToast}
        // onClose={() => setShowToast(false)}
        onClose={() => {}}
      />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link to="/">
          <h1 className="font-semibold text-2xl text-center mb-4">
            Gurkha Geeks ✓
          </h1>
        </Link>
      </div>

      <div className="min-h-full md:bg-white border border-gray-300 md:rounded-lg md:p-10 md:shadow-md md:border md:border-gray-100 md:max-w-lg w-full sm:max-w-sm">
        <div className="sm:mx-auto sm:w-full">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                📩 Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your gmail..."
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
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
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password.."
                  autoComplete="current-password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>

              <div className="flex justify-between py-2">
                <div className="flex items-center space-x-4 pl-2">
                  <input
                    className="w-4 h-4"
                    type="checkbox"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  <p className="text-sm">Show password</p>
                </div>
                <div className="text-sm mt-2">
                  <Link to="/ForgotPass" class="font-semibold text-red-500">
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-sm bg-gray-700 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>

            <div className=" flex justify-cente items-center">
              <hr className="w-full border-gray-300" />
              <span className="w-full px-2">Or continue with</span>
              <hr className="w-full border-gray-300" />
            </div>

            <div className="">
              <button
                className="flex flex-1 border border-gray-400 space-x-2 py-2 px-4 rounded-xl items-center justify-center w-full "
                onClick={handleGoogleSignIn}
              >
                <img src="/img/Google150.png" alt="" className="h-6 w-6" />
                <p className="font-semibold">Sign In with Google</p>
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className="mt-10 text-center text-md text-gray-500">
        New Member?{" "}
        <a className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          <Link to="/Signup">Register</Link>
        </a>
      </p>
    </motion.div>
  );
};

export default Login;
