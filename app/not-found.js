import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-purple-50 px-6 py-16">
      <div className="max-w-xl rounded-4xl bg-white p-10 text-center shadow-2xl">
        <h1 className="text-5xl font-bold text-purple-800">404</h1>
        <p className="mt-4 text-lg text-slate-700">The short link you are looking for does not exist.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-700">
          Return home
        </Link>
      </div>
    </main>
  )
}
