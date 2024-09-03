import { Link } from "react-router-dom";
import projectData from "./Projects.json";
import { useEffect, useState } from "react";

const ProjectShowcase = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  return (
    <section className="w-full py-12 md:py-12 lg:py-8 min-h-screen mx-auto max-w-7xl">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div className="border rounded-lg overflow-hidden shadow">
            <div className="flex flex-col gap-4 p-6 border-b">
              <div className="flex items-center gap-4">
                <LaptopIcon className="w-10 h-10 text-primary" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                  {project.title}
                </h2>
              </div>
            </div>
            <div className="flex-col gap-4 p-4">
              <div className="grid gap-2">
                <h3 className="text-lg font-semibold ">Project Description</h3>
                <p className="text-justify line-clamp-3">
                  {project.description}
                </p>
              </div>
              <div className="grid gap-2 my-4">
                <img
                  src={project.screenshots}
                  width="600"
                  height="280"
                  alt="Screenshot 1"
                  className="rounded-lg object-cover border border-gray-300"
                />
              </div>
              <div className="flex gap-4">
                <Link
                  to={project.demoLinks[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 bg-gray-800 text-gray-50 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-md transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 "
                  prefetch={false}
                >
                  View Live
                </Link>
                <Link
                  to={project.repoLinks}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-gray-300"
                  prefetch={false}
                >
                  View Repo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;

function LaptopIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  );
}
