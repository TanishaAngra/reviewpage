"use client";
import Star from "./Star";
import Recommend from "./Recommend";
import Praise from "./Praise";
import { useState } from "react";

const praiseOptions = [
  "Good Quality",
  "Great Experience",
  "Value for money",
  "On-time Delivery",
];
const recommendOptions = [
  {
    path: "M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z",
    style:
      "hover:shadow hover:scale-105 bg-gray-100 hover:bg-green-200 hover:text-green-600",
    selectedStyle: " bg-green-300 text-green-800",
    val: "YES",
  },
  {
    path: "M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384",
    style:
      "hover:shadow hover:scale-105 bg-gray-100 hover:bg-red-200 hover:text-red-600",
    selectedStyle: "bg-red-300 text-red-800",
    val: "NO",
  },
];
const Reviewcard = (props) => {
  const { onReviewCloseClick } = props;

  // ===============  State ===========
  const [praiseVals, setPraiseVals] = useState([]);
  const [recommendVal, setrecommendVal] = useState("");
  const [qualRating, setqualRating] = useState(0);
  const [valMoneyRating, setvalMoneyRating] = useState(0);

  // ===============  Value Change Events ===========
  const onQualratingChange = (val) => {
    setqualRating(val);
  };
  const onVOMratingChange = (val) => {
    setvalMoneyRating(val);
  };
  const onPraiseValChange = (val) => {
    let isvalAlreadyExisits = false;
    let praiseData = [...praiseVals];

    praiseVals?.find((res, index) => {
      if (res == val) {
        isvalAlreadyExisits = true;
        praiseData?.splice(index, 1);
        setPraiseVals(praiseData);
      }
    });

    if (!isvalAlreadyExisits) {
      praiseData = [...praiseVals, val];
      setPraiseVals(praiseData);
    }
  };
  const onRecommendValChange = (val) => {
    setrecommendVal(val);
  };

  // ===============  Sub Helper Render's ===========
  const renderOptionTitleSubTitle = (title, subtitle) => {
    return (
      <>
        <h2 className="font-extrabold text-xl">{title}</h2>
        <p>{subtitle}</p>
      </>
    );
  };

  // ===============  MAIN Render ===========
  return (
    <>
      <div className=" h-max w-max bg-neutral-100 rounded-2xl">
        <span
          className="mx-2 my-4 font-extrabold text-xl font-roboto cursor-pointer"
          onClick={onReviewCloseClick}
        >
          X
        </span>
        <h2 className="mx-4 mt-4 font-extrabold text-3xl">Leave a review</h2>
        <div className="mx-4 mt-4">
          {renderOptionTitleSubTitle(
            "Quality",
            "Rate the quality of the product!!"
          )}
          <Star rating={qualRating} onChange={onQualratingChange} />
        </div>
        <div className="mx-4 mt-4">
          {renderOptionTitleSubTitle(
            "Value for money",
            "Rate the product as per value for money!!"
          )}
          <Star rating={valMoneyRating} onChange={onVOMratingChange} />
        </div>
        <div className="mx-4 mt-4">
          {renderOptionTitleSubTitle(
            "Would you recommend this product?",
            "Make a choice by clicking the below options!!"
          )}
          <Recommend
            options={recommendOptions}
            value={recommendVal}
            onValueChange={onRecommendValChange}
          />
        </div>
        <div className="mx-4 mt-4">
          {renderOptionTitleSubTitle(
            "Praise",
            "Praise if you liked our product!!"
          )}
          <Praise
            options={praiseOptions}
            values={praiseVals}
            onValueChange={onPraiseValChange}
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <button
            className="py-2.5 px-5 me-2 mb-4 text-lg font-medium text-gray-900 focus:outline-none bg-blue-200 rounded-lg hover:bg-blue-300 hover:text-blue-800"
            onClick={onReviewCloseClick}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};

export default Reviewcard;
