
export default function Fullstack() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-10 xl:p-2 xl:py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Full-stack
        </span>{" "}
        Web Developer Roadmap
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-background rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Foundations</h2>
          <ul className="space-y-2">
            <li>
              <div className="flex items-center gap-2">
                <CodeIcon className="w-5 h-5 text-primary" />
                <span>HTML, CSS, JavaScript</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <GitGraphIcon className="w-5 h-5 text-primary" />
                <span>Git and Version Control</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <TerminalIcon className="w-5 h-5 text-primary" />
                <span>Command Line Interface</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-background rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Front-end Development</h2>
          <ul className="space-y-2">
            <li>
              <div className="flex items-center gap-2">
                <CodepenIcon className="w-5 h-5 text-primary" />
                <span>React.js</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <WindIcon className="w-5 h-5 text-primary" />
                <span>Tailwind CSS</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <TypeIcon className="w-5 h-5 text-primary" />
                <span>UI/UX Design</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <AccessibilityIcon className="w-5 h-5 text-primary" />
                <span>Responsive Design</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <FlagIcon className="w-5 h-5 text-primary" />
                <span>State Management</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-background rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Back-end Development</h2>
          <ul className="space-y-2">
            <li>
              <div className="flex items-center gap-2">
                <CodepenIcon className="w-5 h-5 text-primary" />
                <span>Node.js and Express.js</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <DatabaseIcon className="w-5 h-5 text-primary" />
                <span>Databases</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <PiIcon className="w-5 h-5 text-primary" />
                <span>APIs and RESTful design</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <LockIcon className="w-5 h-5 text-primary" />
                <span>Authentication and Authorization</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-background rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Full-stack Integration</h2>
          <ul className="space-y-2">
            <li>
              <div className="flex items-center gap-2">
                <PlugIcon className="w-5 h-5 text-primary" />
                <span>Connecting Front-end and Back-end</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <CloudIcon className="w-5 h-5 text-primary" />
                <span>Deployment and Hosting</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <TestTubeIcon className="w-5 h-5 text-primary" />
                <span>Testing</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-background rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Advanced Topics</h2>
          <ul className="space-y-2">
            <li>
              <div className="flex items-center gap-2">
                <TypeIcon className="w-5 h-5 text-primary" />
                <span>TypeScript</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <GitGraphIcon className="w-5 h-5 text-primary" />
                <span>GraphQL</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <WebhookIcon className="w-5 h-5 text-primary" />
                <span>WebSockets</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <ActivityIcon className="w-5 h-5 text-primary" />
                <span>Serverless Functions</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <CommandIcon className="w-5 h-5 text-primary" />
                <span>DevOps and CI/CD</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Workflow</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <LightbulbIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold">Ideation and Planning</h3>
            </div>
            <p className="text-muted-foreground">
              Brainstorm ideas, define project requirements, and create a
              roadmap.
            </p>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <TypeIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold">Design and Prototyping</h3>
            </div>
            <p className="text-muted-foreground">
              Create wireframes, mockups, and interactive prototypes to
              visualize the user experience.
            </p>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <CodeIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold">Front-end Development</h3>
            </div>
            <p className="text-muted-foreground">
              Implement the user interface using React.js, Tailwind CSS, and
              other front-end technologies.
            </p>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <ServerIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold">Back-end Development</h3>
            </div>
            <p className="text-muted-foreground">
              Build the server-side logic using Node.js, Express.js, and
              integrate with databases and APIs.
            </p>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <PlugIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold">Integration and Testing</h3>
            </div>
            <p className="text-muted-foreground">
              Connect the front-end and back-end, and ensure the application
              works as expected through thorough testing.
            </p>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <CloudIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold">Deployment and Maintenance</h3>
            </div>
            <p className="text-muted-foreground">
              Deploy the application to a hosting platform, and maintain it with
              updates and bug fixes.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Tools and Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <CodeIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold">Code Editor</h3>
            </div>
            <p className="text-muted-foreground">Visual Studio Code</p>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <CodepenIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold">Front-end Framework</h3>
            </div>
            <p className="text-muted-foreground">React.js</p>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <WindIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold">CSS Framework</h3>
            </div>
            <p className="text-muted-foreground">Tailwind CSS</p>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <CodepenIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold">Back-end Runtime</h3>
            </div>
            <p className="text-muted-foreground">Node.js</p>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <XIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold">Back-end Framework</h3>
            </div>
            <p className="text-muted-foreground">Express.js</p>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <DatabaseIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold">Database</h3>
            </div>
            <p className="text-muted-foreground">MongoDB, PostgreSQL</p>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <GitGraphIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold">Version Control</h3>
            </div>
            <p className="text-muted-foreground">Git</p>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrelloIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold">Project Management</h3>
            </div>
            <p className="text-muted-foreground">Trello, Jira</p>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <CloudIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold">Deployment Platforms</h3>
            </div>
            <p className="text-muted-foreground">Vercel, Netlify, AWS</p>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <TestTubeIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold">Testing Frameworks</h3>
            </div>
            <p className="text-muted-foreground">Jest, Cypress</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AccessibilityIcon(props) {
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
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  );
}

function ActivityIcon(props) {
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
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  );
}

function CloudIcon(props) {
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
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function CodeIcon(props) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function CodepenIcon(props) {
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
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  );
}

function CommandIcon(props) {
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
      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
    </svg>
  );
}

function DatabaseIcon(props) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function FlagIcon(props) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}

function GitGraphIcon(props) {
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
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  );
}

function LightbulbIcon(props) {
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
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function LockIcon(props) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function PiIcon(props) {
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
      <line x1="9" x2="9" y1="4" y2="20" />
      <path d="M4 7c0-1.7 1.3-3 3-3h13" />
      <path d="M18 20c-1.7 0-3-1.3-3-3V4" />
    </svg>
  );
}

function PlugIcon(props) {
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
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  );
}

function ServerIcon(props) {
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
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}

function TerminalIcon(props) {
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
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" x2="20" y1="19" y2="19" />
    </svg>
  );
}

function TestTubeIcon(props) {
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
      <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2" />
      <path d="M8.5 2h7" />
      <path d="M14.5 16h-5" />
    </svg>
  );
}

function TrelloIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <rect width="3" height="9" x="7" y="7" />
      <rect width="3" height="5" x="14" y="7" />
    </svg>
  );
}

function TypeIcon(props) {
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
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  );
}

function WebhookIcon(props) {
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
      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
      <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
      <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
    </svg>
  );
}

function WindIcon(props) {
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
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
