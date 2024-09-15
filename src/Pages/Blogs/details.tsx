"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/Components/ui/alert";
import { AlertCircle, Calendar, User, Tag,Loader2 } from "lucide-react";
import { Badge } from "@/Components/ui/badge";

interface Author {
  id: number;
  email: string;
}

interface Category {
  id: number;
  name: string;
}

interface BlogPost {
  id: number;
  author: Author;
  categories: Category[];
  title: string;
  slug: string;
  thumbnail: string;
  content: string;
  tags: string;
  created_at: string;
  updated_at: string;
}

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  const BASE_URL = `${import.meta.env.VITE_APP_BASE_SCHEMA}${
    import.meta.env.VITE_APP_BASE_URL
  }${import.meta.env.VITE_APP_VERSION}`;

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await fetch(`${BASE_URL}/blog/${slug}/`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog post");
        }
        const result = await response.json();
        if (result.success && result.data) {
          setBlog(result.data);
        } else {
          throw new Error("Data is not in the expected format");
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setError(
          error instanceof Error
            ? error
            : new Error("An unknown error occurred")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [slug, BASE_URL]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }
  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to load blog post: {error.message}
        </AlertDescription>
      </Alert>
    );
  }

  if (!blog) {
    return <div>No blog post found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <Card className="lg:w-2/3">
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {blog.title}
            </CardTitle>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span>{blog.author.email}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{new Date(blog.created_at).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center flex-wrap gap-2">
                <Tag className="h-4 w-4" />
                {blog.tags.split(",").map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag.trim()}
                  </Badge>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-[40vh] mb-8">
              <img
                src={blog.thumbnail || "/placeholder.svg"}
                alt={blog.title}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <article className="prose prose-lg max-w-none dark:prose-invert">
              {parse(DOMPurify.sanitize(blog.content))}
            </article>
          </CardContent>
        </Card>
        <div className="lg:w-1/3">
          {/* Placeholder for LatestBlogDetail */}
          <Card>
            <CardHeader>
              <CardTitle>Latest Posts</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Add your LatestBlogDetail component here */}
              <p>Latest blog posts will be displayed here.</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <section className="mt-8">
        {/* Placeholder for CommentSection */}
        <Card>
          <CardHeader>
            <CardTitle>Comments</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add your CommentSection component here */}
            <p>Comments will be displayed here.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
