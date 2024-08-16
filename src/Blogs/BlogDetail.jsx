import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import Swal from "sweetalert2"; // Import SweetAlert for success message
import CommentSection from "../Components/CommentSection";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null); // New state to handle errors
  const [loading, setLoading] = useState(true);
  const BASE_URL = import.meta.env.VITE_BASE_URL

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/blog/${id}/`
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

  if (error) {
    return <div>Error loading blog: {error.message}</div>; // Handle errors
  }

  return (
    <>
      <div className="flex flex-col min-h-screen max-w-4xl mx-auto">
        <h1 className="text-3xl pt-10 font-bold tracking-normal sm:text-4xl leading-[6rem]">
          {blog.title}
        </h1>
        <section className="relative mt-6 shadow-md rounded-sm h-[72vh] overflow-hidden">
          <img
            src={blog.thumbnail || "/img/AI.jpg"}
            alt="Hero Image"
            className="w-full h-full object-cover object-center border"
          />
        </section>
        <article className="prose prose-lg max-w-6xl mx-auto my-12 px-4 md:px-0">
          <div className="text-xl tracking-wide leading-relaxed">
            {parse(DOMPurify.sanitize(blog.content))}
          </div>
        </article>
      </div>
      <section>
        <CommentSection id={id} />
      </section>
    </>
  );
};

export default BlogDetail;
