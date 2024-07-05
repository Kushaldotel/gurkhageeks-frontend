import React, { useState } from "react";

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState("");
  const [tags, setTags] = useState([]);
  const [featuredImage, setFeaturedImage] = useState(null);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleAuthorChange = (e) => setAuthor(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleCategoriesChange = (e) => setCategories(e.target.value);
  const handleTagsChange = (e) =>
    setTags(e.target.value.split(",").map((tag) => tag.trim()));
  const handleFileChange = (e) => setFeaturedImage(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      title,
      author,
      date,
      content,
      categories,
      tags,
      featuredImage,
    });
  };

  const handleCancel = () => {
    setTitle("");
    setAuthor("");
    setDate("");
    setContent("");
    setCategories("");
    setTags([]);
    setFeaturedImage(null);
  };

  return (
    <div className="relative py-6 w-full top-0">
      <div className="max-w-4xl pt-4 mx-auto p-6 sm:p-8 md:p-10 bg-gray-50 shadow-lg rounded-lg border border-gray-200">
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
                  value={author}
                  onChange={handleAuthorChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="date" className="text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={date}
                  onChange={handleDateChange}
                  required
                />
              </div>
            </div>
            <div className="flex-col space-y-4">
              <div className="grid space-y-2">
                <label htmlFor="categories" className="text-gray-700">
                  Categories
                </label>
                <select
                  id="categories"
                  name="categories"
                  className="w-full py-2 px-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={categories}
                  onChange={handleCategoriesChange}
                  required
                >
                  <option value="" disabled>
                    Select categories
                  </option>
                  <option value="category-1">AI & ML</option>
                  <option value="category-2">Web Development</option>
                  <option value="category-3">Full Stack Development</option>
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
                  value={tags.join(", ")}
                  onChange={handleTagsChange}
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
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="grid gap-2 w-full mt-4">
            <label htmlFor="content" className="text-gray-700">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              rows={8}
              placeholder="Enter the blog post content"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={content}
              onChange={handleContentChange}
              required
            />
          </div>
          <div className="md:col-span-2 flex justify-end gap-2 mt-4">
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
