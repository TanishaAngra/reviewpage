"use client";
import Star from "./Star";
import Recommend from "./Recommend";
import Praise from "./Praise";
// import { RxCross2 } from "react-icons/rx";

const Reviewcard = (props) => {
  const { onReviewCloseClick } = props;
  return (
    <>
      <div className=" h-max w-max bg-neutral-100 rounded-2xl ">
        {/* <RxCross2 className="mx-2 " /> */}
        <span 
          className="mx-2 my-4 font-extrabold text-xl font-roboto cursor-pointer"
          onClick={onReviewCloseClick}
        >
          X
        </span>
        <h2 className="mx-4 mt-4 font-extrabold text-3xl">Leave a review</h2>
        <div className="mx-4 mt-4">
          <h2 className="font-extrabold text-xl">Quality</h2>
          <p>Rate the quality of the product!!</p>
          <Star />
        </div>
        <div className="mx-4 mt-4">
          <h2 className="font-extrabold text-xl">Value for money</h2>
          <p>Rate the product as per value for money!!</p>
          <Star />
        </div>
        <div className="mx-4 mt-4">
          <h2 className="font-extrabold text-xl">
            Would you recommend this product?
          </h2>
          <p>Make a choice by clicking the below options!!</p>
          <Recommend />
        </div>
        <div className="mx-4 mt-4">
          <h2 className="font-extrabold text-xl">Praise</h2>
          <p>Praise if you liked our product!!</p>
          <Praise />
        </div>
        <div className="flex flex-row justify-center items-center">
          <button className="py-2.5 px-5 me-2 mb-4 text-lg font-medium text-gray-900 focus:outline-none bg-blue-200 rounded-lg hover:bg-blue-300 hover:text-blue-800" onClick={onReviewCloseClick}>
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};

export default Reviewcard;
