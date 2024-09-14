import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutRequest } from "@/Pages/Auth/redux/authSlice";
import getCookie from "@/Utils/cookies/getCookie";
import { useAppDispatch } from "@/Utils/hooks/appHooks";
import { User, LogOut } from "lucide-react";
import { Button } from "@/Components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import Swal from "sweetalert2";

interface ProfileDropdownProps {
  toggleDropdown?: () => void;
  userAvatar?: string;
  userName?: string;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  toggleDropdown,
  userAvatar,
  userName,
}) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

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
          const token = getCookie("refreshToken");
          dispatch(logoutRequest({ token, navigate }));
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            {/* <AvatarImage src={userAvatar} alt={userName} />  */}
            <AvatarImage src="/img/bg.jpg" />
            {/* <AvatarFallback>{userName.charAt(0)}</AvatarFallback> */}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuItem asChild>
          <Link
            to="/profile"
            className="flex items-center"
            onClick={toggleDropdown}
          >
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={(event) => {
            event.preventDefault();
            handleSignOut();
          }}
          className="text-red-600 focus:text-red-600 focus:bg-red-50"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
