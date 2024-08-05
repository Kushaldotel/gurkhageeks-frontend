import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import DOMPurify from "dompurify";

export default function AllBlogs() {
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // const categories = ["Technology", "Design", "Business", "Lifestyle"];

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const cachedBlogs = sessionStorage.getItem("blogs");
        if (cachedBlogs) {
          setBlogs(JSON.parse(cachedBlogs));
          setLoading(false);
          return;
        }

        const response = await fetch(
          "https://gorkhageeks-backend.onrender.com/blog/"
        );
        const data = await response.json();
        setBlogs(data);

        // Cache the blogs for future use
        sessionStorage.setItem("blogs", JSON.stringify(data));

        setLoading(false);
      } catch (error) {
        console.log("Error fetching data", error);
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://gorkhageeks-backend.onrender.com/blog/categories/"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log("Error fetching categories", error);
      }
    };

    fetchCategories();
    fetchBlogs();
  }, []);

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
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 border border-gray-300 rounded-sm px-3 py-2 text-gray-700"
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
              <span>All Categories</span>
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md z-10 border-t-4 border-t-purple-400">
                <div className="px-4 py-2 text-gray-500 font-semibold">
                  Categories
                </div>
                <div className=" border-gray-200 ">
                  {categories.map((category) => (
                    <DropdownMenuItem key={category.id} label={category.name} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>
        {/* Map over blogs and render each one */}
        <div className="flex flex-wrap justify-center">
          {blogs.map((blog) => (
            <div key={blog.id} className="max-w-7xl p-4 md:p-6 lg:p-8 xl:px-0">
              <div className="flex flex-col md:flex-row bg-white overflow-hidden">
                <div className="md:w-1/2">
                  <img
                    src={blog.image || "/img/FullStack.png"} // Ensure image fallback
                    alt="Blog Post Image"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-sm"
                    style={{ aspectRatio: "1200/600", objectFit: "cover" }}
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                      {blog.title}
                    </h2>
                    <p
                      className="text-muted-foreground text-base leading-relaxed line-clamp-5"
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
                      <div className="font-medium">
                        {blog.authorInitials || "Adarsh Thapa"}
                      </div>
                      <div>
                        <p className="font-medium">{blog.authorName}</p>
                        <p className="text-muted-foreground text-sm">
                          Published on :{" "}
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
                      <Link className=" ">
                        <p className="">Learn More →</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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

function DropdownMenuItem({ label }) {
  return (
    <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
      {label}
    </button>
  );
}
