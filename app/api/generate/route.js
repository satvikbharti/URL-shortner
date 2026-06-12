
import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

const RESERVED_ALIASES = [
  "api",
  "shorten",
  "about",
  "contact",
  "github",
  "favicon.ico",
  "_next",
]

function validateUrl(value) {
  try {
    const parsed = new URL(value)
    return parsed.protocol === "http:" || parsed.protocol === "https:"
  } catch {
    return false
  }
}

function validateAlias(alias) {
  return /^[a-zA-Z0-9_-]{3,40}$/.test(alias)
}

function randomAlias(length = 6) {
  const charset = "abcdefghijklmnopqrstuvwxyz0123456789"
  let alias = ""
  for (let i = 0; i < length; i += 1) {
    alias += charset[Math.floor(Math.random() * charset.length)]
  }
  return alias
}

async function generateUniqueAlias(collection) {
  for (let attempt = 0; attempt < 6; attempt += 1) {
    const alias = randomAlias(6)
    const exists = await collection.findOne({ shorturl: alias })
    if (!exists) return alias
  }
  throw new Error("Unable to generate a unique alias. Please try again.")
}

export async function POST(request) {
  const body = await request.json()
  const url = body.url?.trim()
  let shorturl = body.shorturl?.trim()
  if (shorturl) shorturl = shorturl.toLowerCase()

  if (!url || !validateUrl(url)) {
    return NextResponse.json(
      { success: false, error: true, message: "Provide a valid URL starting with http:// or https://." },
      { status: 400 }
    )
  }

  const client = await clientPromise
  const db = client.db("bitlinks")
  const collection = db.collection("url")

  if (shorturl) {
    if (!validateAlias(shorturl)) {
      return NextResponse.json(
        {
          success: false,
          error: true,
          message: "Alias must be 3-40 characters and may contain letters, numbers, - and _.",
        },
        { status: 400 }
      )
    }

    if (RESERVED_ALIASES.includes(shorturl.toLowerCase())) {
      return NextResponse.json(
        {
          success: false,
          error: true,
          message: "That alias is reserved. Choose a different custom alias.",
        },
        { status: 400 }
      )
    }

    const existing = await collection.findOne({ shorturl })
    if (existing) {
      return NextResponse.json(
        { success: false, error: true, message: "That alias is already taken." },
        { status: 409 }
      )
    }
  } else {
    shorturl = await generateUniqueAlias(collection)
  }

  await collection.insertOne({
    url,
    shorturl,
    createdAt: new Date(),
    clicks: 0,
  })

  return NextResponse.json({
    success: true,
    error: false,
    message: "URL generated successfully.",
    shorturl,
  })
}
