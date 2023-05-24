"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
  const router = useRouter();

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(e.currentTarget.href);
    router.refresh();
  };

  return (
    <div className="error-page">
      <h2>Not Found</h2>
      <p>
        Could not find the requested resource. <a href="/">Home</a>
      </p>
    </div>
  );
}
