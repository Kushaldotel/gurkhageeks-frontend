import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="flex flex-col">
      <section className="w-full relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b max-w-7xl mx-auto m-4 rounded-2xl shadow-md  from-slate-300 to-transparent flex items-center justify-center">
          <div className="text-center space-y-4 max-w-2xl px-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 font-josefin">
              Building a Developer Community <br /> ♟
            </h1>
            <p className="text-lg sm:text-lg text-gray-700">
              You can support and help us to build a community for coders.
            </p>
            <Link
              to="#"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary/50 border border-gray-400"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 max-w-7xl mx-auto min-h-screen">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-justify">
              <h2 className="text-3xl sm:text-4xl font-bold font-josefin">
                About Gurkha Geeks ✓
              </h2>
              <p className="text-muted-foreground">
                n the ever-evolving world of technology, developer communities
                play a vital role in fostering growth, collaboration, and
                innovation. These communities are more than just forums or chat
                rooms; they are vibrant ecosystems where developers of all skill
                levels come together to share knowledge, solve problems, and
                build lasting relationships. Whether you're a seasoned
                professional or a newcomer to coding, being part of a developer
                community can significantly impact your career and personal
                development.
              </p>
              <p className="text-muted-foreground">
                A developer community is a collective of individuals who share a
                common interest in coding, software development, and technology.
                These communities can be found online, in local meetups, or at
                global conferences. They provide a platform for developers to:
                <br />
                * Collaborate on Projects: Working together on open-source
                projects or hackathons allows developers to learn from one
                another and contribute to meaningful work.
                <br />
                * Share Knowledge: From tutorials to blog posts, members of
                developer communities often share their expertise, helping
                others learn new technologies or improve their coding skills.
                <br />
                * Get Support: Facing a tough coding challenge? Developer
                communities offer a place to ask questions and get help from
                those who have faced similar issues.
                <br />* Network: Building connections within the community can
                open doors to new job opportunities, collaborations, and
                friendships.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/img/Google150.png"
                alt="Furniture"
                width={300}
                height={300}
                className="rounded-t-full rounded-bl-full object-cover border border-gray-300 shadow-md bg-gray-200"
              />
              <img
                src="/img/Google150.png"
                alt="Team"
                width={300}
                height={300}
                className="rounded-t-full rounded-br-full object-cover border border-gray-300 shadow-md bg-gray-200"
              />
              <img
                src="/img/Google150.png"
                alt="Furniture"
                width={300}
                height={300}
                className="rounded-b-full rounded-tl-full object-cover bg-gray-200"
              />
              <img
                src="/img/Google150.png"
                alt="Team"
                width={300}
                height={300}
                className="rounded-b-full rounded-tr-full object-cover bg-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 max-w-7xl mx-auto">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm bg-gray-100">
              Our Team
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-josefin">
              Meet the Makers
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our team of skilled artisans and designers are the heart and soul
              of our business. Each member brings a unique set of talents and
              experiences, contributing to the creation of our high-quality,
              handcrafted furniture.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center gap-2">
              <img
                src="/img/icons.png"
                alt="Adarsh Thapa"
                className="rounded-full h-7 w-7 border p-0.5 object-cover"
              />
              <div className="text-center">
                <p className="text-sm font-medium leading-none">
                  Adarsh Thapa ✊
                </p>
                <p className="text-sm text-muted-foreground">
                  Front-end Developer
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src="/img/icons.png"
                alt="Adarsh Thapa"
                className="rounded-full h-7 w-7 border p-0.5 object-cover"
              />
              <div className="text-center">
                <p className="text-sm font-medium leading-none">
                  Pawan Sapkota 👋
                </p>
                <p className="text-sm text-muted-foreground">
                  Backend Developer
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src="/img/icons.png"
                alt="Adarsh Thapa"
                className="rounded-full h-7 w-7 border p-0.5 object-cover"
              />
              <div className="text-center">
                <p className="text-sm font-medium leading-none">
                  Kushal Dotel 🫰
                </p>
                <p className="text-sm text-muted-foreground">
                  Production Manager
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src="/img/icons.png"
                alt="Adarsh Thapa"
                className="rounded-full h-7 w-7 border p-0.5 object-cover"
              />
              <div className="text-center">
                <p className="text-sm font-medium leading-none">Hacker 🤝 </p>
                <p className="text-sm text-muted-foreground">
                  Finishing Specialist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
