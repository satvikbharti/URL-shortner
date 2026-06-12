import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f6f0ff] px-6 py-16">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-8 shadow-2xl sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
          <div>
            <h1 className="text-5xl font-bold text-slate-900">Get in touch</h1>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Want to showcase this project in your portfolio or need help deploying it? I am available to help with deployment, feature customization, and technical guidance.
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-gradient-to-br from-purple-700 to-fuchsia-600 p-8 text-white shadow-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/80">Reach out anytime</p>
            <p className="mt-4 text-2xl font-semibold">Let us build your next portfolio piece.</p>
            <div className="mt-7 space-y-4 text-slate-100">
              <div>
                <p className="font-semibold">Email</p>
                <p className="mt-1 text-sm">your-email@example.com</p>
              </div>
              <div>
                <p className="font-semibold">GitHub</p>
                <p className="mt-1 text-sm">github.com/satvikbharti3108</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.5rem] border border-purple-100 bg-purple-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">What I offer</h2>
            <ul className="mt-5 space-y-4 text-slate-700">
              <li>Deployment guidance for Vercel or custom hosting.</li>
              <li>UI/UX enhancements to make the app portfolio-ready.</li>
              <li>Backend improvements like analytics, auth, and admin.</li>
            </ul>
          </div>
          <div className="rounded-[1.5rem] border border-purple-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Use cases</h2>
            <ul className="mt-5 space-y-4 text-slate-700">
              <li>Showcase a real full-stack project on your resume.</li>
              <li>Customize the app for client demos or presentations.</li>
              <li>Turn it into a production-ready URL service with analytics.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link href="/" className="inline-flex items-center justify-center rounded-full bg-purple-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-purple-800">
            Back to home
          </Link>
          <a href="https://github.com/satvikbharti3108" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-purple-300 px-7 py-3 text-sm font-semibold text-purple-900 transition hover:bg-purple-50">
            View GitHub
          </a>
        </div>
      </div>
    </main>
  )
}
