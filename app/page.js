import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-50 min-h-screen">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-800 shadow-sm">
              Fast. Custom. No login.
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Create memorable short links instantly.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-700">
                BitLinks makes link sharing simple with custom aliases, click tracking, and instant redirects. Build your own URL shortener experience using Next.js and MongoDB.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/shorten" className="inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-700">
                Shorten a link
              </Link>
              <a href="https://github.com/satvikbharti3108" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-purple-300 bg-white px-6 py-3 text-sm font-semibold text-purple-800 transition hover:bg-purple-50">
                View code
              </a>
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-[2rem] shadow-2xl sm:h-96">
            <Image
              src="/vector.jpg"
              alt="URL shortener illustration"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              loading="eager"
              className="object-cover"
            />
          </div>
        </div>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Custom aliases</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Choose your own short IDs or let BitLinks generate a sleek alias automatically.
            </p>
          </article>
          <article className="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Click tracking</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Every shortened link stores metadata and click count so you can measure performance.
            </p>
          </article>
          <article className="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Secure redirects</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Redirects are handled server-side and invalid alias requests show a friendly 404 experience.
            </p>
          </article>
        </section>
      </section>
    </main>
  );
}
