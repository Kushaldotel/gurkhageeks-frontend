import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import DOMPurify from "dompurify";

export default function AllBlogs() {
  const [showCategories, setShowCategories] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

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

    fetchBlogs();
  }, []);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <div className="flex h-full w-full">
        <aside className="hidden w-40 flex-col bg-white p-6 pl-0 md:flex">
          <div className="mb-6">
            <h2 className="text-xl font-medium text-gray-700 border-b pb-2">
              ✢ View all
            </h2>
          </div>
          <nav className="flex flex-col space-y-2">
            {[
              "Technology of the world ",
              "Design",
              "Lifestyle",
              "Travel",
              "Business",
            ].map((category) => (
              <Link
                to="/"
                key={category}
                className="rounded-md px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-800"
              >
                {category}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="flex-1 p-6 md:p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            {blogs.map((post) => (
              <div
                key={post.id}
                className="group relative overflow-hidden rounded-sm bg-white"
              >
                <Link
                  to={`/blog/${post.id}`} // Assuming there's a detail page for each blog post
                  className="absolute inset-0 z-10 "
                >
                  <span className="sr-only">Read more</span>
                </Link>
                <img
                  src={post.imageUrl || "/img/FullStack.png"} // Fallback image if not provided
                  alt="Blog post"
                  width={400}
                  height={250}
                  className="h-48 w-full object-cover transition-all duration-300 group-hover:scale-105"
                  style={{ aspectRatio: "400/250", objectFit: "cover" }}
                  loading="lazy" // Add lazy loading
                />
                <div className="pt-3">
                  <h3 className="text-md font-semibold text-gray-800 transition-colors duration-300 group-hover:text-indigo-600 first-letter:uppercase line-clamp-3">
                    {post.title}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-sm text-gray-600 first-letter:uppercase">
                    {DOMPurify.sanitize(post.content)}
                  </p>
                  <div className="mt-2 flex items-center space-x-2 text-sm text-gray-500">
                    {/* <div>{post.author.email}</div> */}
                    <img
                      src="/img/icons.png"
                      alt=""
                      className="h-6 w-6 border rounded-full p-0.5"
                    />
                    <div>Adarsh Thapa</div>
                    <div>•</div>
                    <div>
                      {new Date(post.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="text-sm font-medium text-indigo-600 hover:underline  p-2 rounded-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="fixed inset-x-0 bottom-0 z-10 bg-white p-4 shadow-md md:hidden">
          <button
            className="flex items-center justify-center w-full rounded-full bg-blue-600 p-2 text-white shadow-md"
            onClick={toggleCategories}
          >
            <MenuIcon className="h-6 w-6" />
            <span className="ml-2 text-sm font-medium">Toggle categories</span>
          </button>
          {showCategories && (
            <div className="absolute left-0 top-full w-full bg-white p-6 shadow-md">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-gray-700">Categories</h2>
              </div>
              <nav className="flex flex-col space-y-2">
                {[
                  "Technology",
                  "Design",
                  "Lifestyle",
                  "Travel",
                  "Business",
                ].map((category) => (
                  <Link
                    key={category}
                    to="/"
                    className="rounded-md px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-800"
                  >
                    {category}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
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
