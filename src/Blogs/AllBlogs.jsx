import React from "react";
import { Link } from "react-router-dom";

const AllBlogs = () => {
  return (
    <div className="bg-background text-foreground max-w-7xl mx-auto">
      <header className="container mx-auto py-8 px-2 lg:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-2 rounded-lg overflow-hidden">
            <Link
              href="#"
              className="group relative h-full w-full overflow-hidden rounded-lg"
              prefetch={false}
            >
              <img
                src="/img/FullStack.png"
                width={800}
                height={500}
                alt="Featured Post"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/0 p-6 md:p-8 lg:p-12 flex flex-col justify-end">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Featured
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                    Discover the Secrets to Building a Successful Blog
                  </h2>
                  <p className="text-muted-foreground line-clamp-2">
                    Learn from the experts and start your journey to blogging
                    success. Attract readers, generate leads, and drive revenue
                    with our comprehensive guide.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            <Link href="#" className="group" prefetch={false}>
              <div className="relative h-48 overflow-hidden rounded-lg md:h-56 lg:h-64">
                <img
                  src="/img/FullStack.png"
                  width={400}
                  height={300}
                  alt="Post 2"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-transparent p-4 md:p-6 lg:p-8">
                  <div className="space-y-2 bottom-0">
                    <div className="inline-block rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-800">
                      Design
                    </div>
                    <h3 className="text-sm text-gray-50 font-semibold tracking-tight md:text-xl lg:text-md">
                      Designing for the Modern Web
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 text-gray-50 text-justify">
                      Explore the latest design trends and techniques for
                      creating visually stunning websites that captivate your
                      audience.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="relative h-48 overflow-hidden rounded-lg md:h-56 lg:h-64">
                <img
                  src="/img/bglaptop.jpg"
                  width={400}
                  height={300}
                  alt="Post 3"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/0 p-4 md:p-6 lg:p-8">
                  <div className="space-y-2">
                    <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Development
                    </div>
                    <h3 className="text-lg font-bold tracking-tight md:text-xl lg:text-2xl">
                      Mastering React: A Step-by-Step Guide
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">
                      Learn how to build powerful, scalable web applications
                      with React, the popular JavaScript library for building
                      user interfaces.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-8 px-4 md:px-6 lg:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Link href="#" className="group" prefetch={false}>
            <div className="relative h-48 overflow-hidden rounded-lg md:h-56 lg:h-64">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Post 4"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/0 p-4 md:p-6 lg:p-8">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Marketing
                  </div>
                  <h3 className="text-lg font-bold tracking-tight md:text-xl lg:text-2xl">
                    Effective Content Marketing Strategies
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    Discover proven tactics to create and distribute content
                    that attracts and engages your target audience.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#" className="group" prefetch={false}>
            <div className="relative h-48 overflow-hidden rounded-lg md:h-56 lg:h-64">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Post 5"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/0 p-4 md:p-6 lg:p-8">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Productivity
                  </div>
                  <h3 className="text-lg font-bold tracking-tight md:text-xl lg:text-2xl">
                    Boost Your Productivity with These Proven Techniques
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    Learn how to optimize your workflow, eliminate distractions,
                    and get more done in less time.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#" className="group" prefetch={false}>
            <div className="relative h-48 overflow-hidden rounded-lg md:h-56 lg:h-64">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Post 6"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/0 p-4 md:p-6 lg:p-8">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Entrepreneurship
                  </div>
                  <h3 className="text-lg font-bold tracking-tight md:text-xl lg:text-2xl">
                    The Secrets to Building a Successful Startup
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    Discover the essential strategies and insights to turn your
                    business idea into a thriving venture.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#" className="group" prefetch={false}>
            <div className="relative h-48 overflow-hidden rounded-lg md:h-56 lg:h-64">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Post 7"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/0 p-4 md:p-6 lg:p-8">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Technology
                  </div>
                  <h3 className="text-lg font-bold tracking-tight md:text-xl lg:text-2xl">
                    The Future of AI: Exploring the Latest Advancements
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    Stay ahead of the curve and learn about the transformative
                    potential of artificial intelligence in various industries.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#" className="group" prefetch={false}>
            <div className="relative h-48 overflow-hidden rounded-lg md:h-56 lg:h-64">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Post 8"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/0 p-4 md:p-6 lg:p-8">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Personal Growth
                  </div>
                  <h3 className="text-lg font-bold tracking-tight md:text-xl lg:text-2xl">
                    Unlocking Your Full Potential: Proven Strategies for
                    Self-Improvement
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    Discover practical tips and techniques to enhance your
                    personal and professional development.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#" className="group" prefetch={false}>
            <div className="relative h-48 overflow-hidden rounded-lg md:h-56 lg:h-64">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Post 9"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/0 p-4 md:p-6 lg:p-8">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Lifestyle
                  </div>
                  <h3 className="text-lg font-bold tracking-tight md:text-xl lg:text-2xl">
                    The Art of Living a Balanced Life
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    Explore practical strategies to achieve a harmonious
                    work-life balance and live a more fulfilling life.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </main>
      <aside className="bg-muted py-8 px-4 md:px-6 lg:py-12">
        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              Categories
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-lg font-medium hover:underline"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  Design
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-lg font-medium hover:underline"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-lg font-medium hover:underline"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-lg font-medium hover:underline"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  Productivity
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-lg font-medium hover:underline"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  Entrepreneurship
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-lg font-medium hover:underline"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-lg font-medium hover:underline"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  Personal Growth
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-lg font-medium hover:underline"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  Lifestyle
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default AllBlogs;
