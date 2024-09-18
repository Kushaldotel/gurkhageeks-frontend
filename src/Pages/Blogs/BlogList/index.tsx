import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/Components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { User } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { LayoutGrid, LayoutList } from "lucide-react";
import DOMPurify from "dompurify";
import { getBlogsRequest, getCategoriesRequest } from "../redux/blogSlice";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";

import { useAppDispatch, useAppSelector } from "@/Utils/hooks/appHooks";
import { blogSelector } from "../redux/selector";
import { CategoryProps } from "../redux/types";

export default function AllBlogs() {
  const dispatch = useAppDispatch();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { categories, blogs } = useAppSelector(blogSelector);
  const [currentLayout, setCurrentLayout] = useState<"horizontal" | "card">(
    "horizontal"
  );

  useEffect(() => {
    dispatch(getBlogsRequest({ category: "" }));
    dispatch(getCategoriesRequest());
  }, [dispatch]);

  const handleCategoryChange = (value: string) => {
    // console.log(value);
    dispatch(getBlogsRequest({ category: value == "all" ? "" : value }));
    setSelectedCategory(value);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
          All Blogs
        </h1>
        <div className="flex space-x-4">
          <Select
            value={selectedCategory}
            onValueChange={(e) => handleCategoryChange(e)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category: CategoryProps) => (
                <SelectItem key={category?.id} value={`${category.id}`}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Tabs
            value={currentLayout}
            onValueChange={(value) =>
              setCurrentLayout(value as "horizontal" | "card")
            }
          >
            <TabsList>
              <TabsTrigger value="horizontal">
                <LayoutList className="w-4 h-4 mr-2" />
                List
              </TabsTrigger>
              <TabsTrigger value="card">
                <LayoutGrid className="w-4 h-4 mr-2" />
                Grid
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {blogs.length === 0 ? (
        <div className="text-center text-gray-600 mt-20">
          No blog posts available.
        </div>
      ) : (
        <div
          className={
            currentLayout === "horizontal"
              ? "space-y-8"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          }
        >
          {blogs.map((blog, index) => (
            <div key={blog.id}>
              {currentLayout === "horizontal" ? (
                <div className="flex flex-col md:flex-row gap-6 ">
                  <div className="md:w-2/5">
                    <img
                      src={blog.thumbnail || "/img/bg.jpg"}
                      alt={blog.title}
                      className="w-full  h-52 object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:w-3/5 md:border-l md:p-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm font-medium text-blue-600">
                        {blog.categories[0]?.name || "Uncategorized"}
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(blog.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <h2 className="text-xl font-bold mb-2 line-clamp-1">
                      {blog.title}
                    </h2>
                    <div
                      className="text-gray-600 text-sm line-clamp-3 mb-4"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          blog.content.substring(0, 150) + "..."
                        ),
                      }}
                    />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="rounded-full  text-gray-800 w-8 h-8 flex items-center justify-center text-xs font-medium">
                          {/* <Avatar>
                            <AvatarImage
                              alt="User Avatar"
                              className="h-8 w-8"
                            />
                            <AvatarFallback>AD</AvatarFallback>{" "}
                          </Avatar> */}
                          <User className="w-6 h-6 mr-1" />
                        </div>
                        <span className="text-sm capitalize font-medium">
                          {blog.author.first_name} {blog.author.last_name}
                        </span>
                      </div>
                      <Button variant="outline" asChild>
                        <Link to={`/blog/details/${blog.slug}`}>Read More</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <Card>
                  <div>
                    <img
                      src={blog.thumbnail || "/img/bg.jpg"}
                      alt={blog.title}
                      className="w-full h-52 object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm font-medium text-blue-600">
                        {blog.categories[0]?.name || "Uncategorized"}
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(blog.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <CardTitle className="line-clamp-1">{blog.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div
                      className="text-gray-600 text-sm line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          blog.content.substring(0, 150) + "..."
                        ),
                      }}
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full bg-gray-200 text-gray-800 w-8 h-8 flex items-center justify-center text-xs font-medium">
                        {blog.authorInitials}
                      </div>
                      <span className="text-sm font-medium">
                        {blog.authorName}
                      </span>
                    </div>
                    <Button variant="outline" asChild>
                      <Link to={`/blog/${blog.id}`}>Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              )}
              {currentLayout === "horizontal" && index < blogs.length - 1 && (
                <hr className="border-t border-gray-200 my-8" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
