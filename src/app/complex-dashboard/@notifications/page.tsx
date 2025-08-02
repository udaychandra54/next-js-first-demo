import { Card } from "@/app/components/card";
import Link from "next/link";
import React from "react";

const Notifications = () => {
  return (
    <Card>
      <h1>Notifications</h1>
      <div className="m-2">
        <Link href="/complex-dashboard/archived">Archived</Link>
      </div>
    </Card>
  );
};

export default Notifications;
