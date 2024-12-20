import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-16">
      <strong>Page under development</strong>
      <Link href="/" className="underline">
        Return home
      </Link>
    </div>
  );
}
