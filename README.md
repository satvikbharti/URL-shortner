# BitLinks

BitLinks is a modern URL shortener built with Next.js, Tailwind CSS, and MongoDB. It supports custom aliases, auto-generated short URLs, click tracking, and secure server-side redirects.

## Features

- Custom alias support with validation and reserved word protection.
- Auto-generated short aliases when the user does not provide one.
- Server-side redirect handling from `app/[shorturl]`.
- Click count tracking for each shortened URL.
- Responsive user interface with live success and error messages.
- Portfolio-ready routes for About, Contact, and error handling.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env.local` and update with your MongoDB connection details:

```bash
copy .env.example .env.local
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Create a `.env.local` file with the following values:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/?retryWrites=true&w=majority
NEXT_PUBLIC_HOST=http://localhost:3000
```

## Structure

- `app/` — Next.js app routes and pages.
- `app/api/generate/route.js` — API endpoint for creating short URLs.
- `app/[shorturl]/page.js` — dynamic redirect route with click tracking.
- `components/Navbar.js` — navigation bar with working portfolio links.
- `lib/mongodb.js` — MongoDB connection helper.

## Notes

- `.env.local` is ignored to keep credentials safe.
- `.env.example` is committed to provide a template for environment values.
- This app is ready to deploy to Vercel or another Next.js-compatible host.

## License

This project is open source and portfolio-ready.
