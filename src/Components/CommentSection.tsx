import React, { useEffect, useState, FormEvent } from "react";

interface Review {
  id: number;
  FirstName: string;
  LastName: string;
  Title: string;
  Review: string;
}

interface CommentSectionProps {
  id: number; // Make sure to pass a number for the `id`
}

const CommentSection: React.FC<CommentSectionProps> = ({ id }) => {
  const [review, setReview] = useState<string>("");
  const [allReviews, setAllReviews] = useState<Review[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;
  const BASE_URL = process.env.REACT_APP_BASE_URL as string;

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`${BASE_URL}/blog/postcomment/${id}/`);
        const data: Review[] = await response.json();
        setAllReviews(data);
      } catch (error) {
        console.log("Error Fetching Comments!!!!!", error);
      }
    };
    fetchComments();
  }, [id, BASE_URL]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage * itemsPerPage < allReviews.length ? prevPage + 1 : prevPage
    );
  };

  const startPage = (currentPage - 1) * itemsPerPage;
  const currentItems = allReviews.slice(startPage, startPage + itemsPerPage);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("review", review); // Pass review data correctly
    try {
      const response = await fetch(`${BASE_URL}/blog/postcomment/${id}/`, {
        method: "POST",
        headers: {
          // Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to submit review");
      }
      setReview(""); // Clear the review input after successful submission
    } catch (error) {
      console.error("Error Submitting Review", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-6 px-2">
      <div className="grid gap-6">
        <div className="grid gap-2">
          <h2 className="text-2xl font-bold font-great-vibes">
            Submit a Comment
          </h2>
          <svg
            className="w-60 h-7"
            viewBox="7 6 160 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 5 Q 5 0, 10 5 T 20 5 T 30 5 T 40 5 T 50 5 T 60 5 T 70 5 T 80 5 T 90 5 T 100 5 T 110 5 T 120 5 T 130 5 T 140 5 T 150 5 T 160 6 T 170 7 T 180 8"
              stroke="black"
              fill="transparent"
              strokeWidth="2"
            />
          </svg>
          <p className="text-gray-500 dark:text-gray-400">
            Share your thoughts and opinions with others.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md border border-gray-300 shadow-gray-400 p-6">
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="review" className="font-medium">
                  Review
                </label>
                <textarea
                  id="review"
                  placeholder="Share your thoughts and experiences"
                  rows={4}
                  value={review}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300 focus:border-indigo-300"
                  onChange={(e) => setReview(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
      {/* Showcasing the reviews */}
      <div className="grid gap-6 pt-6">
        <div className="grid gap-2">
          <h2 className="text-2xl font-bold">All Comments</h2>
          <p className="text-gray-500 dark:text-gray-400">
            See what other travelers have to say about their stay.
          </p>
        </div>
        <div className="grid gap-4">
          {allReviews.length === 0 ? (
            <div className="text-center text-lg text-gray-600 mt-20">
              There are no comments yet.....
            </div>
          ) : (
            <div className="grid gap-6">
              <div className="grid gap-4">
                {currentItems.map((review) => (
                  <div className="flex items-start gap-4" key={review.id}>
                    <div className="rounded-full">
                      <img
                        src="/img/icons.png"
                        alt="User"
                        className="h-12 w-12"
                        height={40}
                        width={40}
                      />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center gap-2">
                        <div className="font-medium capitalize">
                          {review.FirstName + " " + review.LastName ||
                            "Anonymous"}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold capitalize">
                        {review.Title || "Untitled"}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 capitalize">
                        {review.Review || "No review"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Pagination */}
      <div className="flex justify-between mt-8">
        <button
          className="px-4 py-2 mx-2 text-white bg-gray-900 rounded shadow-lg shadow-white disabled:bg-gray-300"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 mx-2 text-white bg-gray-900 rounded disabled:bg-gray-300"
          onClick={handleNextPage}
          disabled={currentPage * itemsPerPage >= allReviews.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
