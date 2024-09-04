import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import Loader from "../../Components/Loader";

interface Blog {
  id: number;
  title: string;
  content: string;
  thumbnail?: string;
  tags: string;
  categories: { name: string }[];
  authorImage?: string;
  authorInitials?: string;
  authorName: string;
  created_at: string;
}

interface Category {
  id: number;
  name: string;
}

export default function AllBlogs() {
  const [showCategories, setShowCategories] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [layoutOpen, setLayoutOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentLayout, setCurrentLayout] = useState<string>("horizontal");
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const cachedBlogs = sessionStorage.getItem("blogs");
      if (cachedBlogs) {
        setBlogs(JSON.parse(cachedBlogs));
      } else {
        const response = await fetch(`${BASE_URL}/blog/`);
        const data: Blog[] = await response.json();
        setBlogs(data);
        sessionStorage.setItem("blogs", JSON.stringify(data));
      }
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const cachedCategories = sessionStorage.getItem("categories");
      if (cachedCategories) {
        setCategories(JSON.parse(cachedCategories));
        setLoading(false);
        return;
      }
      const response = await fetch(`${BASE_URL}/blog/categories/`);
      const data: Category[] = await response.json();
      setCategories(data);
      sessionStorage.setItem("categories", JSON.stringify(data));
    } catch (error) {
      console.log("Error fetching categories", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
    fetchCategories();
  }, []);

  const fetchBlogByCategory = async (categoryId: number) => {
    console.log("Fetching blogs for categoryId:", categoryId);
    try {
      setLoading(true);
      const response = await fetch(
        `${BASE_URL}/blog/?categories=${categoryId}`
      );
      const data: Blog[] = await response.json();
      setBlogs(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching blog by category", error);
      setLoading(false);
    }
  };

  const parseTags = (tags: string): string[] => {
    try {
      const parsed = JSON.parse(tags);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error("Error parsing tags:", error);
      return [];
    }
  };

  const toggleLayout = (layout: string) => {
    setCurrentLayout(layout);
    setLayoutOpen(false);
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="min-h-screen">
        <header className="py-4 p-4 flex items-center justify-between max-w-7xl mx-auto md:p-6 lg:px-8 xl:px-0">
          <h1 className="text-2xl font-bold text-gray-800">All Blogs</h1>
          <div className="flex space-x-8">
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 border border-gray-500 rounded-sm px-3 py-2 text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <span className="text-xs sm:text-sm font-medium">
                  All Categories
                </span>
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md z-10 border-t-4 border-t-purple-400">
                  <button
                    className="px-4 py-3 hover:bg-gray-100 w-full text-left"
                    onClick={() => {
                      fetchBlogs();
                      setIsOpen(false);
                    }}
                  >
                    All Blogs
                  </button>
                  <div className="px-4 py-2 text-gray-500 font-semibold">
                    Categories
                  </div>
                  <div className="border-gray-200">
                    {categories.map((category) => (
                      <DropdownMenuItem
                        key={category.id}
                        label={category.name}
                        onClick={() => fetchBlogByCategory(category.id)}
                        setIsOpen={setIsOpen}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setLayoutOpen(!layoutOpen)}
                className="flex items-center gap-3 border border-gray-500 rounded-sm px-3 py-2 text-gray-700"
              >
                <img
                  src="/img/layout.png"
                  alt="Layout Options"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                />
                <span className="text-xs sm:text-sm font-medium">Layouts</span>
              </button>
              {layoutOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md z-10 border-t-4 border-t-purple-400">
                  <div className="px-4 py-2 text-gray-500 font-semibold">
                    Layouts
                  </div>
                  <div className="border-gray-200">
                    <button
                      onClick={() => toggleLayout("horizontal")}
                      className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left ${
                        currentLayout === "horizontal" ? "bg-gray-100" : ""
                      }`}
                    >
                      Horizontal
                    </button>
                    <button
                      onClick={() => toggleLayout("card")}
                      className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left ${
                        currentLayout === "card" ? "bg-gray-100" : ""
                      }`}
                    >
                      Card
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
        {/* Map over blogs and render each one */}
        {/* This is horizontal Layout */}
        {blogs.length === 0 ? (
          <div className="text-center text-gray-600 mt-20">
            No blog posted yet.
          </div>
        ) : currentLayout === "horizontal" ? (
          <div className="flex flex-wrap justify-center">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="max-w-7xl p-4 md:p-6 lg:p-8 xl:px-0"
              >
                <div className="flex flex-col md:flex-row bg-white overflow-hidden">
                  <div className="md:w-1/2">
                    <img
                      src={blog.thumbnail || "/img/AI.jpg"}
                      alt="Blog Post Image"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover rounded-sm border"
                      style={{ aspectRatio: "1200/600", objectFit: "cover" }}
                    />
                  </div>
                  <div className="md:w-1/2 sm:px-6 py-4 ">
                    <div className="space-y-4">
                      <p className="bg-gray-100 p-1.5 inline tracking-wider rounded-md">
                        {blog.categories[0]?.name || "All Blogs"}
                      </p>
                      <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                        {blog.title}
                      </h2>
                      <div className="flex flex-wrap items-center space-x-3">
                        <div className="flex flex-wrap gap-2">
                          {parseTags(blog.tags).map((tag, index) => (
                            <span
                              key={index}
                              className="text-xs font-medium text-gray-700 bg-gray-200 px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(
                            `${blog.content.substring(0, 100)}...`
                          ),
                        }}
                        className="text-gray-600"
                      />
                      <Link
                        to={`/blogs/${blog.id}`}
                        className="text-blue-500 font-semibold hover:underline"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Card Layout
          <div className="flex flex-wrap justify-center">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white p-4 rounded-lg shadow-md max-w-xs mx-4 my-4"
              >
                <img
                  src={blog.thumbnail || "/img/AI.jpg"}
                  alt="Blog Thumbnail"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {`${blog.content.substring(0, 100)}...`}
                  </p>
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="text-blue-500 font-semibold hover:underline"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

interface DropdownMenuItemProps {
  label: string;
  onClick: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  label,
  onClick,
  setIsOpen,
}) => {
  return (
    <button
      onClick={() => {
        onClick();
        setIsOpen(false);
      }}
      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
    >
      {label}
    </button>
  );
};
