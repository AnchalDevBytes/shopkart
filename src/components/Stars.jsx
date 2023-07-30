import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const Stars = ({ stars, reviews }) => {
  const StartRating = Array.from({ length: 5 }, (elm, index) => {
    let Number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <AiFillStar className="text-2xl text-yellow-500" />
        ) : stars >= Number ? (
          <BsStarHalf className="text-xl text-yellow-500" />
        ) : (
          <AiOutlineStar className="text-2xl text-yellow-500" />
        )}
      </span>
    );
  });

  return (
    <div className="flex justify-start items-center">
      {StartRating}
      <p>({reviews} customer review)</p>
    </div>
  );
};

export default Stars;
