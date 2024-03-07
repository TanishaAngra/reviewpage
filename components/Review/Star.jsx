"use client";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Star = (props) => {
  const {rating,onChange} =props

  return <Rating style={{ maxWidth: 200 }} value={rating} onChange={onChange} />

};

export default Star;
