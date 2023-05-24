import Link from "next/link";

export default function NotFound() {
  return (
    <div className="error-page">
      <h2>Not Found</h2>
      <p>
        Could not find the requested resource. <Link href="/">Home</Link>
      </p>
    </div>
  );
}
