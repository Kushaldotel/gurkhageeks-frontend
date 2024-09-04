import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

interface Article {
  id: string;
  title: string;
  thumbnail?: string;
  content: string;
  authorInitials?: string;
  authorName: string;
  created_at: string;
}

const AllArticles: React.FC = () => {
  const [latestArticles, setLatestArticles] = useState<Article[]>([]);
  const [_, setError] = useState<Error | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6; // Number of articles per page
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const recentBlogs = async () => {
      try {
        const response = await fetch(
          "https://devapi.gurkhageeks.com/blog/recentposts/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data: Article[] = await response.json();
        setLatestArticles(data);
        setError(null);
        setTotalPages(Math.ceil(data.length / itemsPerPage));
      } catch (error) {
        setError(error as Error);
        console.log("Error Fetching Data!!", error);
        setLatestArticles([]);
      }
    };
    recentBlogs();
  }, []);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const paginatedArticles = latestArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">
              Recent Blogs
            </h2>

            <div className="flex justify-center mt-8 space-x-2">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200 disabled:opacity-50"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200 disabled:opacity-50"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedArticles.map((article) => (
              <Link
                key={article.id}
                to={`/BlogDetail/${article.id}`}
                className="flex"
              >
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
                        src="/img/icons.png"
                        className="h-7 w-7 p-0.5 border border-gray-200 rounded-full"
                        alt="Author"
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
          {/* Pagination Controls */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 border border-gray-300 rounded-md ${
                  index + 1 === currentPage
                    ? "bg-gray-300 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllArticles;

interface ChevronIconProps extends React.SVGProps<SVGSVGElement> {}

const ChevronLeftIcon: React.FC<ChevronIconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon: React.FC<ChevronIconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);
