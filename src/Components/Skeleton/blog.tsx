import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/Components/ui/tabs"
import { Skeleton } from "@/Components/ui/skeleton"
import { LayoutGrid, LayoutList } from "lucide-react"
import { useState } from "react"

export default function BlogSkeleton() {
  const [currentLayout, setCurrentLayout] = useState<"horizontal" | "card">("horizontal")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const dummyBlogs = Array(6).fill(null)
  const dummyCategories = ["Technology", "Travel", "Food"]

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">All Blogs</h1>
        <div className="flex space-x-4">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {dummyCategories.map((category, index) => (
                <SelectItem key={index} value={category.toLowerCase()}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Tabs value={currentLayout} onValueChange={(value) => setCurrentLayout(value as "horizontal" | "card")}>
            <TabsList>
              <TabsTrigger value="horizontal">
                <LayoutList className="w-4 h-4 mr-2" />
                List
              </TabsTrigger>
              <TabsTrigger value="card">
                <LayoutGrid className="w-4 h-4 mr-2" />
                Grid
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className={currentLayout === "horizontal" ? "space-y-8" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
        {dummyBlogs.map((_, index) => (
          <div key={index}>
            {currentLayout === "horizontal" ? (
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/5">
                  <Skeleton className="w-full h-52 rounded-lg" />
                </div>
                <div className="md:w-3/5 md:border-l md:pl-6">
                  <div className="flex justify-between items-center mb-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center space-x-2">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-9 w-24" />
                  </div>
                </div>
              </div>
            ) : (
              <Card>
                <Skeleton className="w-full h-52 rounded-t-lg" />
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-6 w-3/4" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-9 w-24" />
                </CardFooter>
              </Card>
            )}
            {currentLayout === "horizontal" && index < dummyBlogs.length - 1 && (
              <hr className="border-t border-gray-200 my-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}