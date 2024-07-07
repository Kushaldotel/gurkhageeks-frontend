import { useState } from "react";
import { Link } from "react-router-dom";
import AllArticles from "../Articles/AllArticles";
import { motion } from "framer-motion";
import ArticlesType from "../Articles/ArticlesType";
import RecentArticle from "../Articles/RecentArticle";

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="flex flex-col w-full mt-4">
      <main className="w-full">
        <section
          className="relative h-[50vh] w-full bg-cover bg-center rounded-2xl max-w-7xl mx-auto"
          style={{
            backgroundImage: "url('/img/bglaptop.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute" />
          <div className="absolute bg-gradient-to-t from-gray-900 to-transparent inset-0 flex flex-col items-center justify-center text-center rounded-2xl">
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
        </section>
        <section>
          <ArticlesType/>
        </section>

        <section>
          <AllArticles/>
        </section>
        <section>
          <RecentArticle/>
        </section>
      </main>
    </div>
  );
}

function MountainIcon(props) {
  return (
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

