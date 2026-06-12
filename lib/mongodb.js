// lib/mongodb.js

import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI
if (!uri) {
  throw new Error("The MONGODB_URI environment variable is not defined.")
}

let client
let clientPromise

const globalWithMongo = globalThis
if (process.env.NODE_ENV === "development") {
  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri)
    globalWithMongo._mongoClientPromise = client.connect()
  }
  clientPromise = globalWithMongo._mongoClientPromise
} else {
  client = new MongoClient(uri)
  clientPromise = client.connect()
}

export default clientPromise