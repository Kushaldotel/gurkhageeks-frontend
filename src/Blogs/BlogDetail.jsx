import { useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import DOMPurify from "dompurify";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null); // New state to handle errors
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await fetch(
          `https://gorkhageeks-backend.onrender.com/blog/${id}/`
        );
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
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
      <section className="relative  mt-6 shadow-md rounded-sm h-[65vh] overflow-hidden">
        {/* <button className="bg-gray-800 text-white p-4 rounded-full hidden lg:block   text-xl">
          ←
        </button> */}
        <img
          src={blog.image || "/img/FullStack.png"}
          alt="Hero Image"
          className="w-full h-full object-cover object-center rounded-xl"
        />
      </section>
      <article className="prose prose-lg max-w-6xl mx-auto my-12 px-4 md:px-0">
        <h1 className="text-4xl font-bold tracking-tight sm:text-4xl">
          {blog.title}
        </h1>
        <p
          className="first-letter:text-6xl mt-4 first-letter:font-bold first-letter:mr-3 first-letter:float-left text-xl tracking-wide leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(blog.content),
          }}
        ></p>
      </article>
    </div>
  );
};

export default BlogDetail;
