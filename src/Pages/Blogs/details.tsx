"use client";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import {Calendar, User, Loader2 } from "lucide-react";
import LatestBlog from "./BlogDetail/LatestBlog";
import { useAppDispatch, useAppSelector } from "@/Utils/hooks/appHooks";
import { blogSelector } from "./redux/selector";
import { getBlogDetailRequest } from "./redux/blogSlice";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const dispatch = useAppDispatch();
  const { blogDetail, loadingBlogDetail } = useAppSelector(blogSelector);

  useEffect(() => {
    dispatch(getBlogDetailRequest(slug));
  }, [dispatch, slug]);

  if (loadingBlogDetail) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 lg:px-0 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <Card className="flex-grow lg:w-2/3">
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {blogDetail?.title}
            </CardTitle>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                {/* <span>{blogDetail?.author.first_name}</span> */}
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>
                  {new Date(blogDetail ? blogDetail?.created_at : '').toLocaleDateString()}
                </span>
              </div>
              {/* <div className="flex items-center flex-wrap gap-2">
                <Tag className="h-4 w-4" />
                {blogDetail?.tags.split(",").map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag.trim()}
                  </Badge>
                ))}
              </div> */}
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-[40vh] mb-8">
              <img
                src={blogDetail?.thumbnail || "/placeholder.svg"}
                alt={blogDetail?.title}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <article className="prose prose-lg max-w-none dark:prose-invert">
              {parse(DOMPurify.sanitize(blogDetail ? blogDetail?.content : ''))}
            </article>
          </CardContent>
        </Card>
        <div className="lg:w-1/3 lg:max-w-sm w-full">
          <LatestBlog />
        </div>
      </div>
      <section className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Comments</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Comments will be displayed here.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
