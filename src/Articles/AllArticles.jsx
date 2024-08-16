import React, { useState, useEffect } from "react";
import recentArticles from "./recentArticles.json";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

const AllArticles = () => {
  const [latestArticles, setLatestArticles] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const recentBlogs = async () => {
      try {
        const response = await fetch(
          "https://devapi.gurkhageeks.com/blog/recentposts/"
        );
        const data = await response.json();
        setLatestArticles(data);
        setError(null);
      } catch (error) {
        setError(error);
        console.log("Error Fetching Data!!", error);
        setLatestArticles(null);
      }
    };
    recentBlogs();
  }, []);

  return (
    <>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Recent Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <Link key={article.id} to="/" className="flex">
                <div className="bg-white rounded-sm border border-gray-200 cursor-pointer shadow-md overflow-hidden flex flex-col">
                  <img
                    src={article.thumbnail || "/img/AI.jpg"}
                    width={400}
                    height={300}
                    alt="Article Image"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                    <p
                      className="text-muted-foreground text-base leading-relaxed line-clamp-4"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(article.content),
                      }}
                    ></p>
                  </div>
                  <div className="flex items-center space-x-3 px-4 pb-4">
                    <div>
                      <img
                        // src={blog.authorImage || "/placeholder-user.jpg"}
                        src="/img/icons.png"
                        className="h-7 w-7 p-0.5 border border-gray-200 rounded-full"
                      />
                    </div>
                    <div className="font-medium">
                      {article.authorInitials || "Adarsh Thapa"}
                    </div>
                    <div>
                      <p className="font-medium">{article.authorName}</p>
                      <p className="text-muted-foreground text-sm">
                        ◆{" "}
                        {new Date(article.created_at).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllArticles;
