import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f6f0ff] px-6 py-16">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-8 shadow-2xl sm:p-12">
        <div className="rounded-[1.5rem] bg-gradient-to-r from-purple-700 via-fuchsia-600 to-violet-500 p-10 text-white shadow-xl sm:p-14">
          <h1 className="text-5xl font-bold">About BitLinks</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/90">
            BitLinks is a modern URL shortener built to demonstrate a polished, full-stack portfolio project. It combines Next.js, Tailwind CSS, and MongoDB to deliver a fast, user-friendly experience with real data persistence and server-side redirects.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-purple-100 bg-purple-50 p-8 shadow-sm">
            <h2 className="text-3xl font-semibold text-slate-900">Why this project?</h2>
            <p className="mt-4 text-slate-700 leading-8">
              BitLinks shows your ability to build both frontend and backend features in a real web app. It proves you can handle dynamic routing, form validation, custom alias logic, and database interaction.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-purple-100 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold text-slate-900">What it delivers</h2>
            <ul className="mt-4 space-y-4 text-slate-600">
              <li className="rounded-3xl border border-purple-200 bg-purple-50 p-4">Smooth short link creation with validation and alias generation.</li>
              <li className="rounded-3xl border border-purple-200 bg-purple-50 p-4">Server-side redirects with click tracking in MongoDB.</li>
              <li className="rounded-3xl border border-purple-200 bg-purple-50 p-4">Responsive, portfolio-ready design with clean UX.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-purple-100 bg-white p-7 shadow-sm">
            <p className="text-2xl font-semibold text-purple-700">Feature-rich</p>
            <p className="mt-3 text-slate-600">Includes custom alias rules, auto-generated shortcodes, and friendly validation.</p>
          </div>
          <div className="rounded-[1.5rem] border border-purple-100 bg-white p-7 shadow-sm">
            <p className="text-2xl font-semibold text-purple-700">Full-stack</p>
            <p className="mt-3 text-slate-600">Built with Next.js App Router, server actions, and MongoDB backend storage.</p>
          </div>
          <div className="rounded-[1.5rem] border border-purple-100 bg-white p-7 shadow-sm">
            <p className="text-2xl font-semibold text-purple-700">Portfolio-ready</p>
            <p className="mt-3 text-slate-600">Perfect for showcasing your web development skills to employers or clients.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link href="/shorten" className="inline-flex items-center justify-center rounded-full bg-purple-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-purple-800">
            Create a short link
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-purple-300 px-7 py-3 text-sm font-semibold text-purple-900 transition hover:bg-purple-50">
            Contact me
          </Link>
        </div>
      </div>
    </main>
  )
}
