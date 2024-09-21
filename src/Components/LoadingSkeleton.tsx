import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

const LoadingSekeleton = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 md:px-6 py-16">
      <div className="text-center mb-12 animate-pulse">
        <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto mb-4" />
        <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="animate-pulse">
            <div className="h-48 bg-gray-200 rounded-t-lg" />
            <CardHeader>
              <div className="h-6 bg-gray-200 rounded w-3/4" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            </CardContent>
            <CardFooter className="flex items-center space-x-4 pt-4 border-t">
              <div className="rounded-full bg-gray-200 h-10 w-10" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-20" />
                <div className="h-3 bg-gray-200 rounded w-24" />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LoadingSekeleton;
