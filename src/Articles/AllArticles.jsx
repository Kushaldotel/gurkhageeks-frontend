import React from "react";

const AllArticels = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src="/placeholder.svg"
          width={400}
          height={250}
          alt="Article Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">Article Title</h3>
          <p className="text-gray-600 line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget
            aliquam nisl nisl sit amet nisl.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllArticels;
