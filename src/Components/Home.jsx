import { useState } from "react";
import { Link } from "react-router-dom";
import AllArticles from "../Articles/AllArticles";
import { motion } from "framer-motion";

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="flex flex-col top-0 absolute w-full">
      <main className="w-full">
        <section
          className="relative h-[60vh] w-full bg-cover bg-center rounded-b-3xl"
          style={{
            backgroundImage: "url('/img/bglaptop.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl text-gray-50 p-4">
              Welcome to Gurkha Geeks ✓
            </h1>
            <p className="mt-4 max-w-3xl text-gray-300 sm:text-lg">
              Explore a wide range of topics and insights from our talented
              writers.
            </p>
            <p className="mt-4 max-w-3xl text-gray-300 sm:text-lg">
              The more you learn the more you earn
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AllArticles />
              <AllArticles />
              <AllArticles />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20 bg-gray-100">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Recent Posts</h2>
            <div className="grid grid-cols-1 gap-6">
              <RecentPostCard />
              <RecentPostCard />
              <RecentPostCard />
            </div>
          </div>
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

function RecentPostCard() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <img
        src="/placeholder.svg"
        width={400}
        height={250}
        alt="Article Image"
        className="w-full md:w-48 h-48 object-cover"
      />
      <div className="p-4 flex-1">
        <h3 className="text-xl font-bold mb-2">Article Title</h3>
        <p className="text-gray-600 line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl
          nisl sit amet nisl.
        </p>
      </div>
    </div>
  );
}
