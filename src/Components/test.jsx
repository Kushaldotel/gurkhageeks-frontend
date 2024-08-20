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
          <div className="space-y-4">
            <p>
              Search Engine Optimization (SEO) is crucial for improving your website's visibility in search engine
              results. By implementing effective SEO strategies, you can attract more organic traffic and increase your
              online presence. Here are some key tips to optimize your website for better search engine rankings:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Conduct thorough keyword research and use relevant keywords naturally in your content.</li>
              <li>Create high-quality, original content that provides value to your audience.</li>
              <li>Optimize your website's loading speed and ensure it's mobile-friendly.</li>
              <li>Use descriptive and keyword-rich meta titles and descriptions for each page.</li>
              <li>Build high-quality backlinks from reputable websites in your industry.</li>
              <li>Implement a clear and logical site structure with internal linking.</li>
              <li>Optimize images with descriptive alt text and compress them for faster loading.</li>
              <li>Regularly update your content to keep it fresh and relevant.</li>
            </ol>
            <p>
              By following these best practices and staying up-to-date with the latest SEO trends, you can improve your
              website's search engine rankings and drive more organic traffic to your site.
            </p>
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