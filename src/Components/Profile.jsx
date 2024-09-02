import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, RotateCcw } from "lucide-react";
// import { Link, PenSquare, Archive, BarChart2, RotateCcw } from 'lucide-react'
export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedData = localStorage.getItem("userData");
        if (storedData) {
          setUserData(JSON.parse(storedData));
          setIsLoading(false);
          return;
        }

        const response = await fetch(`${BASE_URL}/accounts/userprofile/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const result = await response.json();
        setUserData(result.data);
        localStorage.setItem("userData", JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Unable to fetch user data");
        toast.error("Unable to fetch user data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [BASE_URL]);

  if (isLoading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4 min-h-screen">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="relative">
          <img
            src="/placeholder.svg?height=150&width=150"
            alt="Profile picture"
            width={150}
            height={150}
            className="rounded-full"
          />
          <div className="absolute top-0 right-0 bg-white rounded-full p-2 shadow-md">
            <span className="text-sm font-medium">Note...</span>
          </div>
        </div>

        <div className="flex-grow text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <h1 className="text-2xl font-semibold">
              {userData?.username || "Username"}
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm">
                Edit profile
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm">
                View archive
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm">
                Ad tools
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-6 mb-4">
            <span>
              <strong>{userData?.posts_count || 0}</strong> posts
            </span>
            <span>
              <strong>{userData?.followers_count || 0}</strong> followers
            </span>
            <span>
              <strong>{userData?.following_count || 0}</strong> following
            </span>
          </div>

          <div className="mb-2">
            <h2 className="font-semibold">
              {`${userData?.first_name || "First Name"} ${
                userData?.last_name || "Last Name"
              }`}
            </h2>

            {userData?.website && (
              <div className="flex items-center gap-1 text-blue-500">
                <Link className="w-4 h-4" aria-hidden="true" />
                <a
                  href={userData.website}
                  className="text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {userData.website}
                </a>
              </div>
            )}
          </div>

          <div className="text-sm text-gray-500">
            21 accounts reached in the last 30 days.{" "}
            <a href="#" className="font-semibold text-blue-500">
              View insights
            </a>
          </div>
        </div>

        <div className="md:self-start">
          <button
            className="p-2 rounded-full hover:bg-gray-200"
            aria-label="Refresh"
          >
            <RotateCcw className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
