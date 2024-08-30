import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Eye, Heart, MessageSquare } from "lucide-react";

const articlesData = [
  {
    id: 1,
    title: "The Future of AI in Healthcare",
    image: "/placeholder.svg?height=400&width=600",
    alt: "AI in Healthcare",
    category: "Technology",
    readTime: 5,
    views: 1200,
    likes: 345,
    comments: 56,
  },
  {
    id: 2,
    title: "Sustainable Living: Small Changes, Big Impact",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Sustainable Living",
    category: "Lifestyle",
    readTime: 4,
    views: 980,
    likes: 230,
    comments: 42,
  },
  {
    id: 3,
    title: "The Rise of Remote Work: Challenges and Opportunities",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Remote Work",
    category: "Business",
    readTime: 6,
    views: 1500,
    likes: 410,
    comments: 78,
  },
  {
    id: 4,
    title: "Exploring the Wonders of Deep Space",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Deep Space",
    category: "Science",
    readTime: 7,
    views: 2200,
    likes: 560,
    comments: 95,
  },
];

const ArticlesType = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(articlesData);
  }, []);

  return (
    <section className="bg-gradient-to-b from-background to-gray-100 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Latest Articles</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <div key={article.id} className="group">
              <Link href="#" className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl">
                  <img
                    src={article.image}
                    alt={article.alt}
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full mb-2">
                      {article.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white group-hover:underline">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-xs text-gray-300 mt-2">
                      <span className="flex items-center mr-3">
                        <Eye className="w-4 h-4 mr-1" />
                        {article.views}
                      </span>
                      <span className="flex items-center mr-3">
                        <Heart className="w-4 h-4 mr-1" />
                        {article.likes}
                      </span>
                      <span className="flex items-center">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        {article.comments}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm text-gray-600">
                    {article.readTime} min read
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesType;
