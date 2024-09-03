import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import articlesData from "./articles.json"; // Adjust the import path accordingly

const ArticlesType = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(articlesData);
  }, []);

  return (
    <div>
      <section className="bg-background py-12 md:py-16 lg:py-20 max-w-7xl mx-auto">
        <div className="container grid gap-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {articles.map((article) => (
              <div
                key={article.id}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
              >
                <Link
                  to="#"
                  className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
                  prefetch={false}
                >
                  <img
                    src={article.image}
                    alt={article.alt}
                    width={400}
                    height={250}
                    className="h-48 w-full object-cover shadow-md shadow-gray-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                    <h3 className="text-md text-gray-50 font-semibold text-foreground group-hover:underline">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesType;
