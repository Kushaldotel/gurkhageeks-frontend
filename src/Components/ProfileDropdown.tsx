import { logoutRequest } from "@/Pages/Auth/redux/authSlice";
import getCookie from "@/Utils/cookies/getCookie";
import { useAppDispatch } from "@/Utils/hooks/appHooks";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Define the type for props
interface ProfileDropdownProps {
  toggleDropdown: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  toggleDropdown,
}) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleSignOut = () => {
    const token = getCookie("refreshToken");
    dispatch(logoutRequest({ token, navigate }));
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
