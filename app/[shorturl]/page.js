import { notFound, redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
  const shorturl = params.shorturl
  const client = await clientPromise
  const db = client.db("bitlinks")
  const collection = db.collection("url")

  const regex = new RegExp(`^${shorturl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i")
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
}
