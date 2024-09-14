import React, { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./index.css"

interface QuillEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ value, onChange }) => {
  const quillRef = useRef<any>(null);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      // ["link", "image"],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold", "italic", "underline", "strike",
    "list", "bullet",
    // "link", "image",
    "align",
    "color", "background",
  ];

  return (
    <div className="quill-editor-container">
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Create something amazing..."
      />

    </div>
  );
};

export default QuillEditor;