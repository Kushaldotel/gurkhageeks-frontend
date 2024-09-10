export default function Cybersecurity() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6 md:p-10 xl:p-2 xl:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Cyber security
        </span>{" "}
        Developer Roadmap
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-background rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Foundations</h2>
          <ul className="space-y-2">
            <li>
              <div className="flex items-center gap-2">
                <CodeIcon className="w-5 h-5 text-primary" />
                <span>Programming Fundamentals (Python, Java, C++)</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <TerminalIcon className="w-5 h-5 text-primary" />
                <span>Linux/Unix Command Line Interface</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <DatabaseIcon className="w-5 h-5 text-primary" />
                <span>Networking Concepts</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <DatabaseIcon className="w-5 h-5 text-primary" />
                <span>Cryptography Fundamentals</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-background rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">
            Cyber Security Fundamentals
          </h2>
          <ul className="space-y-2">
            <li>
              <div className="flex items-center gap-2">
                <LockIcon className="w-5 h-5 text-primary" />
                <span>Ethical Hacking and Penetration Testing</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <LockIcon className="w-5 h-5 text-primary" />
                <span>Vulnerability Assessment and Management</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <LockIcon className="w-5 h-5 text-primary" />
                <span>Incident Response and Forensics</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <LockIcon className="w-5 h-5 text-primary" />
                <span>Network Security and Firewalls</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <LockIcon className="w-5 h-5 text-primary" />
                <span>Web Application Security</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-background rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">
            Advanced Cyber Security Topics
          </h2>
          <ul className="space-y-2">
            <li>
              <div className="flex items-center gap-2">
                <LockIcon className="w-5 h-5 text-primary" />
                <span>Malware Analysis and Reverse Engineering</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <LockIcon className="w-5 h-5 text-primary" />
                <span>Cloud Security and DevSecOps</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <LockIcon className="w-5 h-5 text-primary" />
                <span>Secure Coding Practices and SAST/DAST</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <LockIcon className="w-5 h-5 text-primary" />
                <span>Threat Hunting and Incident Response</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <LockIcon className="w-5 h-5 text-primary" />
                <span>Security Monitoring and Log Analysis</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-background rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Workflow</h2>
          <ul className="space-y-2">
            <li>
              <div className="flex items-center gap-2">
                <LightbulbIcon className="w-5 h-5 text-primary" />
                <span>Security Risk Assessment and Threat Modeling</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <CodeIcon className="w-5 h-5 text-primary" />
                <span>Secure Coding and Vulnerability Remediation</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <PlugIcon className="w-5 h-5 text-primary" />
                <span>Penetration Testing and Security Assessments</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <CloudIcon className="w-5 h-5 text-primary" />
                <span>Security Monitoring and Incident Response</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-background rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Tools and Technologies</h2>
          <ul className="space-y-2">
            <li>
              <div className="flex items-center gap-2">
                <CodeIcon className="w-5 h-5 text-primary" />
                <span>Kali Linux, Metasploit, Burp Suite</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <PiIcon className="w-5 h-5 text-primary" />
                <span>Python, Bash Scripting</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <LockIcon className="w-5 h-5 text-primary" />
                <span>Wireshark, Nmap, Snort, Splunk</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <LockIcon className="w-5 h-5 text-primary" />
                <span>SIEM Tools (Splunk, ELK Stack)</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <CloudIcon className="w-5 h-5 text-primary" />
                <span>AWS, Azure, Google Cloud Security</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-background rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Project Ideas</h2>
          <ul className="space-y-2">
            <li>
              <div className="flex items-center gap-2">
                <LightbulbIcon className="w-5 h-5 text-primary" />
                <span>Vulnerability Scanning and Remediation Tool</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <LightbulbIcon className="w-5 h-5 text-primary" />
                <span>Malware Analysis and Reverse Engineering</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <LightbulbIcon className="w-5 h-5 text-primary" />
                <span>Secure Web Application Development</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <LightbulbIcon className="w-5 h-5 text-primary" />
                <span>Security Monitoring and Incident Response Platform</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <LightbulbIcon className="w-5 h-5 text-primary" />
                <span>Automated Penetration Testing Framework</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function CloudIcon(props: { className: string }) {
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

function CodeIcon(props: { className: string }) {
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

function DatabaseIcon(props: { className: string }) {
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

function LightbulbIcon(props: { className: string }) {
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

function LockIcon(props: { className: string }) {
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

function PiIcon(props: { className: string }) {
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

function PlugIcon(props: { className: string }) {
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

function TerminalIcon(props: { className: string }) {
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
