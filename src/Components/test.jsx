/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pDy6HsMFwwc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Component() {
  return (
    <section className="bg-background py-12 md:py-16 lg:py-20">
      <div className="container grid gap-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="grid gap-4">
            <h2 className="text-2xl font-bold tracking-tight">AI and ML</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <Link
                href="#"
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  alt="Blog post image"
                  width={400}
                  height={250}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:underline">
                    Revolutionizing Retail with AI-Powered Recommendations
                  </h3>
                </div>
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <h2 className="text-2xl font-bold tracking-tight">Web Dev</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <Link
                href="#"
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  alt="Blog post image"
                  width={400}
                  height={250}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:underline">
                    Building Responsive Websites with Tailwind CSS
                  </h3>
                </div>
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <h2 className="text-2xl font-bold tracking-tight">MERN</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <Link
                href="#"
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  alt="Blog post image"
                  width={400}
                  height={250}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:underline">
                    Building a Full-Stack MERN Application from Scratch
                  </h3>
                </div>
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <h2 className="text-2xl font-bold tracking-tight">Latest News</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <Link
                href="#"
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  alt="Blog post image"
                  width={400}
                  height={250}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:underline">
                    The Future of Web Development: Trends and Predictions
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
