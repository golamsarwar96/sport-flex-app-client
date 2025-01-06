import { useEffect, useState } from "react";
import { BsQuote } from "react-icons/bs";
import { CgQuote } from "react-icons/cg";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="px-5 mb-20">
      <div>
        <p className="text-center text-lg text-amber-500">Testimonials</p>
        <h1 className="text-5xl text-center text-cyan-950 mt-3">
          Our Customers <span className="text-amber-500">Review</span>
        </h1>
      </div>
      <div className="divider mb-16 w-[20%] mx-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-16 md:gap-0">
        {reviews.map((review, index) => (
          <div className="bg-white w-[90%] mx-auto relative p-3 pb-10 hover:shadow-lg">
            <img
              className="w-20 h-20 object-cover rounded-full mx-auto -mt-10"
              src={review.reviewerImage}
              alt=""
            />
            <p className="text-center mt-3 lg:text-2xl md:text-xl text-2xl">
              {review.customerName}
            </p>
            <div className="divider mt-10"></div>
            <div className="absolute lg:top-[120px] md:top-[118px] md:left-[67px] lg:left-[175px] top-[118px] left-[134px] flex gap-2">
              <FaQuoteLeft className="lg:text-5xl md:text-4xl text-4xl" />
              <FaQuoteRight className="lg:text-4xl md:text-3xl text-3xl" />
            </div>
            <div className="flex justify-center gap-[2px] text-amber-400 mt-10 text-2xl">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStarHalfAlt></FaStarHalfAlt>
            </div>
            <p className="text-center text-sm mt-5">{review.reviewText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
