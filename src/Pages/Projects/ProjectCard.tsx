import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border rounded-lg overflow-hidden shadow">
          <div className="flex flex-col gap-4 p-6 border-b">
            <div className="flex items-center gap-4">
              <LaptopIcon className="w-10 h-10 text-primary" />
              <h2 className="text-2xl font-bold">Project 1</h2>
            </div>
            <p className="text-muted-foreground">
              A beautifully designed project showcase card to highlight your
              work.
            </p>
          </div>
          <div className="grid gap-8 p-6">
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Project Description</h3>
              <p className="text-muted-foreground">
                This is a unique project that showcases my skills in web
                development. It features a modern and responsive design, with a
                focus on user-friendliness and attention to detail.
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Screenshots</h3>
              <img
                src="/placeholder.svg"
                width="600"
                height="400"
                alt="Screenshot 1"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex gap-4">
              <Link
                to="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                View Live
              </Link>
              <Link
                to="#"
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                View Repo
              </Link>
            </div>
          </div>
        </div>
        <div className="border rounded-lg overflow-hidden shadow">
          <div className="flex flex-col gap-4 p-6 border-b">
            <div className="flex items-center gap-4">
              <LaptopIcon className="w-10 h-10 text-primary" />
              <h2 className="text-2xl font-bold">Project 2</h2>
            </div>
            <p className="text-muted-foreground">
              A beautifully designed project showcase card to highlight your
              work.
            </p>
          </div>
          <div className="grid gap-8 p-6">
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Project Description</h3>
              <p className="text-muted-foreground">
                This is a unique project that showcases my skills in web
                development. It features a modern and responsive design, with a
                focus on user-friendliness and attention to detail.
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Screenshots</h3>
              <img
                src="/placeholder.svg"
                width="600"
                height="400"
                alt="Screenshot 1"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex gap-4">
              <Link
                to="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                View Live
              </Link>
              <Link
                to="#"
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                View Repo
              </Link>
            </div>
          </div>
        </div>
        <div className="border rounded-lg overflow-hidden shadow">
          <div className="flex flex-col gap-4 p-6 border-b">
            <div className="flex items-center gap-4">
              <LaptopIcon className="w-10 h-10 text-primary" />
              <h2 className="text-2xl font-bold">Project 3</h2>
            </div>
            <p className="text-muted-foreground">
              A beautifully designed project showcase card to highlight your
              work.
            </p>
          </div>
          <div className="grid gap-8 p-6">
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Project Description</h3>
              <p className="text-muted-foreground">
                This is a unique project that showcases my skills in web
                development. It features a modern and responsive design, with a
                focus on user-friendliness and attention to detail.
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Screenshots</h3>
              <img
                src="/placeholder.svg"
                width="600"
                height="400"
                alt="Screenshot 1"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex gap-4">
              <Link
                to="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                View Live
              </Link>
              <Link
                to="#"
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                View Repo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;

function LaptopIcon(props: { className: string }) {
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
