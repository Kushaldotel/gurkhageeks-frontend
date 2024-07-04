import React from "react";
import { useState } from "react";

const AddArticle = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    date: "",
    content: "",
    categories: "",
    tags: [],
    featuredImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, featuredImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-gray-400 absolute w-full top-0">
      <div className="max-w-4xl mt-8 md:my-24 mx-auto p-6 sm:p-8 md:p-10 bg-white shadow-lg rounded-lg border border-gray-200">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Add New Blog Post</h1>
          <p className="text-gray-600">
            Fill out the form to create a new blog post.
          </p>
        </div>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
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
                value={form.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="author" className="text-gray-700">
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                placeholder="Enter the author's name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={form.author}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="content" className="text-gray-700">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                rows={8}
                placeholder="Enter the blog post content"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={form.content}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="flex-col space-y-6">
            <div className="grid space-y-2">
              <label htmlFor="categories" className="text-gray-700">
                Categories
              </label>
              <select
                id="categories"
                name="categories"
                className="w-full py-2 px-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={form.categories}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  Select categories
                </option>
                <option value="category-1">Category 1</option>
                <option value="category-2">Category 2</option>
                <option value="category-3">Category 3</option>
              </select>
            </div>
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
                value={form.tags.join(", ")}
                onChange={(e) =>
                  setForm({
                    ...form,
                    tags: e.target.value.split(",").map((tag) => tag.trim()),
                  })
                }
                required
              />
            </div>
            <div className="flex-col space-y-2">
              <label htmlFor="featured-image" className="text-gray-700">
                Featured Image
              </label>
              <input
                type="file"
                id="featured-image"
                name="featuredImage"
                className="w-full px-4 py-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                onChange={handleFileChange}
                required
              />
            </div>
          </div>
          <div className="md:col-span-2 flex justify-end gap-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              onClick={() =>
                setForm({
                  title: "",
                  author: "",
                  date: "",
                  content: "",
                  categories: "",
                  tags: [],
                  featuredImage: null,
                })
              }
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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
