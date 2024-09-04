import React, { useEffect, useState } from "react";
import { CalendarIcon } from "lucide-react";
import DOMPurify from "dompurify";

function BlogItem({ blog }) {
  return (
    <div className="flex space-x-4">
      <img
        src={blog.thumbnail || "/img/AI.jpg"}
        alt={blog.title}
        width={100}
        height={100}
        className="rounded-full object-cover flex-shrink-0 border p-0.5 border-gray-200"
      />
      <div className="space-y-1">
        <h3 className="font-semibold line-clamp-1  hover:text-primary">
          {blog.title}
        </h3>
        <p className="text-sm text-muted-foreground flex items-center">
          <CalendarIcon className="w-4 h-4 mr-1" />
          {new Date(blog.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p
          className="text-muted-foreground text-xs leading-relaxed line-clamp-2"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(blog.content),
          }}
        />
      </div>
    </div>
  );
}

function LatestBlogDetail() {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        const response = await fetch(`${BASE_URL}/blog/recentposts/`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        if (result.data && Array.isArray(result.data)) {
          setLatestBlogs(result.data.slice(0, 5));
        } else if (Array.isArray(result)) {
          setLatestBlogs(result.slice(0, 5));
        } else {
          throw new Error("Received data is not in the expected format");
        }
      } catch (error) {
        console.error("Error fetching latest blogs:", error);
        setError(error.message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchLatestBlogs();
  }, [BASE_URL]);

  if (loading) {
    return <div className="p-4">Loading latest blogs...</div>;
  }

  if (error) {
    return (
      <div className="p-4 text-red-500">
        <h2 className="text-2xl font-bold mb-4">Error</h2>
        <p>Failed to load latest blogs: {error}</p>
      </div>
    );
  }

  return (
    <div className="lg:w-1/3 lg:border-l lg:p-4">
      <div className="sticky top-8">
        <h2 className="text-2xl font-bold mb-4">Latest Blogs</h2>
        {latestBlogs.length > 0 ? (
          <div className="space-y-6">
            {latestBlogs.map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            No recent blog posts available.
          </p>
        )}
      </div>
    </div>
  );
}

export default LatestBlogDetail;