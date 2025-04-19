/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

import { sendPurchaseReceipt } from "@/emails";
import Order from "@/lib/db/models/order.model";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-03-31.basil", // or latest, adjust as needed
});

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature") as string;

  let event: Stripe.Event;

  try {
    const text = await req.text(); // Use .text() to get raw body
    event = stripe.webhooks.constructEvent(
      text,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  console.log("event", event);

  if (event.type === "charge.succeeded") {
    const charge = event.data.object as Stripe.Charge;
    const orderId = charge.metadata.orderId;
    const email = charge.billing_details.email;
    const pricePaidInCents = charge.amount;

    const order = await Order.findById(orderId).populate("user", "email");

    if (!order) {
      return new NextResponse("Bad Request", { status: 400 });
    }

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
      console.error("email error", err);
    }

    return NextResponse.json({
      message: "updateOrderToPaid was successful",
    });
  }

  return new NextResponse("Event ignored", { status: 200 });
}
