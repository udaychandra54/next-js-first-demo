// app/products/[productId]/page.tsx
import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: { productId: string };
};

// ✅ This runs at build time or on demand (for dynamic routes)
export const generateMetadata = ({ params }: Props): Metadata => {
  const id = params.productId;
  return {
    title: `Product ID ${id}`,
  };
};

const ProductDetails = ({ params }: Props) => {
  const id = params.productId;
  return (
    <div className="m-4">
      <h2>ProductDetails</h2>
      <h3>Product {id}</h3>
      <Link href="/products">PRoducts</Link>
    </div>
  );
};

export default ProductDetails;
