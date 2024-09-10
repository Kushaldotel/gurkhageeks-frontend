import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";

interface Category {
  id: string;
  name: string;
}

const AddArticle: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const BASE_URL = `${import.meta.env.VITE_APP_BASE_SCHEMA}${
    import.meta.env.VITE_APP_BASE_URL
  }${import.meta.env.VITE_APP_VERSION}`;

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const handleCategoriesChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectedCategory(e.target.value);
  const handleTagsChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTags(e.target.value.split(",").map((tag) => tag.trim()));
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFeaturedImage(e.target.files ? e.target.files[0] : null);

  //Fetch data from categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${BASE_URL}/blog/categories/`);
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const result = await response.json();
        if (result.data && Array.isArray(result.data)) {
          setCategories(result.data);
        } else {
          console.log("Data property is missing!!");
        }
      } catch (error) {
        console.log("Error Fetching categories", error);
      }
    };
    fetchCategories();
  }, []);

  // Handle Data submitting
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("categories", selectedCategory);
    formData.append("tags", JSON.stringify(tags));
    formData.append("author", "1"); // Add the default author name here
    if (featuredImage) {
      formData.append("thumbnail", featuredImage);
    }

    // const accessToken = getCookie('access_token');

    try {
      const response = await fetch(`${BASE_URL}/blog/`, {
        method: "POST",
        // headers: {
        //   Authorization: `Bearer ${accessToken || ""}`,
        // },
        // body: formData,
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${errorText}`);
      }
      const result = await response.json();
      console.log("Blog post result", result);

      // Clear form fields
      setTitle("");
      setContent("");
      setSelectedCategory("");
      setTags([]);
      setFeaturedImage(null);

      // Show success message using SweetAlert
      Swal.fire({
        title: "Success!",
        text: "Data submitted successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.log(error, "Error submitting data!!");
      alert("Login to add the blog");
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
      ["link"],
      ["clean"],
    ],
  };

  const handleProcedureContentChange = (content: string) => {
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
    "background",
    "align",
    "size",
    "font",
  ];

  // Handle Cancel
  const handleCancel = () => {
    setTitle("");
    setContent("");
    setSelectedCategory("");
    setTags([]);
    setFeaturedImage(null);
  };

  return (
    <div className="relative py-6 w-full top-0">
      <div className="max-w-7xl min-h-screen pt-4 mx-auto p-6 sm:p-8 md:p-10 rounded-lg ">
        <div className="mb-6">
          <h1 className="text-3xl font-medium ">Add New Blog Post</h1>
          <svg
            className="w-72 h-7"
            viewBox="10 0 160 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 5 Q 5 0, 10 5 T 20 5 T 30 5 T 40 5 T 50 5 T 60 5 T 70 5 T 80 5 T 90 5 T 100 5 T 110 5 T 120 5 T 130 5 T 140 5 T 150 5 T 160 6 T 170 7 T 180 8"
              stroke="black"
              fill="transparent"
              strokeWidth="2"
            />
          </svg>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label
                  htmlFor="title"
                  className="text-gray-700 sm:text-lg md:text-xl"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter the blog post title"
                  className="w-full px-4 py-2 border-b border-gray-800 sm:text-lg xl:text-4xl focus:outline-none focus:ring-b-2 focus:ring-blue-600"
                  value={title}
                  onChange={handleTitleChange}
                  required
                />
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
                  className="w-full px-4 py-2 border-b border-gray-800 sm:text-lg xl:text-2xl focus:outline-none"
                  value={tags.join(", ")}
                  onChange={handleTagsChange}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid gap-4">
                <div className="grid space-y-2">
                  <label htmlFor="categories" className="text-gray-700">
                    Categories
                  </label>
                  <select
                    id="categories"
                    name="categories"
                    className="w-full py-2 px-6 border-b border-gray-800 focus:outline-none "
                    value={selectedCategory}
                    onChange={handleCategoriesChange}
                    required
                    style={{
                      paddingRight: "2.5rem",
                      boxSizing: "border-box",
                      background: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"%3E%3Cpath d="M7 10l5 5 5-5z"%3E%3C/path%3E%3C/svg%3E') no-repeat right 0.75rem center`,
                      backgroundSize: "1rem",
                      WebkitAppearance: "none",
                      appearance: "none",
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
                  <label htmlFor="featured-image" className="text-gray-700">
                    Feature Thumbnail
                  </label>
                  <input
                    type="file"
                    id="featured-image"
                    name="featuredImage"
                    className="w-full px-4 py-2 border-b border-gray-800 focus:outline-none"
                    onChange={handleFileChange}
                    required
                  />
                </div>
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
              placeholder="Enter your Blog Post..........."
              className=""
            />
          </div>
          <div className="clearfix p-4"></div>
          <div className="md:col-span-2 flex justify-end gap-2 mt-2">
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
