"use client";

import { useState } from "react";
import {
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Send,
  Image as ImageIcon,
  AtSign,
  Smile,
  User,
  Icon,
  User2,
} from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Textarea } from "@/Components/ui/textarea";
import { ScrollArea } from "@/Components/ui/scroll-area";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import AppButton from "@/Components/Button";
import { useAppDispatch, useAppSelector } from "@/Utils/hooks/appHooks";
import { createCommentRequest, postLikeRequest } from "./redux/commentSlice";
import { commentSelector } from "./redux/selector";
import { CommentProps } from "./redux/types";
import { profileSelector } from "../Profile/redux/selector";
// import { useSelector } from "react-redux";
import { SharePopup } from "@/Components/ShareLink";

export default function Comment({
  id,
  comments,
}: {
  id: number;
  comments: any;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(commentSelector);
  const initialState = {
    content: "",
  };

  //Getting user detail from selector 
  const { userDetails } = useAppSelector(profileSelector);

  //Validation for comment section
  const validationSchema = Yup.object().shape({
    content: Yup.string().required("Please enter a comment"),
  });

  const toggleExpand = () => setIsExpanded(!isExpanded);


    //Handle Submit for comment
  const handleSubmit = (values: { content: string }, { resetForm }: any) => {
    const newValue = { ...values, id };
    dispatch(createCommentRequest({ values: newValue, resetForm }));
  };


//Handle Reply
  const handleReply = (commentId: number) => {
    setReplyingTo(commentId === replyingTo ? null : commentId);
  };


  //Handle Reply submit 
  const handleReplySubmit = (
    values: { content: string },
    { resetForm }: any
  ) => {
    // Here you would dispatch an action to submit the reply
    console.log(`Replying to comment ${replyingTo} with: ${values.content}`);
    resetForm();
    setReplyingTo(null);
  };

  //Handling Likes 
  const handleLike = () => {
    dispatch(postLikeRequest({id, setIsLiked}));
  };

  const { likes, likeLoading } = useAppSelector(commentSelector);
  // const isLiked = likes[id];
  // const isLikeLoading = likeLoading[id];

  const renderComment = (comment: CommentProps, isReply = false) => (
    <div
      key={comment.id}
      className={`bg-gray-50 rounded-lg p-4 ${isReply ? "ml-8 mt-2" : "mb-4"}`}
    >
      <div className="flex items-start space-x-4">
        <Avatar className="w-10 h-10 p-1">
          {/* <AvatarImage src={} alt={} /> */}
          {/* <AvatarFallback>{comment.author[0]}</AvatarFallback> */}
          <User2 className="h-8 w-8 border p-2 rounded-full border-gray-800" />
        </Avatar>
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-800">
              {/* {comment.author} */}
            </h3>
            <span className="text-sm text-gray-500">{comment.created_at}</span>
          </div>
          <p className="mt-1 text-gray-600">{comment.content}</p>
          <div className="flex items-center space-x-4 mt-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-gray-800 hover:bg-gray-200"
            >
              <ThumbsUp className="h-4 w-4 mr-1" />
              {/* <span>{comment.likes}</span> */}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-gray-800 hover:bg-gray-200"
            >
              <ThumbsDown className="h-4 w-4 mr-1" />
              {/* <span>{comment.dislikes}</span> */}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-gray-800 hover:bg-gray-200"
              onClick={() => handleReply(comment.id)}
            >
              Reply
            </Button>
          </div>
          {replyingTo === comment.id && (
            <Formik
              initialValues={{ content: "" }}
              validationSchema={Yup.object().shape({
                content: Yup.string().required("Please enter a reply"),
              })}
              onSubmit={handleReplySubmit}
            >
              {({ values, setFieldValue }) => (
                <Form className="mt-4">
                  <div className="bg-gray-100 rounded-lg p-4 transition-all duration-300 ease-in-out">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-8 h-8">
                        <AvatarImage
                          src="/placeholder.svg?height=32&width=32"
                          alt="User"
                        />
                        <AvatarFallback className="border border-gray-400 bg-white">
                          {userDetails?.first_name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <Textarea
                        placeholder="Write your reply..."
                        value={values.content}
                        onChange={(e) =>
                          setFieldValue("content", e.target.value)
                        }
                        className="flex-grow bg-white text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md resize-none"
                        rows={2}
                      />
                    </div>
                    <div className="flex justify-end mt-4 space-x-2">
                      <Button
                        variant="outline"
                        onClick={() => setReplyingTo(null)}
                        className="bg-white"
                      >
                        Cancel
                      </Button>
                      <AppButton
                        type="submit"
                        label="Reply"
                        loading={loading}
                        disabled={!values.content.trim()}
                        iconStart={<Send className="h-4 w-4 mr-2" />}
                      />
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          )}
          {comment.replies &&
            comment.replies.map((reply) => renderComment(reply, true))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl border-t mx-auto p-4 bg-white text-gray-800">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full ">
          <div className="flex items-center space-x-4 mb-6">
            <Button
              variant="outline"
              className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300"
              onClick={toggleExpand}
            >
              <MessageCircle className="h-5 w-5" />
              <span>Comment</span>
            </Button>
            <Button
              variant="outline"
              className={`${
                isLiked
                  ? "bg-blue-100 hover:bg-blue-200 text-blue-800 border-blue-300"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300"
              }`}
              onClick={handleLike}
              disabled={likeLoading}
            >
              <ThumbsUp className="h-5 w-5 mr-2" />
              <span>{isLiked ? "Liked" : "Like"}</span>
            </Button>
           
          </div>

          {isExpanded && (
            <Formik
              initialValues={initialState}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              enableReinitialize={true}
            >
              {({ values, setFieldValue }) => {
                return (
                  <Form>
                    <div className="bg-gray-50 rounded-lg p-4 mb-6 transition-all duration-300 ease-in-out">
                      <div className="flex items-start space-x-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage
                            src="/placeholder.svg?height=40&width=40"
                            alt="User"
                          />
                          <AvatarFallback className="border border-gray-400 bg-white">
                            {userDetails?.first_name[0]}
                          </AvatarFallback>
                        </Avatar>
                        <Textarea
                          placeholder="Share your thoughts..."
                          value={values.content}
                          onChange={(e) =>
                            setFieldValue("content", e.target.value)
                          }
                          className="flex-grow bg-white text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md resize-none"
                          rows={3}
                        />
                      </div>
                      <div className="flex justify-between mt-4">
                        <div className="flex space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-600 hover:text-gray-800 hover:bg-gray-200"
                          >
                            <ImageIcon className="h-5 w-5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-600 hover:text-gray-800 hover:bg-gray-200"
                          >
                            <AtSign className="h-5 w-5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-600 hover:text-gray-800 hover:bg-gray-200"
                          >
                            <Smile className="h-5 w-5" />
                          </Button>
                        </div>
                        <AppButton
                          type="submit"
                          label="Post"
                          loading={loading}
                          disabled={!values.content.trim()}
                          iconStart={<Send className="h-4 w-4 mr-2" />}
                        />
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          )}

          <ScrollArea className="pr-4">
            {comments?.map((comment: CommentProps) => renderComment(comment))}
          </ScrollArea>
        </div>
      </div>
     
    </div>
  );
}
