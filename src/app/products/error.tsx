"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div className="m-4">
      <h2> {error.message}</h2>
      <button
        className="btn rounded bg-blue-500 text-2xl text-white p-3 cursor-pointer"
        onClick={() => reload()}
      >
        try again
      </button>
    </div>
  );
};

export default Error;
