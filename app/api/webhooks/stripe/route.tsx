/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/api/webhook.ts
import { buffer } from "micro";
import Stripe from "stripe";
import type { NextApiRequest, NextApiResponse } from "next";
import Order from "@/lib/db/models/order.model";
import { sendPurchaseReceipt } from "@/emails";

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // Use this if you're on latest SDK
  apiVersion: "2025-03-31.basil",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  const buf = await buffer(req);
  const sig = req.headers["stripe-signature"] as string;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("Webhook signature verification failed.", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "charge.succeeded") {
    const charge = event.data.object as Stripe.Charge;
    const orderId = charge.metadata.orderId;
    const email = charge.billing_details.email;
    const pricePaidInCents = charge.amount;

    const order = await Order.findById(orderId).populate("user", "email");
    if (!order) return res.status(400).send("Order not found");

    order.isPaid = true;
    order.paidAt = new Date();
    order.paymentResult = {
      id: event.id,
      status: "COMPLETED",
      email_address: email!,
      pricePaid: (pricePaidInCents / 100).toFixed(2),
    };

    await order.save();

    try {
      await sendPurchaseReceipt({ order });
    } catch (err) {
      console.error("Email sending failed:", err);
    }
  }

  res.status(200).send("Webhook received");
}
