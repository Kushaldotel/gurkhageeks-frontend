// import React, { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// const ProfileDropdown = ({ toggleDropdown }) => {
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const { pathname } = useLocation();

//   const handleSignOut = async () => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You will be logged out of your account.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, log out",
//       cancelButtonText: "Cancel",
//       reverseButtons: true,
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           const response = await fetch(
//             "https://gorkhageeks-backend.onrender.com/auth/logout/",
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//               },
//             }
//           );

//           if (response.ok) {
//             localStorage.removeItem("accessToken");
//             localStorage.removeItem("refreshToken");

//             Swal.fire(
//               "Logged out!",
//               "You have been logged out successfully.",
//               "success"
//             );
//             navigate("/"); // Redirect to login page
//           } else {
//             const { message } = await response.json();
//             Swal.fire("Error!", message || "Failed to log out.", "error");
//           }
//         } catch (error) {
//           console.error("Error logging out:", error);
//           Swal.fire("Error!", "An error occurred. Please try again.", "error");
//         }
//       }
//     });
//   };

//   return (
//     <div className="absolute right-0 mt-2 w-48 text-sm bg-white shadow-lg rounded-lg">
//       <ul className="p-4">
//         <Link to="/Profile">
//           <li
//             onClick={toggleDropdown}
//             className={
//               location.pathname === "/Profile"
//                 ? "bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg cursor-pointer p-2 text-white font-semibold mb-1"
//                 : "hover:bg-gray-200 p-2 mb-1 rounded-lg cursor-pointer"
//             }
//           >
//             Profile
//           </li>
//         </Link>

//         {/* <Link href="/Favourites">
//           <li
//             onClick={toggleDropdown}
//             className={
//               location.pathname === "/Favourites"
//                 ? "bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg cursor-pointer p-2 text-white font-semibold mb-1"
//                 : "hover:bg-gray-200 p-2 mb-1 rounded-lg cursor-pointer"
//             }
//           >
//             Your Blogs
//           </li>
//         </Link> */}
//         <li
//           className="hover:bg-gray-200 p-2 mb-1 rounded-lg cursor-pointer"
//           onClick={handleSignOut}
//         >
//           Log Out
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default ProfileDropdown;

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../Auth/AuthContext";

const ProfileDropdown = ({ toggleDropdown }) => {
  const { pathname } = useLocation(); // Destructure pathname from useLocation
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await logout(); // Use the logout function from context
          Swal.fire(
            "Logged out!",
            "You have been logged out successfully.",
            "success"
          );
        } catch (error) {
          console.error("Error logging out:", error);
          Swal.fire("Error!", "An error occurred. Please try again.", "error");
        }
      }
    });
  };

  return (
    <div className="absolute right-0 mt-6 w-48 text-sm bg-white shadow-lg rounded-lg border border-t-4 border-t-purple-500">
      <ul className="p-4">
        <li
          onClick={toggleDropdown}
          className={
            location.pathname === "/Profile"
              ? "bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg cursor-pointer p-2 text-white font-semibold mb-1"
              : "hover:bg-gray-200 p-2 mb-1 rounded-lg cursor-pointer"
          }
        >
          <Link to="/Profile">Profile</Link>
        </li>

        {/* Uncomment and use this if needed */}
        {/* <li
          onClick={toggleDropdown}
          className={
            pathname === "/Favourites"
              ? "bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg cursor-pointer p-2 text-white font-semibold mb-1"
              : "hover:bg-gray-200 p-2 mb-1 rounded-lg cursor-pointer"
          }
        >
          <Link to="/Favourites">Your Blogs</Link>
        </li> */}

        <li
          className="hover:bg-gray-200 p-2 mb-1 rounded-lg cursor-pointer"
          onClick={handleSignOut}
        >
          Log Out
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
