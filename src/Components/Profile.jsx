import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedData = localStorage.getItem("userData");
        if (storedData) {
          setUserData(JSON.parse(storedData));
        } else {
          const response = await fetch("https://your-api/user/profile", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          });
          if (response.ok) {
            const data = await response.json();
            setUserData(data);
            localStorage.setItem("userData", JSON.stringify(data));
          } else {
            throw new Error("Failed to fetch user data");
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Unable to fetch user data");
        toast.error("Unable to fetch user data");
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="w-full min-h-screen">
      {userData && (
        <>
          <section className="w-full bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-20">
            <div className="container px-4 md:px-6  mx-auto max-w-7xl">
              <div className="max-w-2xl mx-auto text-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-great-vibes">
                  Welcome,{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
                    {userData.firstName} {userData.lastName}
                  </span>{" "}
                  !
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
                  Explore your profile and manage your account settings.
                </p>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-16 lg:py-20  mx-auto max-w-7xl font-great-vibes lg:text-2xl">
            <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <div className="p-6">
                  <h3 className="text-lg font-semibold">First Name</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    {userData.firstName}
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Last Name</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    {userData.lastName}
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    {userData.email}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Profile;
