import { useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

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
    <div className="flex flex-col min-h-screen">
      <section className="relative max-w-7xl mx-auto mt-6 shadow-md rounded-sm h-[70vh] overflow-hidden">
        <img
          src={blog.image || "/img/FullStack.png"}
          alt="Hero Image"
          width={1920}
          height={1080}
          className="inset-0 max-w-7xl w-full h-full object-cover object-center"
          style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
      </section>
      <article className="prose prose-lg max-w-4xl mx-auto my-12 px-4 md:px-0">
        <h1 className="text-4xl font-bold tracking-tight sm:text-4xl">
          {blog.title}
        </h1>
        <p className="first-letter:text-6xl mt-4 first-letter:font-bold first-letter:mr-3 first-letter:float-left">
          {blog.content}
        </p>
      </article>
    </div>
  );
};

export default BlogDetail;
