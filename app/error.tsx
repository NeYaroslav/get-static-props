"use client";
export default function NotFound({ error, reset }: { error: Error; reset(): void }) {
  return (
    <div className="error-page">
      <h2>An error has occurred</h2>
      <p onClick={reset}>try again later</p>
    </div>
  );
}
