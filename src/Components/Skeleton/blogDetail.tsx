import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Skeleton } from "@/Components/ui/skeleton";
import { Calendar, User } from "lucide-react";

export default function BlogDetailSkeleton() {
  return (
    <div className="container mx-auto px-4 lg:px-0 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <Card className="flex-grow lg:w-2/3">
          <CardHeader>
            <Skeleton className="h-10 w-3/4 mb-4" />
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Skeleton className="w-full h-[40vh] mb-8 rounded-lg" />
            <article className="prose prose-lg max-w-none dark:prose-invert space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </article>
          </CardContent>
        </Card>
        <div className="lg:w-1/3 lg:max-w-sm w-full">
          <Card>
            <CardHeader>
              <CardTitle>Latest Blogs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <Skeleton className="h-18 w-18 rounded" />
                    <div className="space-y-2">
                      <Skeleton className="h-8 w-[200px]" />
                      <Skeleton className="h-8 w-[160px]" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <section className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Comments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-2 flex-grow">
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
