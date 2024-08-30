import { Eye, Heart, MessageSquare } from "lucide-react";

export default function NewsGridTailwind() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Featured Article */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 lg:row-span-2 relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="/placeholder.svg?height=600&width=800"
            alt="Man in suit"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <span className="inline-block px-2 py-1 mb-2 text-xs font-semibold text-black bg-yellow-400 rounded-full">
              Top Story | 4 min read
            </span>
            <h2 className="text-2xl font-bold text-white mb-2">
              In 2018, Compliance Remains Our Foundation
            </h2>
            <p className="text-sm text-gray-200 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisc- ing elit, sed
              eium nonummy nibh
            </p>
            <div className="flex items-center text-sm text-gray-300 space-x-4">
              <span className="flex items-center">
                <Eye className="w-4 h-4 mr-1" /> 125 Views
              </span>
              <span className="flex items-center">
                <Heart className="w-4 h-4 mr-1" /> 102 Likes
              </span>
              <span className="flex items-center">
                <MessageSquare className="w-4 h-4 mr-1" /> 13 Comments
              </span>
            </div>
          </div>
        </div>

        {/* Smaller Articles */}
        {[
          {
            title: "Panasonic Delivers a Series of Industry Firsts to Emirates",
            image: "/placeholder.svg?height=300&width=400",
            alt: "Airplane in sunset",
          },
          {
            title: "Panasonic Delivers a Series of Industry Firsts to Emirates",
            image: "/placeholder.svg?height=300&width=400",
            alt: "Building with dome",
          },
          {
            title: "Ideas That Changed How The Time Buster works",
            image: "/placeholder.svg?height=300&width=400",
            alt: "Person wearing cap",
          },
          {
            title: "Panasonic 100th Year Anniversary Celebrations",
            image: "/placeholder.svg?height=300&width=400",
            alt: "Event celebration",
          },
        ].map((article, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={article.image}
              alt={article.alt}
              width={400}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <span className="inline-block px-2 py-1 mb-2 text-xs font-semibold text-black bg-yellow-400 rounded-full">
                Featured | 5 min read
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">
                {article.title}
              </h3>
              <div className="flex items-center text-xs text-gray-300 space-x-4">
                <span className="flex items-center">
                  <Eye className="w-3 h-3 mr-1" /> 125 Views
                </span>
                <span className="flex items-center">
                  <Heart className="w-3 h-3 mr-1" /> 102 Likes
                </span>
                <span className="flex items-center">
                  <MessageSquare className="w-3 h-3 mr-1" /> 13 Comments
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
