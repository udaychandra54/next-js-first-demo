import React from "react";

const getRandomNum = (count: number) => {
  return Math.floor(Math.random() * count);
};

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  const rn = getRandomNum(2);
  if (rn === 1) {
    throw Error("Error loading product");
  }
  return (
    <div>
      {children}
      <h2>Feature Products</h2>
    </div>
  );
};

export default ProductDetailsLayout;
