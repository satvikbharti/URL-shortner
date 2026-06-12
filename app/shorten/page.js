"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Shorten = () => {
  const [url, setUrl] = useState("")
  const [shorturl, setShorturl] = useState("")
  const [generated, setGenerated] = useState("")
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState("success")
  const [isLoading, setIsLoading] = useState(false)

  const getHostOrigin = () => {
    if (typeof window !== "undefined") {
      return window.location.origin
    }
    return process.env.NEXT_PUBLIC_HOST || ""
  }

  const validateUrl = (value) => {
    try {
      const parsed = new URL(value)
      return parsed.protocol === "http:" || parsed.protocol === "https:"
    } catch {
      return false
    }
  }

  const generate = async () => {
    setMessage("")
    setMessageType("success")

    if (!url.trim()) {
      setMessage("Enter a valid URL to shorten.")
      setMessageType("error")
      return
    }

    if (!validateUrl(url.trim())) {
      setMessage("URL must start with http:// or https://.")
      setMessageType("error")
      return
    }

    setIsLoading(true)

    try {
      const aliasValue = shorturl.trim().toLowerCase()
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim(), shorturl: aliasValue }),
      })
      const result = await response.json()

      if (!result.success) {
        setMessage(result.message || "Unable to create a short link.")
        setMessageType("error")
        return
      }

      const finalShorturl = result.shorturl || shorturl.trim()
      setGenerated(`${getHostOrigin()}/${finalShorturl}`)
      setUrl("")
      setShorturl("")
      setMessage(result.message || "Short link generated successfully.")
      setMessageType("success")
    } catch (error) {
      console.error(error)
      setMessage("Something went wrong. Please try again.")
      setMessageType("error")
    } finally {
      setIsLoading(false)
    }
  }

  const copyLink = async () => {
    if (!generated) return
    try {
      await navigator.clipboard.writeText(generated)
      setMessage("Link copied to clipboard.")
      setMessageType("success")
    } catch {
      setMessage("Unable to copy link. Please copy manually.")
      setMessageType("error")
    }
  }

  return (
    <div className='mx-auto max-w-2xl bg-purple-100 my-16 rounded-3xl p-8 shadow-lg'>
      <h1 className='text-3xl font-bold text-slate-900'>Generate your short URL</h1>
      <p className='mt-2 text-slate-700'>Paste a long link, choose a custom alias, and share it instantly.</p>

      <div className='mt-8 grid gap-4'>
        <input
          type='text'
          value={url}
          className='w-full rounded-2xl border border-purple-200 bg-white px-4 py-3 text-slate-900 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200'
          placeholder='Enter a URL (https://example.com)'
          onChange={(e) => setUrl(e.target.value)}
        />

        <input
          type='text'
          value={shorturl}
          className='w-full rounded-2xl border border-purple-200 bg-white px-4 py-3 text-slate-900 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200'
          placeholder='Preferred alias (optional, letters and numbers only)'
          onChange={(e) => setShorturl(e.target.value)}
        />

        <button
          onClick={generate}
          disabled={isLoading}
          className='inline-flex justify-center rounded-2xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60'
        >
          {isLoading ? "Generating..." : "Generate short link"}
        </button>
      </div>

      {message && (
        <div className={`mt-5 rounded-2xl px-4 py-3 text-sm ${messageType === "error" ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700"}`}>
          {message}
        </div>
      )}

      {generated && (
        <div className='mt-6 rounded-3xl border border-purple-200 bg-white p-5 shadow-sm'>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
            <div>
              <p className='text-sm text-slate-500'>Your short URL</p>
              <a target='_blank' rel='noreferrer' href={generated} className='break-all text-lg font-semibold text-purple-800 hover:underline'>
                {generated}
              </a>
            </div>
            <button
              onClick={copyLink}
              className='rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-purple-700'
            >
              Copy link
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Shorten