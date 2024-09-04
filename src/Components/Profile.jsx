import { useEffect, useState } from "react";
import { MoreVertical, Share2 } from "lucide-react";
import { toast } from "react-toastify";

export default function Component() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const BASE_URL = import.meta.env.VITE_BASE_URL; // Base URL from environment

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/accounts/userprofile/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const result = await response.json();
        if (result.success) {
          setUserData(result.data[0]);
        } else {
          throw new Error("Data fetching unsuccessful");
        }
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
    <div className="min-h-screen">
      <div className="w-full mt-4 max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative h-40 bg-gradient-to-r from-gray-200 to-gray-400">
          <div className="absolute -bottom-12 left-4">
            <img
              src={userData?.profile_pic || "/img/icons.png"}
              alt="Profile picture"
              width={96}
              height={96}
              className="rounded-full border-4 border-gray-300 bg-white"
            />
          </div>
        </div>
        <div className="pt-16 pb-4 px-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {`${userData?.first_name || "First Name"} ${
                  userData?.last_name || "Last Name"
                }`}
              </h1>
              <div className="flex items-center text-gray-600">
                {/* You can add location data here if available */}
                <img
                  src="/placeholder.svg?height=20&width=30"
                  alt="US flag"
                  width={20}
                  height={15}
                  className="mr-2"
                />
                {/* Placeholder for location */}
                Location Placeholder
              </div>
            </div>
            <button className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex items-center space-x-2 flex-wrap">
              <span className="text-gray-600">
                {userData?.email || "Email"}
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {/* Placeholder for role or job title */}
                Role or Job Title
              </span>
              <span className="text-gray-600">Full-time</span>
            </div>
          </div>
          <div className="flex space-x-2 mb-6">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Message
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center space-x-2">
              <Share2 className="h-4 w-4" />
              <span>Share profile</span>
            </button>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {/* You can map over user's skills or projects here if available */}
              {[
                "Product Design",
                "UX Design",
                "Google Analytics",
                "SEO Content",
                "Customer Service",
                "UI Design",
                "Design Strategy",
                "Web-Development",
                "Integrated Design",
                "Front End",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
