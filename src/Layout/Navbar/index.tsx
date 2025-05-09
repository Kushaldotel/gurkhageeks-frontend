import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { Button } from "@/Components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { cn } from "@/lib/utils";
import ProfileDropdown from "@/Components/ProfileDropdown";
import getCookie from "@/Utils/cookies/getCookie";
import { useAppDispatch, useAppSelector } from "@/Utils/hooks/appHooks";
import { getUserDetailRequest } from "@/Pages/Profile/redux/profileSlice";
import { getRoadmapListRequest } from "@/Pages/Roadmaps/redux/roadmapSlice";
import { roadmapSelector } from "@/Pages/Roadmaps/redux/selector";

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isAuthenticated = getCookie("accessToken");
  const { list } = useAppSelector(roadmapSelector);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blog/list" },
    {
      name: "Roadmaps",
      path: "/blog/roadmaps",
    },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Add Blog", path: "/blog/create" },
  ];

  // fetch user details
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUserDetailRequest());
    }
  }, []);

  // fetch roadmap list
  useEffect(() => {
    dispatch(getRoadmapListRequest());
  }, [dispatch]);
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 xl:px-0 xl:max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">
                GurkhaGeeks
              </span>
              <span className="text-2xl text-green-500">✓</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-sm font-semibold text-gray-950 transition-colors hover:text-primary px-2 lg:px-3 py-2 rounded-md",
                  pathname === item.path
                    ? "bg-primary/10 "
                    : " hover:bg-gray-100"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <ProfileDropdown />
            ) : (
              <Link to="/login">
                <Button variant="default" size="sm">
                  Login
                </Button>
              </Link>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
