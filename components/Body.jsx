"use client";
import { showHideReview } from "@/redux/reviewSlice/reviewSlice";
import { useDispatch, useSelector } from "react-redux";
import Reviewcard from "./Review/Reviewcard";

const Body = () => {
  const dispatch = useDispatch();
  const reviewVisibilty = useSelector((state) => state.reviewVisibilty);
  
  const onReviewCloseClick = () => {
    dispatch(showHideReview(false));
  };
  return (
    <>
      <div className="flex flex-row min-h-screen justify-center items-center bg-[url('/9387546_4166636.svg')] bg-cover">
        {reviewVisibilty && (
          <Reviewcard onReviewCloseClick={onReviewCloseClick} />
        )}
      </div>
    </>
  );
};

export default Body;
