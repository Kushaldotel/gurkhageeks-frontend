import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Calendar, User } from "lucide-react";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Badge } from "@/Components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

export default function LatestBlog() {
  const [latestArticles, setLatestArticles] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 6;
  const [totalPages, setTotalPages] = useState(0);
  const BASE_URL = `${import.meta.env.VITE_APP_BASE_SCHEMA}${
    import.meta.env.VITE_APP_BASE_URL
  }${import.meta.env.VITE_APP_VERSION}`;

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/blog/recentposts/`);
        const result = await response.json();

        if (result.success && Array.isArray(result.data)) {
          setLatestArticles(result.data);
          setTotalPages(Math.ceil(result.data.length / itemsPerPage));
        } else {
          console.error("Unexpected data format:", result);
          setError("Failed to load blog posts. Please try again later.");
        }
      } catch (error) {
        console.error("Error Fetching Data:", error);
        setError(
          "An error occurred while fetching blog posts. Please try again later."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecentBlogs();
  }, [BASE_URL]);

  const handlePrevious = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const paginatedArticles = latestArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most recent articles and stay informed with the latest
            trends and insights.
          </p>
        </motion.div>
        <div className="flex justify-between items-center mb-8">
          <Badge variant="secondary" className="text-sm py-1 px-3">
            Page {currentPage} of {totalPages}
          </Badge>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="transition-all duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous page</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="transition-all duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        </div>
        <AnimatePresence>
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {paginatedArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/BlogDetail/${article.id}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={article.thumbnail || "/img/bg.jpg"}
                        alt={article.title}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white font-semibold">
                          Read More
                        </span>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-1 text-xl group-hover:text-primary transition-colors duration-200">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p
                        className="text-gray-600 text-sm line-clamp-3"
                        dangerouslySetInnerHTML={{
                          __html: article.content,
                        }}
                      />
                    </CardContent>
                    <CardFooter className="flex items-center space-x-4 pt-4 border-t p-4">
                      <Avatar>
                        <AvatarImage
                          src="/img/icons.png"
                          alt={article.authorName || "Author"}
                          className="p-0.5 border border-gray-100"
                        />
                        <AvatarFallback>
                          {article.authorInitials || "AT"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <p className="text-sm font-medium flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {article.authorName || "Adarsh Thapa"}
                        </p>
                        <p className="text-xs text-gray-500 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
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
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center mt-12 space-x-2">
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index}
          variant={index + 1 === currentPage ? "default" : "outline"}
          size="sm"
          onClick={() => onPageChange(index + 1)}
          className={`w-10 h-10 ${
            index + 1 === currentPage
              ? "bg-primary text-primary-foreground"
              : "hover:bg-primary hover:text-primary-foreground"
          } transition-all duration-200 ease-in-out`}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="container max-w-7xl mx-auto px-4 md:px-6 py-16">
      <div className="text-center mb-12 animate-pulse">
        <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto mb-4" />
        <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="animate-pulse">
            <div className="h-48 bg-gray-200 rounded-t-lg" />
            <CardHeader>
              <div className="h-6 bg-gray-200 rounded w-3/4" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            </CardContent>
            <CardFooter className="flex items-center space-x-4 pt-4 border-t">
              <div className="rounded-full bg-gray-200 h-10 w-10" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-20" />
                <div className="h-3 bg-gray-200 rounded w-24" />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ErrorMessage({ message }) {
  return (
    <div className="container max-w-7xl mx-auto px-4 md:px-6 py-16">
      <Card className="bg-red-50 border-red-200 max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-red-800 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            Error
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-600">{message}</p>
        </CardContent>
      </Card>
    </div>
  );
}
