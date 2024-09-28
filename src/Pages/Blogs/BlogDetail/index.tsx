"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Calendar, User, Tag, Clock, Eye, Share2 } from "lucide-react";
import LatestBlog from "../BlogDetail/LatestBlog";
import { useAppDispatch, useAppSelector } from "@/Utils/hooks/appHooks";
import { blogSelector } from "../redux/selector";
import { getBlogDetailRequest } from "../redux/blogSlice";
import BlogDetailSkeleton from "@/Components/Skeleton/blogDetail";
import BlogComment from "../../Comment/index";
import { getCommentRequest } from "../../Comment/redux/commentSlice";
import { commentSelector } from "../../Comment/redux/selector";
import { Badge } from "@/Components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Button } from "@/Components/ui/button";
import { SharePopup } from "@/Components/ShareLink";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const dispatch = useAppDispatch();
  const { blogDetail, loadingBlogDetail } = useAppSelector(blogSelector);
  const { comments } = useAppSelector(commentSelector);
  const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);

  useEffect(() => {
    dispatch(getBlogDetailRequest(slug));
  }, [dispatch, slug]);

  //Handle Share
  const handleShare = () => {
    setIsSharePopupOpen(true);
  };

  useEffect(() => {
    if (!blogDetail?.id) return;
    dispatch(getCommentRequest({ id: blogDetail?.id }));
  }, [blogDetail?.id, dispatch]);

  if (loadingBlogDetail) {
    return <BlogDetailSkeleton />;
  }

  return (
    <div className="container mx-auto px-4 lg:px-0 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow lg:w-2/3 space-y-8">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                {blogDetail?.title}
              </CardTitle>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  <span>{blogDetail?.author?.first_name || "Anonymous"}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>
                    {new Date(
                      blogDetail?.created_at || ""
                    ).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center">
                  <Eye className="mr-2 h-4 w-4" />
                  <span>1.5k views</span>
                </div>
              </div>
              <div className="flex items-center flex-wrap gap-2">
                <Tag className="h-4 w-4 text-primary" />
                {blogDetail?.tags?.split(",").map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag.trim()}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative w-full h-[60vh] mb-6">
                <img
                  src={blogDetail?.thumbnail || "/placeholder.svg"}
                  alt={blogDetail?.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-6 pb-6">
                <article className="prose prose-lg max-w-none dark:prose-invert">
                  {parse(DOMPurify.sanitize(blogDetail?.content || ""))}
                </article>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>About the Author</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Author" />
                  <AvatarFallback>
                    {blogDetail?.author?.first_name?.[0] || "A"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">
                    {blogDetail?.author?.first_name || "Anonymous"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Tech Enthusiast & Writer
                  </p>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">
                Passionate about technology and its impact on our daily lives.
                Always exploring new ideas and sharing insights through writing.
              </p>
            </CardContent>
          </Card>

          <section>
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            {blogDetail && (
              <BlogComment id={blogDetail.id} comments={comments} />
            )}
          </section>
        </div>

        <div className="lg:w-1/3 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Share this article</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Button>
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Button>
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300"
                  onClick={handleShare}
                >
                  <Share2 className="h-5 w-5 mr-2" />
                  <span>Share Link</span>
                </Button>
              </div>
            </CardContent>
          </Card>
          <LatestBlog />
        </div>
      </div>
      <SharePopup
        isOpen={isSharePopupOpen}
        onClose={() => setIsSharePopupOpen(false)}
        url={window.location.href}
      />
    </div>
  );
}
