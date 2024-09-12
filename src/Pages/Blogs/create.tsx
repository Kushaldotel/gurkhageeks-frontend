import React, { useEffect, useState } from "react";
import AppButton from "@/Components/Button";
import QuillEditor from "@/Components/Editor";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import BlogModal from "./modal";
import Modal from "@/Components/Modal";
import { useAppDispatch } from "@/Utils/hooks/appHooks";
import { getCategoriesRequest } from "./redux/blogSlice";

const CreateBlogs: React.FC = () => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);

  const initialState = {
    title: "",
    content: "",
    categories: [],
    tags: [],
    thumbnail: null,
    author: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
    categories: Yup.array()
      .min(1, "At least one category is required")
      .required("Categories are required"),
    tags: Yup.array().max(5, "You can add up to 5 tags"),
  });

  const handleSubmit = (values: any) => {
    console.log(values, "submitted values");
    setShowModal(false);
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
          <Card className="max-w-7xl mx-auto rounded-lg my-8">
            <CardHeader className="border-b py-2">
              <CardTitle className="flex items-center justify-between">
                <div>Add Blog</div>
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
                      onClick={() => formik.handleSubmit()}
                    />
                  </div>
                </Modal>
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-4">
              {/* Title Field */}
              <div className="mb-4">
                <Label htmlFor="title" className="text-2xl">
                  Title
                </Label>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.title}
                />
                {formik.touched.title && formik.errors.title ? (
                  <div className="text-red-500 mt-2">{formik.errors.title}</div>
                ) : null}
              </div>

              {/* Content Field */}
              <div className="mb-4">
                <Label htmlFor="content" className="text-2xl">
                  Write Your Story
                </Label>
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
          </Card>
        </Form>
      )}
    </Formik>
  );
};

export default CreateBlogs;
