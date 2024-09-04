import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../Pages/Auth/Context";

// Define the type for props
interface ProfileDropdownProps {
  toggleDropdown: () => void;
  
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  toggleDropdown,
}) => {
  const { pathname } = useLocation(); // Destructure pathname from useLocation
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleSignOut = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        await logout(); // Use the logout function from context
        Swal.fire(
          "Logged out!",
          "You have been logged out successfully.",
          "success"
        );
        navigate("/login"); // Redirect to login page after logout
      } catch (error) {
        console.error("Error logging out:", error);
        Swal.fire("Error!", "An error occurred. Please try again.", "error");
      }
    }
  };

  return (
    <div className="absolute right-0 mt-6 w-48 text-sm bg-white shadow-lg rounded-lg border border-t-4 border-t-purple-500">
      <ul className="p-4">
        <li
          onClick={toggleDropdown}
          className={
            pathname === "/Profile"
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
