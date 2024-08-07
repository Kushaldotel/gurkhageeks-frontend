import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div class="text-center mt-6">
      <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-gray-900 mx-auto"></div>
      <h2 class="text-zinc-900 dark:text-white mt-4">Loading...</h2>
      <p class="text-zinc-600 dark:text-zinc-400">
        Make your learning worth...
      </p>
    </div>
  );
};

export default Loader;
