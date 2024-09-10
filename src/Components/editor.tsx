import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles

const BlogEditor: React.FC = () => {
  const [content, setContent] = useState<string>("");

  // Define the modules for the Quill editor
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  // Define the formats that are supported by the Quill editor
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "background",
    "color",
    "font",
    "size",
  ];

  // Define the function to handle content change
  const handleProcedureContentChange = (content: string) => {
    setContent(content);
    // Handle any additional logic here
  };

  return (
    <div>
      <h2 className="text-lg py-2">Description of Blog Post</h2>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={handleProcedureContentChange}
        modules={modules}
        formats={formats}
        className="bg-white"
      />
    </div>
  );
};

export default BlogEditor;
