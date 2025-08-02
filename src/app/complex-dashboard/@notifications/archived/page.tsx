import { Card } from "@/app/components/card";
import Link from "next/link";
import React from "react";

const Archived = () => {
  return (
    <Card>
      <h1>Archived</h1>
      <div className="m-2">
        <Link href="/complex-dashboard">Default</Link>
      </div>
    </Card>
  );
};

export default Archived;
