import { notFound, redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

export default async function Page({ params }) {
  const shorturl = params.shorturl

  try {
    const client = await clientPromise
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    const regex = new RegExp(`^${escapeRegExp(shorturl)}$`, "i")
    const result = await collection.findOneAndUpdate(
      { shorturl: regex },
      { $inc: { clicks: 1 } },
      { returnDocument: "after" }
    )

    const updated = result?.value ?? result
    if (!updated) {
      return notFound()
    }

    redirect(updated.url)
  } catch (error) {
    console.error("Alias redirect error:", shorturl, error)
    return notFound()
  }
}
