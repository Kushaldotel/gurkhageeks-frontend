import React from "react";
import { motion } from "framer-motion";

interface ToastProps{
  message: String;
  isVisible: Boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  return (
    isVisible && (
      <motion.div
        className="fixed top-4 right-0 mr-2 bg-white text-red-500 p-4 rounded-md shadow-lg shadow-gray-300 border z-50 flex items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        ✖︎ {message}
        <button
          className="ml-4 text-gray-700 hover:text-gray-900"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
      </motion.div>
    )
  );
};

export default Toast;
