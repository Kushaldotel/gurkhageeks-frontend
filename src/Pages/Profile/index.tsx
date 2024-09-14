import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Pencil } from "lucide-react";
import { Link } from "react-router-dom";

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", name: "My Profile" },
    { id: "notifications", name: "Notifications" },
    { id: "projects", name: "Your Projects" },
    { id: "blogs", name: "Your Blogs" },
  ];

  return (
    <>
      <div className="flex items-center p-4">
        <Link to="/">
          <button className="mr-4 hover:bg-gray-100 hover:rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </Link>
        <h1 className="text-2xl font-bold">GurkhaGeeks </h1>
      </div>

      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-white shadow-md">
          <nav className="p-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left py-2 px-4 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.name}
              </button>
            ))}
            <button className="w-full text-left py-2 px-4 rounded-lg transition-colors text-red-500 hover:bg-red-100 mt-4">
              Delete Account
            </button>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8">
          {activeTab === "profile" && (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-2xl font-bold">My Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                  <Avatar className="w-20 h-20 mr-4">
                    <AvatarImage
                      src="/placeholder.svg?height=80&width=80"
                      alt="Profile picture"
                    />
                    <AvatarFallback>RR</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-semibold">Rafiqur Rahman</h2>
                    <p className="text-gray-500">Team Manager</p>
                    <p className="text-gray-500">Leeds, United Kingdom</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 md:mt-0 md:ml-auto"
                  >
                    <Pencil className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="Rafiqur" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Rahman" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email address</Label>
                        <Input
                          id="email"
                          type="email"
                          defaultValue="rafiqurrahman51@gmail.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          defaultValue="+09 345 346 46"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Address</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" defaultValue="United Kingdom" />
                      </div>
                      <div>
                        <Label htmlFor="city">City/State</Label>
                        <Input id="city" defaultValue="Leeds, East London" />
                      </div>
                      <div>
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input id="postalCode" defaultValue="ERT 2354" />
                      </div>
                      <div>
                        <Label htmlFor="taxId">TAX ID</Label>
                        <Input id="taxId" defaultValue="AS45645756" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          {activeTab === "notifications" && (
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Notification settings and history will be displayed here.</p>
              </CardContent>
            </Card>
          )}
          {activeTab === "projects" && (
            <Card>
              <CardHeader>
                <CardTitle>Your Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Your projects will be listed here.</p>
              </CardContent>
            </Card>
          )}
          {activeTab === "blogs" && (
            <Card>
              <CardHeader>
                <CardTitle>Your Blogs</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Your blog posts will be displayed here.</p>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </>
  );
}
