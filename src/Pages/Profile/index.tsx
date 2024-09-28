import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Badge } from "@/Components/ui/badge";
import {
  Bookmark,
  MessageSquare,
  ThumbsUp,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useAppSelector } from "@/Utils/hooks/appHooks";
import { profileSelector } from "./redux/selector";
const developerData = {
  name: "Sarah Johnson",
  handle: "@sarahjdev",
  bio: "Full-stack developer | Open source contributor | Tech blogger",
  followers: 8700,
  projects: 32,
  contributions: 543,
  likes: 15600,
  joinedDate: "Joined Sep 2021",
  avatar: "/placeholder.svg?height=128&width=128",
  bannerImage: "/placeholder.svg?height=400&width=1200",
};

const projects = [
  {
    id: 1,
    title: "AI-Powered Code Assistant",
    description:
      "A VS Code extension that uses machine learning to suggest code improvements",
    image: "/placeholder.svg?height=300&width=400",
    likes: 230,
    comments: 45,
  },
  {
    id: 2,
    title: "Blockchain Voting System",
    description: "A decentralized voting platform built on Ethereum",
    image: "/placeholder.svg?height=300&width=400",
    likes: 189,
    comments: 37,
  },
  {
    id: 3,
    title: "Eco-Friendly Smart Home Hub",
    description: "IoT device for managing home energy consumption",
    image: "/placeholder.svg?height=300&width=400",
    likes: 312,
    comments: 56,
  },
  {
    id: 4,
    title: "Augmented Reality Navigation App",
    description: "Mobile app for real-time AR navigation in urban environments",
    image: "/placeholder.svg?height=300&width=400",
    likes: 275,
    comments: 62,
  },
];

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: What to Expect in 2025",
    date: "2023-09-15",
    excerpt:
      "Exploring upcoming trends in web technologies and how they'll shape the industry.",
    image: "/placeholder.svg?height=300&width=400",
    likes: 423,
    comments: 89,
  },
  {
    id: 2,
    title: "Optimizing React Performance: Advanced Techniques",
    date: "2023-08-22",
    excerpt:
      "Deep dive into React optimization strategies for large-scale applications.",
    image: "/placeholder.svg?height=300&width=400",
    likes: 367,
    comments: 72,
  },
  {
    id: 3,
    title: "Building Scalable Microservices with Kubernetes",
    date: "2023-07-10",
    excerpt:
      "A comprehensive guide to designing and deploying microservices on Kubernetes.",
    image: "/placeholder.svg?height=300&width=400",
    likes: 512,
    comments: 95,
  },
  {
    id: 4,
    title: "Ethical Considerations in AI Development",
    date: "2023-06-05",
    excerpt:
      "Discussing the moral implications and responsibilities in artificial intelligence.",
    image: "/placeholder.svg?height=300&width=400",
    likes: 478,
    comments: 103,
  },
];

export default function DeveloperProfile() {
  const [activeTab, setActiveTab] = useState("projects");
  const { userDetails } = useAppSelector(profileSelector);

  const formatNumber = (num: number) => {
    return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num;
  };

  return (
    <>
      {/* <div className="flex items-center p-4">
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
      </div> */}
      <div className="min-h-screen bg-gray-100">
        <div className="relative h-48 sm:h-64 lg:h-96 w-full overflow-hidden">
          <img
            src="/img/AI.jpg"
            alt="Profile Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto z-10 px-4 relative sm:px-6 lg:px-8 -mt-12 sm:-mt-16 lg:-mt-24">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-end space-y-4 sm:space-y-0 sm:space-x-5">
              <Avatar className="h-24 w-24 sm:h-32 sm:w-32 rounded-full border-4 border-white shadow-lg">
                <AvatarImage
                  src={developerData.avatar}
                  // alt={userDetails.first_name}
                />
                <AvatarFallback>
                  {developerData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                <h1 className="text-3xl font-bold">{userDetails?.first_name}</h1>
                <p className="text-gray-600">{developerData.handle}</p>
              </div>
              <div className="flex-grow"></div>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button>Follow</Button>
              </div>
            </div>

            <p className="mt-4 text-gray-700">{developerData.bio}</p>

            <div className="mt-6 flex flex-wrap justify-between items-center">
              <div className="flex flex-wrap gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    {formatNumber(developerData.followers)}
                  </div>
                  <div className="text-sm text-gray-500">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    {developerData.projects}
                  </div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    {developerData.contributions}
                  </div>
                  <div className="text-sm text-gray-500">Contributions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    {formatNumber(developerData.likes)}
                  </div>
                  <div className="text-sm text-gray-500">Likes</div>
                </div>
              </div>
              <Badge variant="secondary" className="mt-4 sm:mt-0">
                {developerData.joinedDate}
              </Badge>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="blogs">Blog Posts</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
            </TabsList>
            <TabsContent value="projects" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                  <Card key={project.id}>
                    <CardContent className="p-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <ThumbsUp className="mr-1 h-4 w-4" />
                              {project.likes}
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MessageSquare className="mr-1 h-4 w-4" />
                              {project.comments}
                            </Button>
                          </div>
                          <Button variant="outline" size="sm">
                            <Bookmark className="mr-1 h-4 w-4" />
                            Save
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="blogs" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                {blogPosts.map((post) => (
                  <Card key={post.id}>
                    <CardContent className="p-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">
                          {post.date}
                        </p>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <ThumbsUp className="mr-1 h-4 w-4" />
                              {post.likes}
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MessageSquare className="mr-1 h-4 w-4" />
                              {post.comments}
                            </Button>
                          </div>
                          <Button variant="outline" size="sm">
                            <Bookmark className="mr-1 h-4 w-4" />
                            Save
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="about" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>About Sarah Johnson</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Sarah Johnson is a passionate full-stack developer with over
                    5 years of experience in creating innovative web and mobile
                    applications. She specializes in React, Node.js, and cloud
                    technologies, with a keen interest in AI and machine
                    learning integration in software development.
                  </p>
                  <p className="mb-4">
                    As an active open-source contributor, Sarah has made
                    significant contributions to several popular projects,
                    including improvements to React's core library and
                    developing plugins for webpack and Babel.
                  </p>
                  <p>
                    When she's not coding, Sarah enjoys writing technical blog
                    posts, mentoring aspiring developers, and speaking at tech
                    conferences. She's committed to promoting diversity in tech
                    and regularly organizes workshops for underrepresented
                    groups in the industry.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}


