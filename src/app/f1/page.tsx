import Link from "next/link";
import React from "react";

const F1Page = () => {
  return (
    <div className="m-3">
      <h1>F1 Page</h1>
      <div>
        <Link href="/f1/f2">F2</Link>
        <Link href="/f3"> F3</Link>
        <Link href="/f4"> F4</Link>
      </div>
    </div>
  );
};

export default F1Page;
