'use client'

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DOMPurify from "dompurify"
import parse from "html-react-parser"
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card"
import { Skeleton } from "@/Components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/Components/ui/alert"
import { AlertCircle, Calendar, User, Tag } from "lucide-react"
import { Badge } from "@/Components/ui/badge"
import LatestBlog from "../Articles/list"

interface BlogPost {
  id: string
  title: string
  content: string
  thumbnail: string
  author: string
  published_date: string
  tags: string[]
}

export default function BlogDetail() {
  const params = useParams()
  const [blog, setBlog] = useState<BlogPost | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(true)

  const BASE_URL = `${import.meta.env.VITE_APP_BASE_SCHEMA}${import.meta.env.VITE_APP_BASE_URL}${import.meta.env.VITE_APP_VERSION}`;

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await fetch(`${BASE_URL}/blog/${params.id}/`)
        if (!response.ok) {
          throw new Error("Failed to fetch blog post")
        }
        const result = await response.json()
        if (result.data && typeof result.data === "object") {
          setBlog(result.data)
        } else {
          throw new Error("Data is not an object")
        }
      } catch (error) {
        console.error("Error fetching blog post:", error)
        setError(error instanceof Error ? error : new Error("An unknown error occurred"))
      } finally {
        setLoading(false)
      }
    }

    fetchBlogDetail()
  }, [params.id, BASE_URL])


  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Failed to load blog post: {error.message}</AlertDescription>
      </Alert>
    )
  }

  if (!blog) {
    return null
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
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{new Date(blog.published_date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center flex-wrap gap-2">
                <Tag className="h-4 w-4" />
                {blog.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-[40vh] mb-8">
              <img
                src={blog.thumbnail || "/placeholder.svg"}
                alt={blog.title}
                className="rounded-lg"
              />
            </div>
            <article className="prose prose-lg max-w-none dark:prose-invert">
              {parse(DOMPurify.sanitize(blog.content))}
            </article>
          </CardContent>
        </Card>
        <div className="lg:w-1/3">
          {/* <LatestBlogDetail /> */}
        </div>
      </div>
      <section className="mt-8">
        {/* <CommentSection id={params.id} /> */}
      </section>
    </div>
  )
}