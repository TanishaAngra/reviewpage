"use client";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Star = () => {
  const [rating, setRating] = useState(0); 

  return <Rating style={{ maxWidth: 200 }} value={rating} onChange={setRating} />

};

export default Star;
