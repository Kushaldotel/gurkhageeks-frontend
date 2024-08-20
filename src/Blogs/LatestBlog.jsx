import { useEffect, useState } from "react";
import { CalendarIcon } from "lucide-react"; // Assuming you're using lucide-react for icons
import DOMPurify from "dompurify";

const LatestBlog = () => {
  const [latestBlogs, setLatestBlogs] = useState([]); // State to store the latest blogs
  const [error, setError] = useState(null); // State to handle errors
  const [loading, setLoading] = useState(true); // State for loading indicator
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        const response = await fetch(`${BASE_URL}/blog/recentposts/`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setLatestBlogs(data.slice(0, 5)); // Get the top 5 latest blogs
      } catch (error) {
        console.error("Error fetching latest blogs:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>Error loading latest blogs: {error.message}</div>; // Error state
  }

  return (
    <div className="lg:w-1/3 lg:border-l lg:p-4">
      <div className="sticky top-8">
        <h2 className="text-2xl font-bold mb-4">Latest Blogs</h2>
        <div className="space-y-6">
          {latestBlogs.map((blog, index) => (
            <div key={index} className="flex space-x-4">
              <img
                src={blog.thumbnail || "/img/AI.jpg"}
                alt={blog.title}
                width={100}
                height={100}
                className="rounded-lg object-cover flex-shrink-0 border p-0.5 border-blue-400"
              />
              <div className="space-y-1">
                <h3 className="font-semibold line-clamp-2 hover:text-purple-600">{blog.title}</h3>
                <p className="text-sm text-gray-600 flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  {new Date(blog.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  {/* Format date */}
                </p>
                <p
                  className="text-muted-foreground text-base leading-relaxed line-clamp-2"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(blog.content),
                  }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
