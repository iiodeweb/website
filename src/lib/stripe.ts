import Stripe from "stripe"

let cachedClient: Stripe | null = null

export function isStripeConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY)
}

export function getStripeClient(): Stripe {
  const apiKey = process.env.STRIPE_SECRET_KEY

  if (!apiKey) {
    throw new Error("STRIPE_SECRET_KEY is not set")
  }

  if (!cachedClient) {
    cachedClient = new Stripe(apiKey)
  }

  return cachedClient
}
