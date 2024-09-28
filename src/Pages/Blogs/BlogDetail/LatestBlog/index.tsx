import React, { useEffect, useState } from "react";
import { CalendarIcon, ArrowRight } from "lucide-react";
import DOMPurify from "dompurify";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/Components/ui/card";
import { Skeleton } from "@/Components/ui/skeleton";
import { Link } from "react-router-dom";
import { Button } from "@/Components/ui/button";

interface Blog {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  created_at: string;
  slug: string;
}

function BlogItem({ blog }: { blog: Blog }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-sm group">
      <CardContent className="p-4">
        <div className="flex space-x-4">
          <img
            src={blog.thumbnail || "/img/AI.jpg"}
            alt={blog.title}
            width={80}
            height={80}
            className="rounded-lg h-20 w-20 object-cover flex-shrink-0 border-2 border-primary/10 shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
          <div className="space-y-2 flex-grow min-w-0">
            <Link to={`/blog/details/${blog.slug}`} className="block group-hover:text-primary transition-colors">
              <h3 className="font-semibold text-lg line-clamp-1">{blog.title}</h3>
            </Link>
            <p className="text-sm text-muted-foreground flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
              <span className="truncate">
                {new Date(blog.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </p>
            <p
              className="text-muted-foreground text-sm leading-relaxed line-clamp-2"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(blog.content),
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function LatestBlogDetail() {
  const [latestBlogs, setLatestBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const BASE_URL = `${import.meta.env.VITE_APP_BASE_SCHEMA}${
    import.meta.env.VITE_APP_BASE_URL
  }${import.meta.env.VITE_APP_VERSION}`;

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
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchLatestBlogs();
  }, [BASE_URL]);

  return (
    <Card className="w-full h-screen bg-gray-50">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold text-primary flex items-center justify-between">
          Latest Blogs
          <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary/80">
            <Link to="/blog" className="flex items-center">
              View All
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <Skeleton key={index} className="h-24 w-full" />
            ))}
          </div>
        ) : error ? (
          <Card className="border-destructive">
            <CardContent>
              <p className="text-destructive">
                Failed to load latest blogs: {error}
              </p>
            </CardContent>
          </Card>
        ) : latestBlogs.length > 0 ? (
          <div className="space-y-4">
            {latestBlogs.map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <Card>
            <CardContent>
              <p className="text-muted-foreground">
                No recent blog posts available.
              </p>
            </CardContent>
          </Card>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to="/blog" className="flex items-center justify-center">
            Explore All Blogs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}