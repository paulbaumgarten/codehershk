"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48 bg-background-50">
      <div className="max-w-xl text-center space-y-6 py-12">
        <h1 className="text-6xl font-extrabold text-text-900 sm:text-8xl">404</h1>
        <p className="text-text-600 text-xl sm:text-2xl">
          Oops! We can’t find the page you’re looking for.
        </p>
        <p className="text-text-700">
          It might have been moved or deleted. Double-check the URL or head back home.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-2 text-base font-medium leading-loose text-white rounded-lg bg-primary-500 hover:bg-primary-600 transition-all"
        >
          Back to Homepage
        </Link>
      </div>
    </main>
  );
}
