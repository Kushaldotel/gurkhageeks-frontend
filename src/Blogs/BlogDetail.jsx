// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Loader from "../Components/Loader";
// import DOMPurify from "dompurify";
// import parse from "html-react-parser";
// import Swal from "sweetalert2"; // Import SweetAlert for success message
// import CommentSection from "../Components/CommentSection";

// import LatestBlog from "./LatestBlog";

// const BlogDetail = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [error, setError] = useState(null); // New state to handle errors
//   const [loading, setLoading] = useState(true);
//   const BASE_URL = import.meta.env.VITE_BASE_URL

//   useEffect(() => {
//     const fetchBlogDetail = async () => {
//       try {
//         const response = await fetch(
//           `${BASE_URL}/blog/${id}/`
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setBlog(data);
//       } catch (error) {
//         console.log("Error fetching Data!", error);
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogDetail();
//   }, [id]);

//   if (loading) {
//     return <Loader />; // Display a loading indicator
//   }

//   if (error) {
//     return <div>Error loading blog: {error.message}</div>; // Handle errors
//   }

//   return (
//     <>
//       <div className="flex flex-col min-h-screen max-w-4xl mx-auto">
//         <h1 className="text-3xl pt-10 font-bold tracking-normal sm:text-4xl leading-[6rem]">
//           {blog.title}
//         </h1>
//         <section className="relative mt-6 shadow-md rounded-sm h-[72vh] overflow-hidden">
//           <img
//             src={blog.thumbnail || "/img/AI.jpg"}
//             alt="Hero Image"
//             className="w-full h-full object-cover object-center border"
//           />
//         </section>
//         <article className="prose prose-lg max-w-6xl mx-auto my-12 px-4 md:px-0">
//           <div className="text-xl tracking-wide leading-relaxed">
//             {parse(DOMPurify.sanitize(blog.content))}
//           </div>
//         </article>
//       </div>
//       <section>
//         <CommentSection id={id} />
//       </section>
//     </>
//   );
// };

// export default BlogDetail;

// import { CalendarIcon } from 'lucide-react'

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import Swal from "sweetalert2"; // Import SweetAlert for success message
import CommentSection from "../Components/CommentSection";
import LatestBlog from "./LatestBlog";

export default function Component() {
  const { id } = useParams(); // Get the blog id from the URL
  const [blog, setBlog] = useState(null); // State to store blog data
  const [error, setError] = useState(null); // State to store errors
  const [loading, setLoading] = useState(true); // State for loading indicator
  const BASE_URL = import.meta.env.VITE_BASE_URL; // Base URL from environment

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await fetch(`${BASE_URL}/blog/${id}/`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.log("Error fetching Data!", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [id]);

  if (loading) {
    return <Loader />; // Display a loading indicator
  }

  if (error) {
    return <div>Error loading blog: {error.message}</div>; // Handle errors
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Blog Post */}
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold mb-4">
            {blog.title} {/* Display blog title */}
          </h1>
          <div className="mb-6">
            <img
              src={blog.thumbnail || "/img/AI.jpg"}
              alt={blog.title || "SEO Optimization"} // Use blog title as alt text
              width={800}
              height={400}
              className="rounded-lg object-cover w-full"
            />
          </div>
          <article className="prose prose-lg max-w-6xl mx-auto my-12 px-4 md:px-0">
            <div className="text-xl tracking-wide leading-relaxed">
              {parse(DOMPurify.sanitize(blog.content))}
            </div>
          </article>
        </div>

        {/* Latest Blogs Section */}
        <LatestBlog />
      </div>

      {/* Comment Section */}
      <section className="mt-8">
        <CommentSection id={id} />{" "}
        {/* Pass the blog id to the comment section */}
      </section>
    </div>
  );
}
