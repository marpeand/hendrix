"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <article className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        Something went wrong
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        We encountered an unexpected error. Please try again.
      </p>
      <button
        onClick={reset}
        className="b text-white py-2 px-4 rounded transition"
      >
        Try again
      </button>
      <pre className="mt-4 text-sm text-gray-500 p-4 rounded">
        {error.message}
      </pre>
    </article>
  );
}
