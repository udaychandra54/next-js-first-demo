import React from "react";
import Link from "next/link";

export const metadata = {
  title: {
    absolute: "Products page",
  },
  description: "products page by next js",
};

const Products = () => {
  return (
    <div className="m-4">
      <h2>products page</h2>

      <ul>
        <h2>
          <Link href="/products/1">Product 1</Link>
        </h2>
        <h2>
          <Link href="/products/2">Product 2</Link>
        </h2>
        <h2>
          <Link href="/products/3" replace>
            Product 3
          </Link>
        </h2>
      </ul>
    </div>
  );
};

export default Products;
