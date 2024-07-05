import React, { useState, useEffect } from "react";
import recentArticles from "./recentArticles.json";
import { Link } from "react-router-dom";

const AllArticles = () => {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    setAllArticles(recentArticles);
  }, []);

  return (
    <>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Recent Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allArticles.map((article) => (
              <Link key={article.id} to="/" className="flex">
                <div className="bg-white rounded-sm border border-gray-200 cursor-pointer shadow-md overflow-hidden flex flex-col">
                  <img
                    src={article.src}
                    width={400}
                    height={300}
                    alt="Article Image"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                    <p className="text-gray-600 line-clamp-3 text-justify flex-grow">
                      {article.description}
                    </p>
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
