import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [featuredImage, setFeaturedImage] = useState(null);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleCategoriesChange = (e) => setSelectedCategory(e.target.value);
  const handleTagsChange = (e) =>
    setTags(e.target.value.split(",").map((tag) => tag.trim()));
  const handleFileChange = (e) => setFeaturedImage(e.target.files[0]);

  //Fetch data from categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://gorkhageeks-backend.onrender.com/blog/categories/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log("Error Fetching categories", error);
      }
    };
    fetchCategories();
  }, []);

  //Handle Data submitting

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("categories", selectedCategory);
    formData.append("tags", JSON.stringify(tags));
    formData.append("author", "1"); // Add the default author name here
    if (featuredImage) {
      formData.append("featuredImage", featuredImage);
    }

    try {
      const response = await fetch(
        "https://gorkhageeks-backend.onrender.com/blog/",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIyNTA2MjY1LCJpYXQiOjE3MjI0OTQyNjUsImp0aSI6ImIyMGE2YTFjMjY5ZTQyMjhiZmEzYjU2NDM5MTIwYzkyIiwidXNlcl9pZCI6MX0.T6tcpyoyiJd5p1nwy1D8HyAci-HoT-A_5jITjywZ8s8",
          },
          body: formData,
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${errorText}`);
      }

      const result = await response.json();
      console.log("Blog post result", result);
    } catch (error) {
      console.log(error, "Error submitting data!!");
    }
  };

  // Blog Editor

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
  const handleProcedureContentChange = (content, delta, source, editor) => {
    setContent(content);
  };
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
    "color",
    "image",
    "background",
    "align",
    "size",
    "font",
  ];

  // Handle Cancel

  const handleCancel = () => {
    setTitle("");
    setContent("");
    setCategories("");
    setTags([]);
    setFeaturedImage(null);
  };

  return (
    <div className="relative py-6 w-full top-0">
      <div className="max-w-7xl min-h-screen pt-4 mx-auto p-6 sm:p-8 md:p-10 bg-gray-50 shadow-sm rounded-lg border border-gray-200">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Add New Blog Post</h1>
          <p className="text-gray-600">
            Fill out the form to create a new blog post.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="title" className="text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter the blog post title"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={title}
                  onChange={handleTitleChange}
                  required
                />
              </div>
              <div className="grid space-y-2">
                <label htmlFor="categories" className="text-gray-700">
                  Categories
                </label>
                <select
                  id="categories"
                  name="categories"
                  className="w-full py-2 px-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={selectedCategory}
                  onChange={handleCategoriesChange}
                  required
                  style={{
                    paddingRight: "2.5rem", // Adjust padding to accommodate the custom arrow
                    boxSizing: "border-box",
                    background: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"%3E%3Cpath d="M7 10l5 5 5-5z"%3E%3C/path%3E%3C/svg%3E') no-repeat right 0.75rem center`,
                    backgroundSize: "1rem",
                    WebkitAppearance: "none",
                    appearance: "none",
                    boxSizing: "border-box",
                  }}
                >
                  <option value="" disabled>
                    Select categories
                  </option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex-col space-y-4">
              <div className="flex-col space-y-2">
                <label htmlFor="tags" className="text-gray-700">
                  Tags
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  placeholder="Enter tags, separated by commas"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={tags.join(", ")}
                  onChange={handleTagsChange}
                  required
                />
              </div>
              <div className="flex-col space-y-2">
                <label htmlFor="featured-image" className="text-gray-700">
                  Feature Thumbnail
                </label>
                <input
                  type="file"
                  id="featured-image"
                  name="featuredImage"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>
          <div className="grid gap-2 w-full mt-4">
            <label htmlFor="featured-image" className="text-gray-700">
              Description of Blog post
            </label>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={handleProcedureContentChange}
              modules={modules}
              formats={formats}
              className="bg-gray-50 h-96"
              placeholder="Enter your Blog Post..........."
            />
          </div>
          <div className="clearfix p-4"></div>
          <div className="md:col-span-2 flex justify-end gap-2 mt-14">
            <button
              type="button"
              className="px-4 py-2 bg-gray-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              Save Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddArticle;
