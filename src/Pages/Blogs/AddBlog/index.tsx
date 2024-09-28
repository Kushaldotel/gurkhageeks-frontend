import React, { useEffect, useState } from "react";
import AppButton from "@/Components/Button";
import QuillEditor from "@/Components/Editor/index";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import BlogModal from "../modal";
import Modal from "@/Components/Modal";
import { useAppDispatch, useAppSelector } from "@/Utils/hooks/appHooks";
import { createBlogPostRequest, getCategoriesRequest } from "../redux/blogSlice";
import { Link, useNavigate } from "react-router-dom";
import { BlogFormProps } from "../redux/types";
import { blogSelector } from "../redux/selector";

const CreateBlogs: React.FC = () => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const { loading } = useAppSelector(blogSelector)
  const initialState = {
    title: "",
    content: "",
    categories: [] as number [],
    tags: [],
    thumbnail: null,
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
    categories: Yup.array()
      .min(1, "At least one category is required")
      .required("Categories are required"),
    tags: Yup.array().max(5, "You can add up to 5 tags"),
  });
  const handleSubmit = (values: BlogFormProps, { resetForm }: any) => {

    dispatch(
      createBlogPostRequest({ data: values, navigate, setShowModal, resetForm })
    );
  };

  useEffect(() => {
    dispatch(getCategoriesRequest());
  }, []);

  return (
    <Formik
      initialValues={initialState}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form>
          <div className="max-w-7xl mx-auto rounded-lg my-8">
            <header className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Link to="/">
                  <button className="mr-4 hover:bg-gray-100 hover:rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                </Link>
                <h1 className="text-2xl font-bold">GurkhaGeeks </h1>
              </div>
              <div className="space-x-2">
                <Button variant="outline">Preview</Button>
                <Modal
                  showModal={showModal}
                  setShowModal={setShowModal}
                  trigger={
                    <AppButton
                      label="Save"
                      onClick={() => setShowModal(true)}
                    />
                  }
                >
                  <BlogModal formik={formik} />
                  <div className="text-end">
                    <AppButton
                      label="Cancel"
                      variant="outline"
                      className="me-2"
                      onClick={() => setShowModal(false)}
                    />
                    <AppButton
                      label="Publish"
                      type="submit"
                      loading={loading}
                      onClick={() => formik.handleSubmit()}
                    />
                  </div>
                </Modal>
              </div>
            </header>
            <CardHeader className="py-2">
              <CardTitle className="flex items-center justify-between">
                <div>Add Blog</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-4">
              {/* Title Field */}
              <div className="mb-4">
                {/* <Label htmlFor="title" className="text-xl font-normal">
                  Title
                </Label> */}
                <input
                  type="text"
                  id="title"
                  placeholder="Enter your title..."
                  name="title"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.title}
                  className="w-full py-2 border-b border-gray-800 sm:text-lg xl:text-2xl focus:outline-none focus:ring-b-2 focus:ring-blue-600"
                />
                {formik.touched.title && formik.errors.title ? (
                  <div className="text-red-500 mt-2">{formik.errors.title}</div>
                ) : null}
              </div>

              {/* Content Field */}
              <div className="mb-4 border rounded-t-sm">
                <QuillEditor
                  value={formik.values.content}
                  onChange={(data: string) =>
                    formik.setFieldValue("content", data)
                  }
                />
                {formik.touched.content && formik.errors.content ? (
                  <div className="text-red-500 mt-2">
                    {formik.errors.content}
                  </div>
                ) : null}
              </div>
            </CardContent>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateBlogs;
