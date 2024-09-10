import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "@/Utils/hooks/appHooks";
import { useState } from "react";
import { orgRegisterRequest, signupRequest } from "../redux/authSlice";
import AppButton from "@/Components/Button";
import { authSelector } from "../redux/selector";
import { AuthCredentialProps, OrganizationAuthProps } from "../redux/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Checkbox } from "@/Components/ui/checkbox";
const Signup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showOrgPassword, setShowOrgPassword] = useState<boolean>(false);
  const { loading } = useAppSelector(authSelector);

  // initial state
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const orgInitialValues = {
    organisation_name: "",
    email: "",
    phone_number: "",
    address: "",
    description: "",
    website: "",
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

  const orgValidationSchema = Yup.object().shape({
    organisation_name: Yup.string().required("Organization Name is required"),
    address: Yup.string().required("Address is required"),
    phone_number: Yup.string().required("Phone number is required"),
    description: Yup.string().required("Description is required"),
    website: Yup.string().required("Website Link is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (credentials: AuthCredentialProps) => {
    dispatch(signupRequest({ credentials, navigate }));
  };

  const handleOrganizationRegistration = (
    credentials: OrganizationAuthProps
  ) => {
    dispatch(orgRegisterRequest({ credentials, navigate }));
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
      <Tabs defaultValue="user" className="max-w-[460px] w-full mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="user">User</TabsTrigger>
          <TabsTrigger value="organization">Organization</TabsTrigger>
        </TabsList>
        <TabsContent value="user">
          <Card>
            <CardHeader>
              <CardTitle>Create Account</CardTitle>
            </CardHeader>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              enableReinitialize={true}
            >
              {({ values, setFieldValue, handleBlur }) => {
                return (
                  <Form>
                    <CardContent className="space-y-2">
                      <div className="flex items-start gap-4 justify-between flex-col sm:flex-row">
                        <div className="w-full pb-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            type="text"
                            id="firstName"
                            placeholder="Your First Name"
                            name="first_name"
                            value={values?.first_name}
                            onChange={(e) => {
                              setFieldValue("first_name", e.target.value);
                            }}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage
                            name="first_name"
                            component="div"
                            className="text-red-600 text-sm"
                          />
                        </div>
                        <div className="w-full pb-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            type="text"
                            id="lastName"
                            placeholder="Your Last Name"
                            name="last_name"
                            value={values?.last_name}
                            onChange={(e) => {
                              setFieldValue("last_name", e.target.value);
                            }}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage
                            name="last_name"
                            component="div"
                            className="text-red-600 text-sm"
                          />
                        </div>
                      </div>
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
                      <div className="w-full">
                        <Label htmlFor="confirmPassword">
                          Re-type Password
                        </Label>
                        <Input
                          id="confirmPassword"
                          type={showPassword ? "text" : "password"}
                          placeholder="Re-type your password"
                          name="confirmPassword"
                          value={values?.confirmPassword}
                          onChange={(e) => {
                            setFieldValue("confirmPassword", e.target.value);
                          }}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage
                          name="confirmPassword"
                          component="div"
                          className="text-red-600 text-sm"
                        />
                      </div>
                      <div className="flex items-center gap-2 pt-4">
                        <Checkbox
                          id="showPassword"
                          onCheckedChange={() =>
                            setShowPassword((prev) => !prev)
                          }
                        />
                        <Label
                          htmlFor="showPassword"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Show Password
                        </Label>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <AppButton
                        label="Register"
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
        </TabsContent>
        <TabsContent value="organization">
          <Card>
            <CardHeader>
              <CardTitle>Register Organization</CardTitle>
            </CardHeader>
            <Formik
              initialValues={orgInitialValues}
              validationSchema={orgValidationSchema}
              onSubmit={handleOrganizationRegistration}
              enableReinitialize={true}
            >
              {({ values, setFieldValue, handleBlur }) => {
                return (
                  <Form>
                    <CardContent className="space-y-2">
                      <div className="w-full pb-2">
                        <Label htmlFor="orgName">Organization Name</Label>
                        <Input
                          type="text"
                          id="orgName"
                          placeholder="Enter Organization Name"
                          name="organisation_name"
                          value={values?.organisation_name}
                          onChange={(e) => {
                            setFieldValue("organisation_name", e.target.value);
                          }}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage
                          name="organisation_name"
                          component="div"
                          className="text-red-600 text-sm"
                        />
                      </div>
                      <div className="w-full pb-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter organization email address"
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
                      <div className="w-full pb-2 flex items-start gap-4 flex-col sm:flex-row">
                        <div className="w-full">
                          <Label htmlFor="address">Address</Label>
                          <Input
                            id="address"
                            type="address"
                            placeholder="Enter address"
                            name="address"
                            value={values?.address}
                            onChange={(e) => {
                              setFieldValue("address", e.target.value);
                            }}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage
                            name="address"
                            component="div"
                            className="text-red-600 text-sm"
                          />
                        </div>
                        <div className="w-full">
                          <Label htmlFor="phoneNumber">Phone Number</Label>
                          <Input
                            id="phoneNumber"
                            type="number"
                            placeholder="Enter phone number"
                            name="phone_number"
                            value={values?.phone_number}
                            onChange={(e) => {
                              setFieldValue("phone_number", e.target.value);
                            }}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage
                            name="phone_number"
                            component="div"
                            className="text-red-600 text-sm"
                          />
                        </div>
                      </div>
                      <div className="w-full pb-2">
                        <Label htmlFor="description">Description</Label>
                        <Input
                          id="description"
                          type="text"
                          placeholder="About Organization"
                          name="description"
                          value={values?.description}
                          onChange={(e) => {
                            setFieldValue("description", e.target.value);
                          }}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage
                          name="description"
                          component="div"
                          className="text-red-600 text-sm"
                        />
                      </div>
                      <div className="w-full pb-2">
                        <Label htmlFor="website">Website Link</Label>
                        <Input
                          id="website"
                          type="text"
                          placeholder="Enter Website Link"
                          name="website"
                          value={values?.website}
                          onChange={(e) => {
                            setFieldValue("website", e.target.value);
                          }}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage
                          name="website"
                          component="div"
                          className="text-red-600 text-sm"
                        />
                      </div>
                      <div className="w-full pb-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          type={showOrgPassword ? "text" : "password"}
                          placeholder="Create password"
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
                      <div className="w-full">
                        <Label htmlFor="confirmPassword">
                          Confirm Password
                        </Label>
                        <Input
                          id="confirmPassword"
                          type={showOrgPassword ? "text" : "password"}
                          placeholder="Re-type password"
                          name="confirmPassword"
                          value={values?.confirmPassword}
                          onChange={(e) => {
                            setFieldValue("confirmPassword", e.target.value);
                          }}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage
                          name="confirmPassword"
                          component="div"
                          className="text-red-600 text-sm"
                        />
                      </div>
                      <div className="flex items-center gap-2 pt-4">
                        <Checkbox
                          id="showOrgPassword"
                          onCheckedChange={() =>
                            setShowOrgPassword((prev) => !prev)
                          }
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
                        label="Register Organization"
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
        </TabsContent>
        <p className="mt-6 text-center text-md text-gray-500">
          Already have an account ?&nbsp;
          <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 underline">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </Tabs>
    </div>
  );
};

export default Signup;
