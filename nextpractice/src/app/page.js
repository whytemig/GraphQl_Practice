import Link from "next/link";

//All the components are Servers by default.
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-3">
      <h1>Hello from the Home Page!</h1>
      <Link
        href={"/products"}
        className="bg-red-500 px-3 py-4 rounded text-slate-100 font-semibold"
      >
        Products
      </Link>
    </main>
  );
}
