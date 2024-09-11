import React, { useState } from "react";
import AppButton from "@/Components/Button";
import QuillEditor from "@/Components/Editor";
import Modal from "@/Components/Modal";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import BlogModal from "./modal";
const CreateBlogs: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");

  const handleEditorChange = (data: string) => {
    setContent(data);
  };
  const modalProps = {
    title: "",
    body: <BlogModal />,
    showModal: showModal,
  };
  return (
    <Card className="max-w-7xl mx-auto rounded-lg my-8">
      <CardHeader className="border-b py-2">
        <CardTitle className="flex items-center justify-between">
          <div>Add Blog</div>
          <Modal {...modalProps}>
            <AppButton
              label="Save"
              size="sm"
              onClick={() => setShowModal(true)}
            />
          </Modal>
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-4">
        <div className="mb-4">
          <Label htmlFor="title" className="text-2xl">
            Title
          </Label>
          <Input type="text" id="title" />
        </div>
        <div>
          <Label htmlFor="title" className="text-2xl">
            Write Your Story
          </Label>
          <QuillEditor value={content} onChange={handleEditorChange} />
        </div>
      </CardContent>
    </Card>
  );
};

export default CreateBlogs;
