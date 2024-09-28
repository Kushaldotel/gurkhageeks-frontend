import AllArticles from "../Articles/list";
import ArticlesType from "../Articles/ArticleType";
import LatestBlog from "../Blogs/LatestBlogInsight/index";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Book, Zap } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="flex flex-col w-full mt-4">
      <main className="w-full">
        {/* <section
          className="relative h-[50vh] w-full bg-cover bg-center rounded-2xl max-w-7xl mx-auto"
          style={{
            backgroundImage: "url('/img/bglaptop.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute" />
          <div className="absolute bg-gradient-to-b from-gray-900 to-transparent inset-0 flex flex-col items-center justify-center text-center rounded-2xl">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl text-gray-50 p-4">
              Welcome to Gurkha Geeks ✓
            </h1>
            <p className="mt-4 max-w-3xl text-gray-300 sm:text-lg">
              Explore a wide range of topics and insights from our talented
              coders.
            </p>
            <p className="mt-4 max-w-3xl text-gray-300 sm:text-lg">
              The more you learn the more you earn
            </p>
            <button className="mt-4 text-gray-50 hover:bg-gray-50 hover:text-gray-900 px-4 py-2 rounded-md">
              Learn More →
            </button>
          </div>
        </section> */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 space-y-8"
              >
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
                  Welcome to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                    Gurkha Geeks
                  </span>{" "}
                  ✓
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl">
                  Explore a wide range of topics and insights from our talented
                  coders. The more you learn, the more you earn.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/about">
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-50"
                  >
                    Get Started
                  </Button>
                </div>
                <div className="flex justify-start space-x-8 pt-8">
                  {[
                    { icon: Code, text: "Learn Coding" },
                    { icon: Book, text: "Expert Insights" },
                    { icon: Zap, text: "Boost Your Career" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                      className="flex flex-col items-center"
                    >
                      <div className="bg-blue-100 border border-gray-300 p-3 rounded-full">
                        <item.icon className="h-6 w-6 text-gray-600" />
                      </div>
                      <span className="mt-2 text-sm text-gray-800">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:w-1/2"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-emerald-200 transform skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
                  <img
                    src="/img/bglaptop.jpg"
                    alt="Gurkha Geeks Workspace"
                    className="relative rounded-3xl shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section>
          <ArticlesType />
        </section>

        <section>
          {/* <AllArticles /> */}
          <LatestBlog />
        </section>
      </main>
    </div>
  );
}
