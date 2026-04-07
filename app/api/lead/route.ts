import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    // TODO: Push to GHL webhook + SimpleFlow Dashboard
    // For now, just log
    console.log("New lead:", data)

    const ghlWebhook = process.env.GHL_LEAD_WEBHOOK_URL
    if (ghlWebhook) {
      await fetch(ghlWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
    }

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
