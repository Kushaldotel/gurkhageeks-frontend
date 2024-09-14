import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import { Card, CardContent } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  image: string;
  alt: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Revolutionizing Retail with AI-Powered Recommendations",
    image: "/img/AI.jpg",
    alt: "AI-Powered Recommendations",
  },
  {
    id: 2,
    title: "Building Responsive Websites with JS, Python and Other",
    image: "/img/WebDev.jpeg",
    alt: "Building Responsive Websites",
  },
  {
    id: 3,
    title:
      "Building a Full-Stack MERN Application from Scratch using JS and Python",
    image: "/img/FullStack.png",
    alt: "Full-Stack MERN Application",
  },
  {
    id: 4,
    title: "The Future of Web Development: Trends and Predictions",
    image: "/img/Prediction.jpeg",
    alt: "Trends and Predictions",
  },
];

export default function Component() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
<div className="mb-8 flex justify-between items-center">
  <h2 className="text-3xl font-bold text-gray-800">Roadmaps</h2>
  <div className="flex space-x-2"> {/* Removed unnecessary relative positioning */}
    <CarouselPrevious className="w-10 h-10 flex justify-center items-center bg-gray-200 hover:bg-gray-300 rounded-full"/>
    <CarouselNext className="w-10 h-10 flex justify-center items-center bg-gray-200 hover:bg-gray-300 rounded-full"/>
  </div>
</div>


        <CarouselContent>
          {articles.map((article) => (
            <CarouselItem
              key={article.id}
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-4"
            >
              <Card className="border-0 shadow-md  transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-0">
                  <Link to="#" className="block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                      <img
                        src={article.image}
                        alt={article.alt}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                    <div className="p-4 bg-white rounded-b-lg">
                      <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 h-14">
                        {article.title}
                      </h3>
                      <Button variant="outline" size="sm" className="mt-4">
                        View Roadmap
                      </Button>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
