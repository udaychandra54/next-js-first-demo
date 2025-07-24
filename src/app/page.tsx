import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Home Page</h2>
      <div className="flex gap-4">
        <Link href="/blog" className="px-4 py-2 bg-blue-600 text-white rounded">
          Blog
        </Link>
        <div>
          <Link href={`/article/1?lan=en`}>English</Link>
          <Link href={`/article/2?lan=fr`}>French</Link>
          <Link href={`/article/3?lan=es`}>Spansih</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
