import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import DOMPurify from "dompurify";

export default function AllBlogs() {
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [layoutOpen, setLayoutOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentLayout, setCurrentLayout] = useState("horizontal");
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  // console.log(BASE_URL);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const cachedBlogs = sessionStorage.getItem("blogs");
      if (cachedBlogs) {
        const parsedBlogs = JSON.parse(cachedBlogs);
        // console.log("Parsed blogs data:", parsedBlogs);
        if (parsedBlogs && Array.isArray(parsedBlogs)) {
          setBlogs(parsedBlogs);
        } else {
          console.error("Cached blogs data is not array");
          setBlogs([]);
        }
      } else {
        const response = await fetch(`${BASE_URL}/blog/`);
        const result = await response.json();
        console.log("result", result.data);
        if (result.success && Array.isArray(result.data)) {
          setBlogs(result.data);
          sessionStorage.setItem("blogs", JSON.stringify(result.data));
        } else {
          console.log("Fetched  blogs data is not array");
        }
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
        try {
          const parsedCategories = JSON.parse(cachedCategories);
          if (Array.isArray(parsedCategories)) {
            setCategories(parsedCategories);
          }
        } catch (error) {
          console.log(
            "Error parsing the categories form session storage",
            error
          );
        }
        setCategories(JSON.parse(cachedCategories));
        setLoading(false);
        return;
      }
      const response = await fetch(`${BASE_URL}/blog/categories/`);
      const result = await response.json();
      if (Array.isArray(result.data)) {
        setCategories(result.data);
        // console.log(result.data);
        sessionStorage.setItem("categories", JSON.stringify(result.data));
      } else {
        console.error("Data is not array");
      }
    } catch (error) {
      console.log("Error fetching categories", error);
    }
  };
  useEffect(() => {
    fetchBlogs();
    fetchCategories();
  }, []);

  const fetchBlogByCategory = async (categoryId) => {
    console.log("Fetching blogs for categoryId:", categoryId);
    try {
      setLoading(true); // Set loading to true before fetching
      const response = await fetch(
        `${BASE_URL}/blog/?categories=${categoryId}`
      );
      const result = await response.json();
      try {
        if (Array.isArray(result.data)) {
          setBlogs(result.data);
        }
      } catch (error) {
        console.log("Categories data is not array", error);
      }
      setLoading(false);
    } catch (error) {
      console.log("Error fetching blog by category", error);
      setLoading(false);
    }
  };

  // ${BASE_URL}
  const parseTags = (tags) => {
    try {
      const parsed = JSON.parse(tags);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error("Error parsing tags:", error);
      return [];
    }
  };

  const toggleLayout = (layout) => {
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
        <header className="py-4 p-4 sm:flex items-center justify-between max-w-7xl mx-auto md:p-6 lg:px-8 xl:px-0">
          <h1 className="text-2xl font-bold text-gray-800 py-4 sm:p-0">
            All Blogs
          </h1>
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
                  <div className=" border-gray-200 ">
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
                  <div className=" border-gray-200">
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
        {/* THis is horizental Layout  */}
        {blogs.length == 0 ? (
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
                              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p
                        className="text-muted-foreground text-base leading-relaxed line-clamp-4"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(blog.content),
                        }}
                      ></p>
                      <div className="flex items-center space-x-3">
                        <div>
                          <img
                            // src={blog.authorImage || "/placeholder-user.jpg"}
                            src="/img/icons.png"
                            className="h-7 w-7 p-0.5 border border-gray-200 rounded-full"
                          />
                        </div>
                        <div className="font-normal">
                          {blog.authorInitials || "Adarsh Thapa"}
                        </div>
                        <div>
                          <p className="font-medium">{blog.authorName}</p>
                          <p className="text-muted-foreground text-sm">
                            ◆{" "}
                            {new Date(blog.created_at).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <Link to={`/BlogDetail/${blog.id}`}>
                          <button>Read More →</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto py-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={blog.thumbnail || "/img/FullStack.png"}
                    alt="Blog Post Image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-xl font-bold mb-2 line-clamp-2">
                    {blog.title}
                  </h2>
                  <p
                    className="text-muted-foreground text-sm mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(blog.content),
                    }}
                  ></p>
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src="/img/icons.png"
                      className="h-7 w-7 p-0.5 border border-gray-200 rounded-full"
                      alt="Author"
                    />
                    <div>
                      <p className="font-medium">
                        {blog.authorName || "Adarsh Thapa"}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Published on:{" "}
                        {new Date(blog.created_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <Link to={`/BlogDetail/${blog.id}`} className="mt-auto">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                      Learn More →
                    </button>
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

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function DropdownMenuItem({ label, onClick, setIsOpen }) {
  return (
    <button
      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
      onClick={() => {
        onClick();
        setIsOpen(false);
      }}
    >
      {label}
    </button>
  );
}
