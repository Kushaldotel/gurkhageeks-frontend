// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Button } from "@/Components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/Components/ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/Components/ui/select";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
// import { Loader2, LayoutGrid, LayoutList } from "lucide-react";
// import DOMPurify from "dompurify";

// interface Blog {
//   id: number;
//   thumbnail: string;
//   title: string;
//   content: string;
//   categories: { name: string }[];
//   tags: string;
//   authorInitials: string;
//   authorName: string;
//   created_at: string;
// }

// interface Category {
//   id: number;
//   name: string;
// }

// export default function AllBlogs() {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [currentLayout, setCurrentLayout] = useState<"horizontal" | "card">(
//     "horizontal"
//   );
//   const [selectedCategory, setSelectedCategory] = useState<string>("all");

//   const BASE_URL = `${import.meta.env.VITE_APP_BASE_SCHEMA}${
//     import.meta.env.VITE_APP_BASE_URL
//   }${import.meta.env.VITE_APP_VERSION}`;

//   const fetchBlogs = async (categoryId?: number) => {
//     setLoading(true);
//     try {
//       const url = categoryId
//         ? `${BASE_URL}/blog/?categories=${categoryId}`
//         : `${BASE_URL}/blog/`;
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const result = await response.json();
//       if (result.success && Array.isArray(result.data)) {
//         setBlogs(result.data);
//       } else {
//         console.error("Fetched blogs data is not an array or success is false");
//       }
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//       setBlogs([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/blog/categories/`);
//       const result = await response.json();
//       if (Array.isArray(result.data)) {
//         setCategories(result.data);
//       } else {
//         console.error("Fetched categories data is not an array");
//       }
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//     fetchCategories();
//   }, []);

//   const handleCategoryChange = (value: string) => {
//     setSelectedCategory(value);
//     if (value === "all") {
//       fetchBlogs();
//     } else {
//       fetchBlogs(parseInt(value));
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <Loader2 className="w-8 h-8 animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col md:flex-row justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
//           All Blogs
//         </h1>
//         <div className="flex space-x-4">
//           <Select value={selectedCategory} onValueChange={handleCategoryChange}>
//             <SelectTrigger className="w-[180px]">
//               <SelectValue placeholder="Select Category" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All Categories</SelectItem>
//               {categories.map((category) => (
//                 <SelectItem key={category.id} value={category.id.toString()}>
//                   {category.name}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//           <Tabs
//             value={currentLayout}
//             onValueChange={(value) =>
//               setCurrentLayout(value as "horizontal" | "card")
//             }
//           >
//             <TabsList>
//               <TabsTrigger value="horizontal">
//                 <LayoutList className="w-4 h-4 mr-2" />
//                 List
//               </TabsTrigger>
//               <TabsTrigger value="card">
//                 <LayoutGrid className="w-4 h-4 mr-2" />
//                 Grid
//               </TabsTrigger>
//             </TabsList>
//           </Tabs>
//         </div>
//       </div>

//       {blogs.length === 0 ? (
//         <div className="text-center text-gray-600 mt-20">
//           No blog posts available.
//         </div>
//       ) : (
//         <div
//           className={
//             currentLayout === "horizontal"
//               ? "space-y-8"
//               : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           }
//         >
//           {blogs.map((blog) => (
//             <Card
//               key={blog.id}
//               className={
//                 currentLayout === "horizontal"
//                   ? "flex flex-col md:flex-row"
//                   : ""
//               }
//             >
//               <div className={currentLayout === "horizontal" ? "md:w-2/5" : ""}>
//                 <img
//                   src={blog.thumbnail || "/img/bg.jpg"}
//                   alt={blog.title}
//                   className="w-full h-52  object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
//                 />
//               </div>
//               <div className={currentLayout === "horizontal" ? "md:w-3/5" : ""}>
//                 <CardHeader>
//                   <div className="flex justify-between items-center mb-2">
//                     <p className="text-sm font-medium text-blue-600">
//                       {blog.categories[0]?.name || "Uncategorized"}
//                     </p>
//                     <p className="text-xs text-gray-500">
//                       {new Date(blog.created_at).toLocaleDateString()}
//                     </p>
//                   </div>
//                   <CardTitle className="line-clamp-1">{blog.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div
//                     className="text-gray-600 text-sm line-clamp-3"
//                     dangerouslySetInnerHTML={{
//                       __html: DOMPurify.sanitize(
//                         blog.content.substring(0, 150) + "..."
//                       ),
//                     }}
//                   />
//                 </CardContent>
//                 <CardFooter className="flex justify-between items-center">
//                   <div className="flex items-center space-x-2">
//                     <div className="rounded-full bg-gray-200 text-gray-800 w-8 h-8 flex items-center justify-center text-xs font-medium">
//                       {blog.authorInitials}
//                     </div>
//                     <span className="text-sm font-medium">
//                       {blog.authorName}
//                     </span>
//                   </div>
//                   <Button variant="outline" asChild>
//                     <Link to={`/blog/${blog.id}`}>Read More</Link>
//                   </Button>
//                 </CardFooter>
//               </div>
//             </Card>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }



import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Loader2, LayoutGrid, LayoutList } from "lucide-react";
import DOMPurify from "dompurify";

interface Blog {
  id: number;
  thumbnail: string;
  title: string;
  content: string;
  categories: { name: string }[];
  tags: string;
  authorInitials: string;
  authorName: string;
  created_at: string;
}

interface Category {
  id: number;
  name: string;
}

export default function AllBlogs() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentLayout, setCurrentLayout] = useState<"horizontal" | "card">("horizontal");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const BASE_URL = `${import.meta.env.VITE_APP_BASE_SCHEMA}${import.meta.env.VITE_APP_BASE_URL}${import.meta.env.VITE_APP_VERSION}`;

  const fetchBlogs = async (categoryId?: number) => {
    setLoading(true);
    try {
      const url = categoryId ? `${BASE_URL}/blog/?categories=${categoryId}` : `${BASE_URL}/blog/`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      if (result.success && Array.isArray(result.data)) {
        setBlogs(result.data);
      } else {
        console.error("Fetched blogs data is not an array or success is false");
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${BASE_URL}/blog/categories/`);
      const result = await response.json();
      if (Array.isArray(result.data)) {
        setCategories(result.data);
      } else {
        console.error("Fetched categories data is not an array");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
    fetchCategories();
  }, []);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    if (value === "all") {
      fetchBlogs();
    } else {
      fetchBlogs(parseInt(value));
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">All Blogs</h1>
        <div className="flex space-x-4">
          <Select value={selectedCategory} onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id.toString()}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Tabs
            value={currentLayout}
            onValueChange={(value) => setCurrentLayout(value as "horizontal" | "card")}
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
        <div className="text-center text-gray-600 mt-20">No blog posts available.</div>
      ) : (
        <div className={currentLayout === "horizontal" ? "space-y-8" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
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
                    <h2 className="text-xl font-bold mb-2 line-clamp-1">{blog.title}</h2>
                    <div
                      className="text-gray-600 text-sm line-clamp-3 mb-4"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(blog.content.substring(0, 150) + "..."),
                      }}
                    />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="rounded-full bg-gray-200 text-gray-800 w-8 h-8 flex items-center justify-center text-xs font-medium">
                          {blog.authorInitials}
                        </div>
                        <span className="text-sm font-medium">{blog.authorName}</span>
                      </div>
                      <Button variant="outline" asChild>
                        <Link to={`/blog/details/${blog.id}`}>Read More</Link>
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
                        __html: DOMPurify.sanitize(blog.content.substring(0, 150) + "..."),
                      }}
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full bg-gray-200 text-gray-800 w-8 h-8 flex items-center justify-center text-xs font-medium">
                        {blog.authorInitials}
                      </div>
                      <span className="text-sm font-medium">{blog.authorName}</span>
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