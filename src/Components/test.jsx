import Image from 'next/image'
import { CalendarIcon } from 'lucide-react'

export default function test() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Blog Post */}
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold mb-4">How to Optimize Your Website for Better Search Engine Rankings</h1>
          <div className="mb-6">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="SEO Optimization"
              width={800}
              height={400}
              className="rounded-lg object-cover w-full"
            />
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
                {/* <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:underline">
                    Building Responsive Websites with Tailwind CSS
                  </h3>
                </div> */}
              </Link>
            </div>
          </div>
        </div>

        {/* Latest Blogs Section */}
        <div className="lg:w-1/3">
          <div className="sticky top-8">
            <h2 className="text-2xl font-bold mb-4">Latest Blogs</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'The Importance of a Strong Brand Identity for Startups',
                  date: 'May 17, 2024',
                  image: '/placeholder.svg?height=80&width=80',
                },
                {
                  title: 'How to Optimize Your Website for Better Search Engine Rankings',
                  date: 'May 17, 2024',
                  image: '/placeholder.svg?height=80&width=80',
                },
                {
                  title: 'Top Digital Marketing Trends to Watch in 2024',
                  date: 'May 17, 2024',
                  image: '/placeholder.svg?height=80&width=80',
                },
              ].map((blog, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{blog.title}</h3>
                    <p className="text-sm text-gray-600 flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {blog.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}