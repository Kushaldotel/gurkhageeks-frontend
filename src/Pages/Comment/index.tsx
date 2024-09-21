import { useState } from "react"
import { MessageCircle, ThumbsUp, ThumbsDown, Share2, Send, Image as ImageIcon, AtSign, Smile } from "lucide-react"
import { Button } from "@/Components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { Textarea } from "@/Components/ui/textarea"
import { ScrollArea } from "@/Components/ui/scroll-area"

type Comment = {
  id: number
  author: string
  avatar: string
  content: string
  likes: number
  dislikes: number
  timestamp: string
}

export default function LightThemeCommentUI() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [newComment, setNewComment] = useState("")
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Alice Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "This is a great post! I love the insights you've shared.",
      likes: 15,
      dislikes: 2,
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      author: "Bob Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "I have a different perspective on this. Here's what I think...",
      likes: 8,
      dislikes: 1,
      timestamp: "1 hour ago"
    }
  ])

  const toggleExpand = () => setIsExpanded(!isExpanded)

  const handleSubmit = () => {
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: comments.length + 1,
        author: "Current User",
        avatar: "/placeholder.svg?height=40&width=40",
        content: newComment,
        likes: 0,
        dislikes: 0,
        timestamp: "Just now"
      }
      setComments([newCommentObj, ...comments])
      setNewComment("")
    }
  }

  return (
    <div className="max-w-7xl border mx-auto p-4 bg-white text-gray-800 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-2/3">
          <div className="flex items-center space-x-4 mb-6">
            <Button
              variant="outline"
              className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300"
              onClick={toggleExpand}
            >
              <MessageCircle className="h-5 w-5" />
              <span>Comment</span>
            </Button>
            <Button variant="outline" className="bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300">
              <ThumbsUp className="h-5 w-5 mr-2" />
              <span>Like</span>
            </Button>
            <Button variant="outline" className="bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300">
              <Share2 className="h-5 w-5 mr-2" />
              <span>Share</span>
            </Button>
          </div>

          {isExpanded && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6 transition-all duration-300 ease-in-out">
              <div className="flex items-start space-x-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <Textarea
                  placeholder="Share your thoughts..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="flex-grow bg-white text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md resize-none"
                  rows={3}
                />
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800 hover:bg-gray-200">
                    <ImageIcon className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800 hover:bg-gray-200">
                    <AtSign className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800 hover:bg-gray-200">
                    <Smile className="h-5 w-5" />
                  </Button>
                </div>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={handleSubmit}
                  disabled={!newComment.trim()}
                >
                  <Send className="h-4 w-4 mr-2" />
                  <span>Post</span>
                </Button>
              </div>
            </div>
          )}

          <ScrollArea className="h-[calc(100vh-300px)] pr-4">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={comment.avatar} alt={comment.author} />
                    <AvatarFallback>{comment.author[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-800">{comment.author}</h3>
                      <span className="text-sm text-gray-500">{comment.timestamp}</span>
                    </div>
                    <p className="mt-1 text-gray-600">{comment.content}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800 hover:bg-gray-200">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>{comment.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800 hover:bg-gray-200">
                        <ThumbsDown className="h-4 w-4 mr-1" />
                        <span>{comment.dislikes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800 hover:bg-gray-200">
                        Reply
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>

        <div className="w-full md:w-1/3 bg-gray-50 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Trending Comments</h2>
          <ScrollArea className="h-[calc(100vh-200px)]">
            {comments.slice(0, 5).map((comment) => (
              <div key={comment.id} className="mb-4 pb-4 border-b border-gray-200 last:border-b-0">
                <div className="flex items-start space-x-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={comment.avatar} alt={comment.author} />
                    <AvatarFallback>{comment.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-800">{comment.author}</h4>
                    <p className="text-sm text-gray-600 mt-1">{comment.content.slice(0, 50)}...</p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}