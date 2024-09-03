// import React, { useState, useEffect } from "react";
// import recentArticles from "./recentArticles.json";

// const RecentArticle = () => {
//   const [recentArticles, setRecentArticles] = useState([]);

//   useEffect(() => {
//     const recentArticles = async () => {
//       const response = await fetch(
//         `https://gorkhageeks-backend.onrender.com/blog/recentposts/`
//       );
//       const data = await response.json();
//       setRecentArticles(data);
//     };
//     recentArticles();
//   }, []);

//   return (
//     <div>
//       <section className="py-12 md:py-16 lg:py-20 bg-gray-100">
//         <div className="container max-w-7xl mx-auto px-4 md:px-6">
//           <h2 className="text-2xl lg:text-3xl font-bold mb-8">Recent Posts</h2>
//           <div className="grid grid-cols-1 gap-6">
//             {recentArticles.map((article) => (
//               <div
//                 key={article.id}
//                 className="border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
//               >
//                 <img
//                   src={article.src}
//                   width={400}
//                   height={250}
//                   alt="Article Image"
//                   className="w-full md:w-48 h-48 object-cover"
//                 />
//                 <div className="p-4 flex-1">
//                   <h3 className="text-xl font-bold mb-2">{article.title}</h3>
//                   <p className="text-gray-600 line-clamp-3 mb-2 text-justify">
//                     {article.description}
//                   </p>

//                   <button className="bg-gray-800 px-4 py-2 text-gray-50 rounded-md">
//                     Learn More ➙
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default RecentArticle;

import React from 'react'

const RecentArticle = () => {
  return (
    <div>
      {/* Hello */}
    </div>
  )
}

export default RecentArticle
