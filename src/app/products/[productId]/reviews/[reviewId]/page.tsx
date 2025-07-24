import { notFound } from "next/navigation";
import React from "react";

// const getRandomNum = (count: number) => {
//   return Math.floor(Math.random() * count);
// };

const ReviewDetail = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  // const rn = getRandomNum(2);
  // if (rn === 1) {
  //   throw Error("Error loading review");
  // }
  const { productId, reviewId } = await params;
  if (+productId > 100) {
    notFound();
  }
  return (
    <div className="m-3">
      <h2>
        Product {productId} review {reviewId}
      </h2>
    </div>
  );
};

export default ReviewDetail;
