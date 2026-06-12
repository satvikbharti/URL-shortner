import { notFound, redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

export default async function Page({ params }) {
  const shorturl = String(params.shorturl || "").trim()
  if (!shorturl) {
    return notFound()
  }

  const client = await clientPromise
  const db = client.db("bitlinks")
  const collection = db.collection("url")

  const regex = new RegExp(`^${escapeRegExp(shorturl)}$`, "i")
  const urlDoc = await collection.findOne({ shorturl: regex })
  if (!urlDoc) {
    return notFound()
  }

  await collection.updateOne({ _id: urlDoc._id }, { $inc: { clicks: 1 } })
  redirect(urlDoc.url)
}
