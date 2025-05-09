import React, { useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./index.css"

interface QuillEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const QuillEditor: React.FC<QuillEditorProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  const quillRef = useRef<ReactQuill>(null);

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
    }
  }, []);

  const handleEditorChange = (content: string) => {
    onChange(content);
  };

  return (
    <ReactQuill
      ref={quillRef}
      theme="snow"
      value={value}
      onChange={handleEditorChange}
      placeholder={placeholder || "Write something awesome..."}
      modules={{
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
        ],
      }}
      formats={[
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "list",
        "bullet",
        "link",
        "image",
      ]}
    />
  );
};

export default QuillEditor;