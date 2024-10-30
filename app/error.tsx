"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h-[100vh] flex flex-col justify-center items-center  ">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </section>
  );
}
